/* eslint-disable no-console */
import API_ENDPOINT from '../globals/api-endpoint';

const Api = {
  async getRestaurantDetail(restaurantId) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(restaurantId));
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error('Error while fetching restaurant detail data:', error);
      return { error: true, message: 'Error while fetching restaurant detail data.' };
    }
  },

  async  getCustomerReviews(restaurantId) {
    try {
      const response = await fetch(API_ENDPOINT.CUSTOMER_REVIEWS(restaurantId));
      const responseJson = await response.json();
      return responseJson.customerReviews;
    } catch (error) {
      console.error('Error fetching customer reviews:', error);
      return [];
    }
  },

  async addFavoriteRestaurant(restaurantId) {
    try {
      const response = await fetch(API_ENDPOINT.ADD_FAVORITE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: restaurantId }),
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw new Error('Error while adding favorite restaurant.');
    }
  },

  async removeFavoriteRestaurant(restaurantId) {
    try {
      const response = await fetch(API_ENDPOINT.REMOVE_FAVORITE, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: restaurantId }),
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw new Error('Error while removing favorite restaurant.');
    }
  },

  async getAllFavoriteRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.ADD_FAVORITE);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw new Error('Error while fetching favorite restaurant data.');
    }
  },

  async getAllRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw new Error('Error while fetching restaurant list data.');
    }
  },

};

export default Api;
