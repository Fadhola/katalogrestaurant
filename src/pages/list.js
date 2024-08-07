import Api from '../utils/api';
import { createRestaurantListTemplate } from '../templates/template-creator';

const List = {
  async render() {
    document.title = 'Home - Restaurant App';
    return `
      <div id="main-content">
        <h1 class="app-title">Explore Restaurants</h1>
        <div id="restaurant-list" class="restaurant-list">
          <!-- Content will be filled by afterRender -->
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const response = await Api.getAllRestaurants();
      const { restaurants } = response;

      const restaurantListContainer = document.getElementById('restaurant-list');
      restaurantListContainer.innerHTML = createRestaurantListTemplate(restaurants);

      const detailButtons = restaurantListContainer.querySelectorAll('.restaurant-detail-button');

      detailButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const restaurantId = button.getAttribute('data-restaurant-id');
          window.location.href = `#/restaurant/${restaurantId}`;
        });
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error rendering restaurant list:', error);
    }
  },
};

export default List;
