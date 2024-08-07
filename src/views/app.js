/* eslint-disable no-underscore-dangle */
// views/app.js

/* eslint-disable class-methods-use-this */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
    this._initMenu();
  }

  _initMenu() {
    const menuIcon = document.getElementById('menu-icon');
    const navDrawer = document.getElementById('nav-drawer');
    const navMenu = document.getElementById('nav-menu');

    menuIcon.addEventListener('click', () => {
      navDrawer.classList.toggle('active');
      navMenu.classList.toggle('active');

      if (navMenu.classList.contains('active')) {
        navMenu.querySelector('a').focus();
      } else {
        menuIcon.focus();
      }
    });

    const skipToContentLink = document.querySelector('.skip-link');
    skipToContentLink.addEventListener('click', (event) => {
      event.preventDefault();
      const url = UrlParser.parseActiveUrlWithCombiner();
      let targetId = null;

      if (url === '/') {
        targetId = 'main-content';
      } else if (url.includes('/restaurant/')) {
        targetId = 'restaurant-detail';
      } else if (url === '/favorites') {
        targetId = 'favorite-restaurants';
      }

      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.tabIndex = -1;
          targetElement.focus();
        }
      }
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
