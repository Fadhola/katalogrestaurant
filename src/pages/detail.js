/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
import { openDB } from 'idb';
import UrlParser from '../routes/url-parser';
import Api from '../utils/api';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import CONFIG from '../globals/config';

const DB_NAME = CONFIG.DATABASE_NAME;
const { OBJECT_STORE_NAME } = CONFIG;

const Detail = {
  async render() {
    return `
      <div id="restaurant-detail">
        <!-- Content will be filled in afterRender -->
      </div>
    `;
  },

  async afterRender() {
    try {
      console.log('Start rendering restaurant detail');

      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurantId = url.id;
      const restaurantDetailContainer = document.getElementById('restaurant-detail');

      const response = await Api.getRestaurantDetail(restaurantId);

      console.log('API response:', response);

      if (!response.error) {
        const restaurantDetail = response.restaurant;
        restaurantDetailContainer.innerHTML = createRestaurantDetailTemplate(restaurantDetail);

        const addToFavoriteButton = document.getElementById('add-to-favorite-button');

        console.log('Opening IndexedDB');
        const db = await openDB(DB_NAME, 1, {
          upgrade(db) {
            console.log('Inside upgrade callback');
            if (!db.objectStoreNames.contains(OBJECT_STORE_NAME)) {
              console.log('Creating object store');
              db.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
            }
          },
        });

        const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
        const store = tx.objectStore(OBJECT_STORE_NAME);
        let restaurantData = await store.get(restaurantId);

        console.log('Retrieved data from IndexedDB:', restaurantData);

        const updateButton = () => {
          if (restaurantData) {
            addToFavoriteButton.innerHTML = '❤️ Unfavorite';
            addToFavoriteButton.classList.add('unliked');
            addToFavoriteButton.classList.remove('liked');
          } else {
            addToFavoriteButton.innerHTML = '🤍 Add to Favorite';
            addToFavoriteButton.classList.remove('unliked');
            addToFavoriteButton.classList.add('liked');
          }
        };

        updateButton();

        const toggleFavoriteStatus = async () => {
          if (restaurantData) {
            const deleteTx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
            await deleteTx.objectStore(OBJECT_STORE_NAME).delete(restaurantId);
            await deleteTx.done;
            restaurantData = null;
            alert('Restaurant removed from favorites.');
          } else {
            const addTx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
            await addTx.objectStore(OBJECT_STORE_NAME).put(restaurantDetail);
            await addTx.done;
            restaurantData = restaurantDetail;
            alert('Restaurant added to favorites.');
          }

          updateButton();
        };

        addToFavoriteButton.addEventListener('click', async () => {
          toggleFavoriteStatus();
        });
      } else {
        restaurantDetailContainer.innerHTML = `<p>${response.message}</p>`;
      }
    } catch (error) {
      console.error('Error rendering restaurant detail:', error);
    }
  },
};

export default Detail;
