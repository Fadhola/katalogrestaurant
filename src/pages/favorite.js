/* eslint-disable max-len */
/* eslint-disable no-console */
import { openDB } from 'idb';
import { createFavoriteRestaurantTemplate } from '../templates/template-creator';
import CONFIG from '../globals/config';

const DB_NAME = CONFIG.DATABASE_NAME;
const { OBJECT_STORE_NAME } = CONFIG;

const Favorite = {
  async render() {
    return `
      <div id="main-content">
        <h1 class="app-title">Favorite Restaurants</h1>
        <div id="favorite-restaurants" class="restaurant-list">
          <!-- Content will be filled in afterRender -->
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const db = await openDB(DB_NAME, CONFIG.DATABASE_VERSION);

      const tx = db.transaction(OBJECT_STORE_NAME, 'readonly');
      const store = tx.objectStore(OBJECT_STORE_NAME);

      const favoriteRestaurants = await store.getAll();

      await tx.done;

      const favoriteRestaurantsContainer = document.getElementById('favorite-restaurants');

      if (favoriteRestaurants.length > 0) {
        favoriteRestaurantsContainer.innerHTML = createFavoriteRestaurantTemplate(favoriteRestaurants);

        const restaurantDetailButtons = document.querySelectorAll('.restaurant-detail-button');
        restaurantDetailButtons.forEach((button) => {
          button.addEventListener('click', () => {
            const restaurantId = button.getAttribute('data-restaurant-id');
            window.location.href = `#/restaurant/${restaurantId}`;
          });
        });
      } else {
        favoriteRestaurantsContainer.innerHTML = '<p>No favorite restaurants found.</p>';
      }
    } catch (error) {
      console.error('Error rendering favorite restaurant list:', error);
    }
  },
};

export default Favorite;
