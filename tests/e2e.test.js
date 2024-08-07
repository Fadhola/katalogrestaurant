/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
Feature('End-to-End Test');

Scenario('User can like a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant-card');

  I.click(locate('.restaurant-detail-button').first());
  I.waitForElement('#add-to-favorite-button');

  I.click('#add-to-favorite-button');
  I.seeInPopup('Restaurant added to favorites.');
  I.acceptPopup();

  I.wait(3);
  I.see('❤️ Unfavorite', '#add-to-favorite-button');
});

Scenario('User can unlike a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant-card');

  I.click(locate('.restaurant-detail-button').first());
  I.waitForElement('#add-to-favorite-button');

  I.click('#add-to-favorite-button');
  I.seeInPopup('Restaurant added to favorites.');
  I.acceptPopup();

  I.wait(3);
  I.see('❤️ Unfavorite', '#add-to-favorite-button');

  I.click('#add-to-favorite-button');
  I.seeInPopup('Restaurant removed from favorites.');
  I.acceptPopup();

  I.wait(3);
  I.see('🤍 Add to Favorite', '#add-to-favorite-button');
});
