/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import { openDB } from 'idb';
import { JSDOM } from 'jsdom';
import Detail from '../src/pages/detail';
import Api from '../src/utils/api';

jest.mock('../src/utils/api');

describe('Like and Unlike Restaurant', () => {
  let container;

  const setRestaurantData = (data) => {
    Api.getRestaurantDetail.mockResolvedValueOnce({
      restaurant: data,
      error: false,
    });
  };

  beforeEach(() => {
    container = new JSDOM(
      `<div id="restaurant-detail">
         <!-- Content will be filled in afterRender -->
       </div>`,
    ).window.document.body;

    document.body.innerHTML = '';
    document.body.appendChild(container);

    openDB.mockImplementation(() => ({
      transaction: () => ({
        objectStore: () => ({
          get: (id) => Promise.resolve({ id }),
          put: (data) => Promise.resolve(data),
          delete: () => Promise.resolve(),
        }),
      }),
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should add restaurant to favorites on button click', async () => {
    const restaurantData = {
      id: 's1knt6za9kkfw1e867',
    };

    setRestaurantData(restaurantData);

    await Detail.render();
    await Detail.afterRender();

    const addToFavoriteButton = document.getElementById('add-to-favorite-button');

    addToFavoriteButton.click();

    expect(addToFavoriteButton.classList.contains('unliked')).toBe(true);

    const db = await openDB('restaurant-db', 1);
    const storedData = await db.transaction('restaurants').objectStore('restaurants').get('s1knt6za9kkfw1e867');
    expect(storedData).toEqual(restaurantData);
  });

  it('should remove restaurant from favorites on button click', async () => {
    const restaurantData = {
      id: 's1knt6za9kkfw1e867',
    };

    setRestaurantData(restaurantData);

    const db = await openDB('restaurant-db', 1);
    await db.transaction('restaurants', 'readwrite').objectStore('restaurants').put(restaurantData);

    await Detail.render();
    await Detail.afterRender();

    const addToFavoriteButton = document.getElementById('add-to-favorite-button');

    addToFavoriteButton.click();

    expect(addToFavoriteButton.classList.contains('liked')).toBe(true);

    const storedData = await db.transaction('restaurants').objectStore('restaurants').get('s1knt6za9kkfw1e867');
    expect(storedData).toBeUndefined();
  });
});
