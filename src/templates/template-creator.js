import CONFIG from '../globals/config';

const createRestaurantDetailTemplate = (restaurantDetail, isFavorite) => {
  const categoriesHtml = restaurantDetail.categories
    ? `<h3>Categories:</h3>
           <ul>
             ${restaurantDetail.categories.map((category) => `<li>${category.name}</li>`).join('')}
           </ul>`
    : '';

  const foodsHtml = restaurantDetail.menus && restaurantDetail.menus.foods
    ? `<h3>Menu Makanan:</h3>
           <ul>
             ${restaurantDetail.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
           </ul>`
    : '';

  const drinksHtml = restaurantDetail.menus && restaurantDetail.menus.drinks
    ? `<h3>Menu Minuman:</h3>
           <ul>
             ${restaurantDetail.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
           </ul>`
    : '';
  const reviewsHtml = restaurantDetail.customerReviews
    ? `<h3>Customer Reviews:</h3>
        <ul>
          ${restaurantDetail.customerReviews.map((review) => `
            <li>
              <p><strong>${review.name}</strong></p>
              <p>${review.date}</p>
              <p>${review.review}</p>
            </li>`).join('')}
        </ul>`
    : '';

  const heartIcon = isFavorite ? '❤️' : '🤍';

  const favoriteButton = isFavorite
    ? `<button id="add-to-favorite-button" class="favorite-button liked">${heartIcon} Unfavorite</button>`
    : `<button id="add-to-favorite-button" class="favorite-button unliked">${heartIcon} Add to Favorite</button>`;

  return `
      <h1 class="app-title">Detail Restaurant</h1>
      <div class="restaurant-detail-container">
        <div class="restaurant-image">
          <img src="${CONFIG.BASE_URL}/images/large/${restaurantDetail.pictureId}" alt="${restaurantDetail.name}">
        </div>
        <div class="restaurant-details">
          <h2>${restaurantDetail.name}</h2>
          <p><strong>Alamat:</strong> ${restaurantDetail.address}</p>
          <p><strong>Kota:</strong> ${restaurantDetail.city}</p>
          <p><strong>Deskripsi:</strong> ${restaurantDetail.description}</p>
          ${categoriesHtml}
          ${foodsHtml}
          ${drinksHtml}
          ${reviewsHtml}
          ${favoriteButton}
        </div>
      </div>
    `;
};

const createFavoriteRestaurantTemplate = (restaurants) => `
  <div class="restaurant-list">
    ${restaurants.map((restaurant) => `
      <div class="restaurant-card">
        <h2>${restaurant.name}</h2>
        <img src="${CONFIG.BASE_URL}/images/medium/${restaurant.pictureId}" alt="${restaurant.name}">
        <div class="restaurant-card-info">
          <p>${restaurant.city}</p>
          <p>Rating: ${restaurant.rating}</p>
          <button data-restaurant-id="${restaurant.id}" class="restaurant-detail-button">Lihat Detail</button>
        </div>
      </div>
    `).join('')}
  </div>
  `;

const createRestaurantListTemplate = (restaurants) => `
<div class="restaurant-list">
  ${restaurants.map((restaurant) => `
    <div class="restaurant-card">
      <h2>${restaurant.name}</h2>
      <img data-src="${CONFIG.BASE_URL}/images/medium/${restaurant.pictureId}" class="lazyload" alt="${restaurant.name}">
      <div class="restaurant-card-info">
        <p>${restaurant.city}</p>
        <p>Rating: ${restaurant.rating}</p>
        <button data-restaurant-id="${restaurant.id}" class="restaurant-detail-button">Lihat Detail</button>
      </div>
    </div>
  `).join('')}
</div>
`;

export {
  createRestaurantDetailTemplate,
  createFavoriteRestaurantTemplate,
  createRestaurantListTemplate,
};
