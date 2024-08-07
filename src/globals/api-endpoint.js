import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}/review`,
  ADD_FAVORITE: `${CONFIG.BASE_URL}/favorites`,
  REMOVE_FAVORITE: `${CONFIG.BASE_URL}/favorites`,
  LIST_FAVORITES: `${CONFIG.BASE_URL}/favorites`, // Menambahkan endpoint baru untuk daftar restoran favorit
  IMAGE_SMALL: (pictureId) => `${CONFIG.BASE_URL}/images/small/${pictureId}`,
  IMAGE_MEDIUM: (pictureId) => `${CONFIG.BASE_URL}/images/medium/${pictureId}`,
  IMAGE_LARGE: (pictureId) => `${CONFIG.BASE_URL}/images/large/${pictureId}`,
  CUSTOMER_REVIEWS: (restaurantId) => `${CONFIG.BASE_URL}/review?restaurant_id=${restaurantId}`,
};

export const getRestaurantDetail = async (restaurantId) => {
  const response = await fetch(API_ENDPOINT.DETAIL(restaurantId));
  const responseJson = await response.json();
  return responseJson;
};

export const addFavoriteRestaurant = async (restaurantId) => {
  const response = await fetch(API_ENDPOINT.ADD_FAVORITE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: restaurantId }),
  });
  const responseJson = await response.json();
  return responseJson;
};

export const removeFavoriteRestaurant = async (restaurantId) => {
  const response = await fetch(API_ENDPOINT.REMOVE_FAVORITE, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: restaurantId }),
  });
  const responseJson = await response.json();
  return responseJson;
};

export const getAllFavoriteRestaurants = async () => {
  const response = await fetch(API_ENDPOINT.ADD_FAVORITE);
  const responseJson = await response.json();
  return responseJson;
};

export const getAllRestaurants = async () => {
  const response = await fetch(API_ENDPOINT.LIST);
  const responseJson = await response.json();
  return responseJson;
};

export default API_ENDPOINT;
