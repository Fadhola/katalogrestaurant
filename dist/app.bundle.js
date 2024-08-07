/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Reset styles */
body, ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a, button, textarea {
  display: inline-block;
  min-width: 44px;
  min-height: 44px;
}

/* Skip link styles */
.skip-link {
  position: absolute;
  left: 0;
  padding: 8px;
  background-color: #186F65;
  text-align: center;
  color: white;
  z-index: 100;
  text-decoration: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skip-link:focus {
  opacity: 1;
}

/* App Bar Styles */
header {
  background-color: #186F65;
  color: white;
  padding: 20px 0;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo img {
  max-width: 60px; 
  height: auto;
}

.nav-menu-container {
  display: flex;
  align-items: center;
}

.nav-menu {
  display: flex;
  list-style: none;
}

.nav-menu a {
  /* padding: 20px; */
  font-size: 20px;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  transition: background-color 0.3s ease;
  text-decoration: none;
  color: white;
}

.nav-menu a:hover {
  background-color: #004225;
}


.menu-icon {
  min-width: 44px;
  min-height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  background-color: #186F65;
  border: 0;
}

@media (min-width: 769px) {
  .menu-icon {
    display: none;
  }
}

/* Responsiveness for nav menu */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
    position: absolute;
    background-color: #186F65;
    top: 80px;
    left: 10;
    right: 0;
    z-index: 1;
  }
  
  .nav-menu.active {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .nav-menu.active li {
    padding: 12px;
    text-align: center;
  }
}

.bar {
  width: 100%;
  height: 6px;
  background-color: white;
  /* margin: 3px 0; */
}

/* Navigation Drawer Styles */
.nav-drawer {
  background-color: #186F65;
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  overflow-y: auto;
  transition: left 0.3s ease, background-color 0.3s ease;
}

.nav-drawer:hover {
  background-color: #004225;
}

.nav-drawer-menu {
  padding: 20px;
}

.nav-drawer-menu li {
  margin-bottom: 10px;
}

.nav-drawer-menu a {
  width: 44px;
  text-decoration: none;
  color: white;
}


/* Hero Element Styles */
.hero {
  text-align: center;
  position: relative;
  background-color: #FCE09B;
}

.hero img {
  width: 100%;
}

.hero-title {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  font-weight: bold;
  color: #FFB000;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 24px;
  }
}

.app-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 20px;
  color: #B2533E;
}

.restaurant-list {
  margin: 20px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

/* Restaurant Card Styles */
.restaurant-card {
  background-color: #F5F5DC;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  flex-basis: calc(33.333% - 20px);
  box-sizing: border-box;
  transition: transform 0.2s ease-in-out;
  margin-bottom: 20px;
  cursor: pointer;
}

.restaurant-card:hover {
  transform: translateY(-5px);
}

.restaurant-card img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.restaurant-card h2 {
  font-size: 18px;
  margin: 10px 0;
  color: #333;
}

.restaurant-card p {
  margin: 0;
  color: #666;
}

/* Styles for "Lihat Detail" Button */
.restaurant-card .restaurant-detail-button {
  display: block;
  padding: 10px 20px;
  background-color: #FFB000; 
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 10px auto;
  font-weight: bold; 
  text-transform: uppercase; 
}

.restaurant-card .restaurant-detail-button:hover {
  background-color: #FFD000; 
}

/* Responsiveness for restaurant cards */
@media (max-width: 768px) {
  .restaurant-card {
    flex-basis: calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .restaurant-card {
    flex-basis: 100%;
  }
}

/* Restaurant Detail Container Styles */
.restaurant-detail-container {
  display: flex;
  background-color: rgb(247, 234, 204);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  align-items: flex-start;
}

/* Restaurant Image Styles */
.restaurant-image {
  padding: 10px;
  text-align: center;
  flex-basis: 40%;
}

.restaurant-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  display: block;
}

/* Restaurant Details Styles */
.restaurant-details {
  padding: 10px;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
}

/* Restaurant Name Styles */
.restaurant-name {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-align: right; 
  padding-right: 20px; 
}


/* Customer Reviews Styles */
.restaurant-details h3 {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: left; 
}

.restaurant-details ul {
  background-color: #FFFFFF;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
}

.restaurant-details ul li {
  background-color: #FFFFFF;
  margin: 5px 0;
  font-size: 16px;
  color: #333;
  text-align: left;
}

.restaurant-details ul li p {
  margin: 0; 
}

.restaurant-details ul li {
  background-color: #fdfdfd; 
  border: 1px solid #ddd; 
  padding: 10px; 
  border-radius: 5px; 
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); 
}

.restaurant-details ul li strong {
  font-weight: bold;
  color: #333; 
}

.restaurant-details ul li p:nth-child(2) {
  color: #666; 
}

.restaurant-details ul li p:nth-child(3) {
  color: #333; 
}


#add-to-favorite-button {
  background-color: #FFB000;
  color: white;
  border: none;
  padding: 5px 10px; 
  border-radius: 5px;
  font-size: 16px; 
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: inline-block;
  text-align: center;
  min-width: 100px; 
}

#add-to-favorite-button:hover {
  background-color: #FFD000;
}

#add-to-favorite-button.unliked {
  background-color: #FF0000;
}

#add-to-favorite-button.unliked:hover {
  background-color: #CC0000;
}

#add-to-favorite-button.liked {
  background-color: #FFB000;
}

#add-to-favorite-button.liked:hover {
  background-color: #FFD000;
}

#add-to-favorite-button.liked::before {
  /* content: '❤️'; */
  margin-right: 5px;
}

#add-to-favorite-button.unliked::before {
  /* content: '🤍'; */
  margin-right: 5px;
}



/* Favorite Page Styles */
.favorite-restaurant {
  background-color: #F5F5DC;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  flex-basis: calc(33.333% - 20px);
  box-sizing: border-box;
  transition: transform 0.2s ease-in-out;
  margin-bottom: 20px;
  cursor: pointer;
}

.favorite-restaurant:hover {
  transform: translateY(-5px);
}

.favorite-restaurant img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.favorite-restaurant h2 {
  font-size: 18px;
  margin: 10px 0;
  color: #333;
}

.favorite-restaurant p {
  margin: 0;
  color: #666;
}

.favorite-restaurant .favorite-detail-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #FFB000;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin: 10px auto;
}

.favorite-restaurant .favorite-detail-link:hover {
  background-color: #FFD000;
}

footer {
  background-color: #186F65;
  color: white;
  text-align: center;
  padding: 10px 0;
}

html {
  background-color: #FCE09B;
}
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["/* Reset styles */\nbody, ul, li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\na, button, textarea {\n  display: inline-block;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n/* Skip link styles */\n.skip-link {\n  position: absolute;\n  left: 0;\n  padding: 8px;\n  background-color: #186F65;\n  text-align: center;\n  color: white;\n  z-index: 100;\n  text-decoration: none;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.skip-link:focus {\n  opacity: 1;\n}\n\n/* App Bar Styles */\nheader {\n  background-color: #186F65;\n  color: white;\n  padding: 20px 0;\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.logo img {\n  max-width: 60px; \n  height: auto;\n}\n\n.nav-menu-container {\n  display: flex;\n  align-items: center;\n}\n\n.nav-menu {\n  display: flex;\n  list-style: none;\n}\n\n.nav-menu a {\n  /* padding: 20px; */\n  font-size: 20px;\n  padding-top: 20px;\n  padding-right: 20px;\n  padding-left: 20px;\n  transition: background-color 0.3s ease;\n  text-decoration: none;\n  color: white;\n}\n\n.nav-menu a:hover {\n  background-color: #004225;\n}\n\n\n.menu-icon {\n  min-width: 44px;\n  min-height: 44px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  cursor: pointer;\n  background-color: #186F65;\n  border: 0;\n}\n\n@media (min-width: 769px) {\n  .menu-icon {\n    display: none;\n  }\n}\n\n/* Responsiveness for nav menu */\n@media (max-width: 768px) {\n  .nav-menu {\n    display: none;\n    position: absolute;\n    background-color: #186F65;\n    top: 80px;\n    left: 10;\n    right: 0;\n    z-index: 1;\n  }\n  \n  .nav-menu.active {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  \n  .nav-menu.active li {\n    padding: 12px;\n    text-align: center;\n  }\n}\n\n.bar {\n  width: 100%;\n  height: 6px;\n  background-color: white;\n  /* margin: 3px 0; */\n}\n\n/* Navigation Drawer Styles */\n.nav-drawer {\n  background-color: #186F65;\n  position: fixed;\n  top: 0;\n  left: -250px;\n  width: 250px;\n  height: 100%;\n  overflow-y: auto;\n  transition: left 0.3s ease, background-color 0.3s ease;\n}\n\n.nav-drawer:hover {\n  background-color: #004225;\n}\n\n.nav-drawer-menu {\n  padding: 20px;\n}\n\n.nav-drawer-menu li {\n  margin-bottom: 10px;\n}\n\n.nav-drawer-menu a {\n  width: 44px;\n  text-decoration: none;\n  color: white;\n}\n\n\n/* Hero Element Styles */\n.hero {\n  text-align: center;\n  position: relative;\n  background-color: #FCE09B;\n}\n\n.hero img {\n  width: 100%;\n}\n\n.hero-title {\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 36px;\n  font-weight: bold;\n  color: #FFB000;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n\n@media (max-width: 768px) {\n  .hero-title {\n    font-size: 24px;\n  }\n}\n\n.app-title {\n  font-size: 24px;\n  font-weight: bold;\n  text-align: center;\n  margin: 20px;\n  color: #B2533E;\n}\n\n.restaurant-list {\n  margin: 20px;\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n/* Restaurant Card Styles */\n.restaurant-card {\n  background-color: #F5F5DC;\n  border: 1px solid #ddd;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n  flex-basis: calc(33.333% - 20px);\n  box-sizing: border-box;\n  transition: transform 0.2s ease-in-out;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n\n.restaurant-card:hover {\n  transform: translateY(-5px);\n}\n\n.restaurant-card img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 5px;\n}\n\n.restaurant-card h2 {\n  font-size: 18px;\n  margin: 10px 0;\n  color: #333;\n}\n\n.restaurant-card p {\n  margin: 0;\n  color: #666;\n}\n\n/* Styles for \"Lihat Detail\" Button */\n.restaurant-card .restaurant-detail-button {\n  display: block;\n  padding: 10px 20px;\n  background-color: #FFB000; \n  color: white;\n  text-decoration: none;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  margin: 10px auto;\n  font-weight: bold; \n  text-transform: uppercase; \n}\n\n.restaurant-card .restaurant-detail-button:hover {\n  background-color: #FFD000; \n}\n\n/* Responsiveness for restaurant cards */\n@media (max-width: 768px) {\n  .restaurant-card {\n    flex-basis: calc(50% - 20px);\n  }\n}\n\n@media (max-width: 480px) {\n  .restaurant-card {\n    flex-basis: 100%;\n  }\n}\n\n/* Restaurant Detail Container Styles */\n.restaurant-detail-container {\n  display: flex;\n  background-color: rgb(247, 234, 204);\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  align-items: flex-start;\n}\n\n/* Restaurant Image Styles */\n.restaurant-image {\n  padding: 10px;\n  text-align: center;\n  flex-basis: 40%;\n}\n\n.restaurant-image img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 10px;\n  display: block;\n}\n\n/* Restaurant Details Styles */\n.restaurant-details {\n  padding: 10px;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  flex-basis: 60%;\n  display: flex;\n  flex-direction: column;\n}\n\n/* Restaurant Name Styles */\n.restaurant-name {\n  font-size: 24px;\n  font-weight: bold;\n  color: #333;\n  margin-bottom: 10px;\n  text-align: right; \n  padding-right: 20px; \n}\n\n\n/* Customer Reviews Styles */\n.restaurant-details h3 {\n  font-size: 20px;\n  font-weight: bold;\n  color: #333;\n  text-align: left; \n}\n\n.restaurant-details ul {\n  background-color: #FFFFFF;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  text-align: left;\n}\n\n.restaurant-details ul li {\n  background-color: #FFFFFF;\n  margin: 5px 0;\n  font-size: 16px;\n  color: #333;\n  text-align: left;\n}\n\n.restaurant-details ul li p {\n  margin: 0; \n}\n\n.restaurant-details ul li {\n  background-color: #fdfdfd; \n  border: 1px solid #ddd; \n  padding: 10px; \n  border-radius: 5px; \n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); \n}\n\n.restaurant-details ul li strong {\n  font-weight: bold;\n  color: #333; \n}\n\n.restaurant-details ul li p:nth-child(2) {\n  color: #666; \n}\n\n.restaurant-details ul li p:nth-child(3) {\n  color: #333; \n}\n\n\n#add-to-favorite-button {\n  background-color: #FFB000;\n  color: white;\n  border: none;\n  padding: 5px 10px; \n  border-radius: 5px;\n  font-size: 16px; \n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  display: inline-block;\n  text-align: center;\n  min-width: 100px; \n}\n\n#add-to-favorite-button:hover {\n  background-color: #FFD000;\n}\n\n#add-to-favorite-button.unliked {\n  background-color: #FF0000;\n}\n\n#add-to-favorite-button.unliked:hover {\n  background-color: #CC0000;\n}\n\n#add-to-favorite-button.liked {\n  background-color: #FFB000;\n}\n\n#add-to-favorite-button.liked:hover {\n  background-color: #FFD000;\n}\n\n#add-to-favorite-button.liked::before {\n  /* content: '❤️'; */\n  margin-right: 5px;\n}\n\n#add-to-favorite-button.unliked::before {\n  /* content: '🤍'; */\n  margin-right: 5px;\n}\n\n\n\n/* Favorite Page Styles */\n.favorite-restaurant {\n  background-color: #F5F5DC;\n  border: 1px solid #ddd;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n  flex-basis: calc(33.333% - 20px);\n  box-sizing: border-box;\n  transition: transform 0.2s ease-in-out;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n\n.favorite-restaurant:hover {\n  transform: translateY(-5px);\n}\n\n.favorite-restaurant img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 5px;\n}\n\n.favorite-restaurant h2 {\n  font-size: 18px;\n  margin: 10px 0;\n  color: #333;\n}\n\n.favorite-restaurant p {\n  margin: 0;\n  color: #666;\n}\n\n.favorite-restaurant .favorite-detail-link {\n  display: inline-block;\n  padding: 10px 20px;\n  background-color: #FFB000;\n  color: white;\n  text-decoration: none;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n  margin: 10px auto;\n}\n\n.favorite-restaurant .favorite-detail-link:hover {\n  background-color: #FFD000;\n}\n\nfooter {\n  background-color: #186F65;\n  color: white;\n  text-align: center;\n  padding: 10px 0;\n}\n\nhtml {\n  background-color: #FCE09B;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/globals/api-endpoint.js":
/*!*************************************!*\
  !*** ./src/globals/api-endpoint.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFavoriteRestaurant: () => (/* binding */ addFavoriteRestaurant),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getAllFavoriteRestaurants: () => (/* binding */ getAllFavoriteRestaurants),
/* harmony export */   getAllRestaurants: () => (/* binding */ getAllRestaurants),
/* harmony export */   getRestaurantDetail: () => (/* binding */ getRestaurantDetail),
/* harmony export */   removeFavoriteRestaurant: () => (/* binding */ removeFavoriteRestaurant)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/globals/config.js");


const API_ENDPOINT = {
  LIST: `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/list`,
  DETAIL: (id) => `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/detail/${id}`,
  SEARCH: (query) => `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/search?q=${query}`,
  ADD_REVIEW: `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/review`,
  ADD_FAVORITE: `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/favorites`,
  REMOVE_FAVORITE: `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/favorites`,
  LIST_FAVORITES: `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/favorites`, // Menambahkan endpoint baru untuk daftar restoran favorit
  IMAGE_SMALL: (pictureId) => `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/images/small/${pictureId}`,
  IMAGE_MEDIUM: (pictureId) => `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/images/medium/${pictureId}`,
  IMAGE_LARGE: (pictureId) => `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/images/large/${pictureId}`,
  CUSTOMER_REVIEWS: (restaurantId) => `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/review?restaurant_id=${restaurantId}`,
};

const getRestaurantDetail = async (restaurantId) => {
  const response = await fetch(API_ENDPOINT.DETAIL(restaurantId));
  const responseJson = await response.json();
  return responseJson;
};

const addFavoriteRestaurant = async (restaurantId) => {
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

const removeFavoriteRestaurant = async (restaurantId) => {
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

const getAllFavoriteRestaurants = async () => {
  const response = await fetch(API_ENDPOINT.ADD_FAVORITE);
  const responseJson = await response.json();
  return responseJson;
};

const getAllRestaurants = async () => {
  const response = await fetch(API_ENDPOINT.LIST);
  const responseJson = await response.json();
  return responseJson;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API_ENDPOINT);


/***/ }),

/***/ "./src/globals/config.js":
/*!*******************************!*\
  !*** ./src/globals/config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'restaurant-app-db',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'favorite-restaurants',
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONFIG);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lazysizes/plugins/parent-fit/ls.parent-fit */ "./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js");
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _views_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/app */ "./src/views/app.js");
/* harmony import */ var _sw_register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sw-register */ "./src/sw-register.js");
/* eslint-disable import/no-extraneous-dependencies */
// src/index.js







const app = new _views_app__WEBPACK_IMPORTED_MODULE_4__["default"]({
  button: document.querySelector('#menu-icon'),
  drawer: document.querySelector('#nav-drawer'),
  content: document.querySelector('#main-content'),
});

const renderApp = async () => {
  await app.renderPage();
  // Initialize lazysizes after rendering the page
  document.dispatchEvent(new Event('lazyloaded'));
};

window.addEventListener('hashchange', renderApp);
window.addEventListener('load', () => {
  renderApp();
  (0,_sw_register__WEBPACK_IMPORTED_MODULE_5__["default"])();
});


/***/ }),

/***/ "./src/pages/detail.js":
/*!*****************************!*\
  !*** ./src/pages/detail.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/index.js");
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/url-parser */ "./src/routes/url-parser.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/api */ "./src/utils/api.js");
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/template-creator */ "./src/templates/template-creator.js");
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals/config */ "./src/globals/config.js");
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */






const DB_NAME = _globals_config__WEBPACK_IMPORTED_MODULE_4__["default"].DATABASE_NAME;
const { OBJECT_STORE_NAME } = _globals_config__WEBPACK_IMPORTED_MODULE_4__["default"];

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

      const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__["default"].parseActiveUrlWithoutCombiner();
      const restaurantId = url.id;
      const restaurantDetailContainer = document.getElementById('restaurant-detail');

      const response = await _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"].getRestaurantDetail(restaurantId);

      console.log('API response:', response);

      if (!response.error) {
        const restaurantDetail = response.restaurant;
        restaurantDetailContainer.innerHTML = (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_3__.createRestaurantDetailTemplate)(restaurantDetail);

        const addToFavoriteButton = document.getElementById('add-to-favorite-button');

        console.log('Opening IndexedDB');
        const db = await (0,idb__WEBPACK_IMPORTED_MODULE_0__.openDB)(DB_NAME, 1, {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detail);


/***/ }),

/***/ "./src/pages/favorite.js":
/*!*******************************!*\
  !*** ./src/pages/favorite.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/index.js");
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/template-creator */ "./src/templates/template-creator.js");
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals/config */ "./src/globals/config.js");
/* eslint-disable max-len */
/* eslint-disable no-console */




const DB_NAME = _globals_config__WEBPACK_IMPORTED_MODULE_2__["default"].DATABASE_NAME;
const { OBJECT_STORE_NAME } = _globals_config__WEBPACK_IMPORTED_MODULE_2__["default"];

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
      const db = await (0,idb__WEBPACK_IMPORTED_MODULE_0__.openDB)(DB_NAME, _globals_config__WEBPACK_IMPORTED_MODULE_2__["default"].DATABASE_VERSION);

      const tx = db.transaction(OBJECT_STORE_NAME, 'readonly');
      const store = tx.objectStore(OBJECT_STORE_NAME);

      const favoriteRestaurants = await store.getAll();

      await tx.done;

      const favoriteRestaurantsContainer = document.getElementById('favorite-restaurants');

      if (favoriteRestaurants.length > 0) {
        favoriteRestaurantsContainer.innerHTML = (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_1__.createFavoriteRestaurantTemplate)(favoriteRestaurants);

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Favorite);


/***/ }),

/***/ "./src/pages/list.js":
/*!***************************!*\
  !*** ./src/pages/list.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api */ "./src/utils/api.js");
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/template-creator */ "./src/templates/template-creator.js");



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
      const response = await _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].getAllRestaurants();
      const { restaurants } = response;

      const restaurantListContainer = document.getElementById('restaurant-list');
      restaurantListContainer.innerHTML = (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_1__.createRestaurantListTemplate)(restaurants);

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);


/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/detail */ "./src/pages/detail.js");
/* harmony import */ var _pages_favorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/favorite */ "./src/pages/favorite.js");
/* harmony import */ var _pages_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/list */ "./src/pages/list.js");




const routes = {
  '/': _pages_list__WEBPACK_IMPORTED_MODULE_2__["default"],
  '/favorites': _pages_favorite__WEBPACK_IMPORTED_MODULE_1__["default"],
  '/restaurant/:id': _pages_detail__WEBPACK_IMPORTED_MODULE_0__["default"],
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


/***/ }),

/***/ "./src/routes/url-parser.js":
/*!**********************************!*\
  !*** ./src/routes/url-parser.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-underscore-dangle */

const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
          + (splitedUrl.id ? '/:id' : '')
          + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UrlParser);


/***/ }),

/***/ "./src/sw-register.js":
/*!****************************!*\
  !*** ./src/sw-register.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var workbox_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-window */ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs");
/* eslint-disable linebreak-style */
/* eslint-disable no-console */


const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  const wb = new workbox_window__WEBPACK_IMPORTED_MODULE_0__.Workbox('/sw.bundle.js');

  try {
    await wb.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

// eslint-disable-next-line linebreak-style
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swRegister);


/***/ }),

/***/ "./src/templates/template-creator.js":
/*!*******************************************!*\
  !*** ./src/templates/template-creator.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFavoriteRestaurantTemplate: () => (/* binding */ createFavoriteRestaurantTemplate),
/* harmony export */   createRestaurantDetailTemplate: () => (/* binding */ createRestaurantDetailTemplate),
/* harmony export */   createRestaurantListTemplate: () => (/* binding */ createRestaurantListTemplate)
/* harmony export */ });
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/config */ "./src/globals/config.js");


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
          <img src="${_globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/images/large/${restaurantDetail.pictureId}" alt="${restaurantDetail.name}">
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
        <img src="${_globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/images/medium/${restaurant.pictureId}" alt="${restaurant.name}">
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
      <img data-src="${_globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/images/medium/${restaurant.pictureId}" class="lazyload" alt="${restaurant.name}">
      <div class="restaurant-card-info">
        <p>${restaurant.city}</p>
        <p>Rating: ${restaurant.rating}</p>
        <button data-restaurant-id="${restaurant.id}" class="restaurant-detail-button">Lihat Detail</button>
      </div>
    </div>
  `).join('')}
</div>
`;




/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/api-endpoint */ "./src/globals/api-endpoint.js");
/* eslint-disable no-console */


const Api = {
  async getRestaurantDetail(restaurantId) {
    try {
      const response = await fetch(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__["default"].DETAIL(restaurantId));
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error('Error while fetching restaurant detail data:', error);
      return { error: true, message: 'Error while fetching restaurant detail data.' };
    }
  },

  async  getCustomerReviews(restaurantId) {
    try {
      const response = await fetch(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__["default"].CUSTOMER_REVIEWS(restaurantId));
      const responseJson = await response.json();
      return responseJson.customerReviews;
    } catch (error) {
      console.error('Error fetching customer reviews:', error);
      return [];
    }
  },

  async addFavoriteRestaurant(restaurantId) {
    try {
      const response = await fetch(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_FAVORITE, {
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
      const response = await fetch(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__["default"].REMOVE_FAVORITE, {
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
      const response = await fetch(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_FAVORITE);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw new Error('Error while fetching favorite restaurant data.');
    }
  },

  async getAllRestaurants() {
    try {
      const response = await fetch(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__["default"].LIST);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw new Error('Error while fetching restaurant list data.');
    }
  },

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);


/***/ }),

/***/ "./src/utils/drawer-initiator.js":
/*!***************************************!*\
  !*** ./src/utils/drawer-initiator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-underscore-dangle */

const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerInitiator);


/***/ }),

/***/ "./src/views/app.js":
/*!**************************!*\
  !*** ./src/views/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/drawer-initiator */ "./src/utils/drawer-initiator.js");
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/url-parser */ "./src/routes/url-parser.js");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/routes */ "./src/routes/routes.js");
/* eslint-disable no-underscore-dangle */
// views/app.js

/* eslint-disable class-methods-use-this */




class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__["default"].init({
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
      const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__["default"].parseActiveUrlWithCombiner();
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
    const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__["default"].parseActiveUrlWithCombiner();
    const page = _routes_routes__WEBPACK_IMPORTED_MODULE_2__["default"][url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("app." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("bd02490e1c33833fb96a")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "restaurant-apps:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdaterestaurant_apps"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrestaurant_apps"] = self["webpackChunkrestaurant_apps"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__.O(undefined, ["defaultVendors-node_modules_ansi-html-community_index_js-node_modules_css-loader_dist_runtime-5370d2","defaultVendors-node_modules_html-entities_lib_named-references_js","defaultVendors-node_modules_lazysizes_plugins_parent-fit_ls_parent-fit_js-node_modules_regene-8ac0d0","defaultVendors-node_modules_style-loader_dist_runtime_injectStylesIntoStyleTag_js-node_module-355fe1","defaultVendors-node_modules_webpack-dev-server_client_socket_js-node_modules_webpack-dev-serv-b7b0e9"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Afalse%7D&reconnect=10&hot=true&live-reload=true")))
/******/ 	__webpack_require__.O(undefined, ["defaultVendors-node_modules_ansi-html-community_index_js-node_modules_css-loader_dist_runtime-5370d2","defaultVendors-node_modules_html-entities_lib_named-references_js","defaultVendors-node_modules_lazysizes_plugins_parent-fit_ls_parent-fit_js-node_modules_regene-8ac0d0","defaultVendors-node_modules_style-loader_dist_runtime_injectStylesIntoStyleTag_js-node_module-355fe1","defaultVendors-node_modules_webpack-dev-server_client_socket_js-node_modules_webpack-dev-serv-b7b0e9"], () => (__webpack_require__("./node_modules/webpack/hot/dev-server.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["defaultVendors-node_modules_ansi-html-community_index_js-node_modules_css-loader_dist_runtime-5370d2","defaultVendors-node_modules_html-entities_lib_named-references_js","defaultVendors-node_modules_lazysizes_plugins_parent-fit_ls_parent-fit_js-node_modules_regene-8ac0d0","defaultVendors-node_modules_style-loader_dist_runtime_injectStylesIntoStyleTag_js-node_module-355fe1","defaultVendors-node_modules_webpack-dev-server_client_socket_js-node_modules_webpack-dev-serv-b7b0e9"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyw2RkFBNkYsTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFFBQVEs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QUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQSxJQUFJO1dBQ0o7O1dBRUE7V0FDQTtXQUNBLEdBQUc7V0FDSCxFQUFFO1dBQ0Y7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NyWUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsbUJBQW1CLDJCQUEyQjtXQUM5QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Es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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRSxJQUFJO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLHNDQUFzQztXQUN0QztXQUNBO1dBQ0EsRUFBRTtXQUNGOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ3poQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvZ2xvYmFscy9hcGktZW5kcG9pbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL2dsb2JhbHMvY29uZmlnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvcGFnZXMvZGV0YWlsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9wYWdlcy9mYXZvcml0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvcGFnZXMvbGlzdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvcm91dGVzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvcm91dGVzL3VybC1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3N3LXJlZ2lzdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy90ZW1wbGF0ZXMvdGVtcGxhdGUtY3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvdXRpbHMvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy91dGlscy9kcmF3ZXItaW5pdGlhdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy92aWV3cy9hcHAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgdXBkYXRlIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0IHVwZGF0ZSBtYW5pZmVzdCBmaWxlbmFtZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFJlc2V0IHN0eWxlcyAqL1xuYm9keSwgdWwsIGxpIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5hLCBidXR0b24sIHRleHRhcmVhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDQ0cHg7XG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XG59XG5cbi8qIFNraXAgbGluayBzdHlsZXMgKi9cbi5za2lwLWxpbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NkY2NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDEwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuLnNraXAtbGluazpmb2N1cyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEFwcCBCYXIgU3R5bGVzICovXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg2RjY1O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5sb2dvIGltZyB7XG4gIG1heC13aWR0aDogNjBweDsgXG4gIGhlaWdodDogYXV0bztcbn1cblxuLm5hdi1tZW51LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXYtbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5uYXYtbWVudSBhIHtcbiAgLyogcGFkZGluZzogMjBweDsgKi9cbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYXYtbWVudSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDIyNTtcbn1cblxuXG4ubWVudS1pY29uIHtcbiAgbWluLXdpZHRoOiA0NHB4O1xuICBtaW4taGVpZ2h0OiA0NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NkY2NTtcbiAgYm9yZGVyOiAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLm1lbnUtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4vKiBSZXNwb25zaXZlbmVzcyBmb3IgbmF2IG1lbnUgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2LW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODZGNjU7XG4gICAgdG9wOiA4MHB4O1xuICAgIGxlZnQ6IDEwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIC5uYXYtbWVudS5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAubmF2LW1lbnUuYWN0aXZlIGxpIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4uYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLyogbWFyZ2luOiAzcHggMDsgKi9cbn1cblxuLyogTmF2aWdhdGlvbiBEcmF3ZXIgU3R5bGVzICovXG4ubmF2LWRyYXdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODZGNjU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMjUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG5cbi5uYXYtZHJhd2VyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDIyNTtcbn1cblxuLm5hdi1kcmF3ZXItbWVudSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5uYXYtZHJhd2VyLW1lbnUgbGkge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubmF2LWRyYXdlci1tZW51IGEge1xuICB3aWR0aDogNDRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cblxuLyogSGVybyBFbGVtZW50IFN0eWxlcyAqL1xuLmhlcm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRTA5Qjtcbn1cblxuLmhlcm8gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZXJvLXRpdGxlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGRkIwMDA7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVyby10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG5cbi5hcHAtdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweDtcbiAgY29sb3I6ICNCMjUzM0U7XG59XG5cbi5yZXN0YXVyYW50LWxpc3Qge1xuICBtYXJnaW46IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDIwcHg7XG59XG5cbi8qIFJlc3RhdXJhbnQgQ2FyZCBTdHlsZXMgKi9cbi5yZXN0YXVyYW50LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNURDO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBmbGV4LWJhc2lzOiBjYWxjKDMzLjMzMyUgLSAyMHB4KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlc3RhdXJhbnQtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cblxuLnJlc3RhdXJhbnQtY2FyZCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucmVzdGF1cmFudC1jYXJkIGgyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5yZXN0YXVyYW50LWNhcmQgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi8qIFN0eWxlcyBmb3IgXCJMaWhhdCBEZXRhaWxcIiBCdXR0b24gKi9cbi5yZXN0YXVyYW50LWNhcmQgLnJlc3RhdXJhbnQtZGV0YWlsLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkIwMDA7IFxuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBmb250LXdlaWdodDogYm9sZDsgXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IFxufVxuXG4ucmVzdGF1cmFudC1jYXJkIC5yZXN0YXVyYW50LWRldGFpbC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEMDAwOyBcbn1cblxuLyogUmVzcG9uc2l2ZW5lc3MgZm9yIHJlc3RhdXJhbnQgY2FyZHMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucmVzdGF1cmFudC1jYXJkIHtcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDUwJSAtIDIwcHgpO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucmVzdGF1cmFudC1jYXJkIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICB9XG59XG5cbi8qIFJlc3RhdXJhbnQgRGV0YWlsIENvbnRhaW5lciBTdHlsZXMgKi9cbi5yZXN0YXVyYW50LWRldGFpbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyMzQsIDIwNCk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi8qIFJlc3RhdXJhbnQgSW1hZ2UgU3R5bGVzICovXG4ucmVzdGF1cmFudC1pbWFnZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleC1iYXNpczogNDAlO1xufVxuXG4ucmVzdGF1cmFudC1pbWFnZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIFJlc3RhdXJhbnQgRGV0YWlscyBTdHlsZXMgKi9cbi5yZXN0YXVyYW50LWRldGFpbHMge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGZsZXgtYmFzaXM6IDYwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogUmVzdGF1cmFudCBOYW1lIFN0eWxlcyAqL1xuLnJlc3RhdXJhbnQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDsgXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7IFxufVxuXG5cbi8qIEN1c3RvbWVyIFJldmlld3MgU3R5bGVzICovXG4ucmVzdGF1cmFudC1kZXRhaWxzIGgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtYWxpZ246IGxlZnQ7IFxufVxuXG4ucmVzdGF1cmFudC1kZXRhaWxzIHVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucmVzdGF1cmFudC1kZXRhaWxzIHVsIGxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luOiA1cHggMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJlc3RhdXJhbnQtZGV0YWlscyB1bCBsaSBwIHtcbiAgbWFyZ2luOiAwOyBcbn1cblxuLnJlc3RhdXJhbnQtZGV0YWlscyB1bCBsaSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7IFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyBcbiAgcGFkZGluZzogMTBweDsgXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpOyBcbn1cblxuLnJlc3RhdXJhbnQtZGV0YWlscyB1bCBsaSBzdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMzM7IFxufVxuXG4ucmVzdGF1cmFudC1kZXRhaWxzIHVsIGxpIHA6bnRoLWNoaWxkKDIpIHtcbiAgY29sb3I6ICM2NjY7IFxufVxuXG4ucmVzdGF1cmFudC1kZXRhaWxzIHVsIGxpIHA6bnRoLWNoaWxkKDMpIHtcbiAgY29sb3I6ICMzMzM7IFxufVxuXG5cbiNhZGQtdG8tZmF2b3JpdGUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQjAwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4OyBcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE2cHg7IFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAxMDBweDsgXG59XG5cbiNhZGQtdG8tZmF2b3JpdGUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDAwMDtcbn1cblxuI2FkZC10by1mYXZvcml0ZS1idXR0b24udW5saWtlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XG59XG5cbiNhZGQtdG8tZmF2b3JpdGUtYnV0dG9uLnVubGlrZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0MwMDAwO1xufVxuXG4jYWRkLXRvLWZhdm9yaXRlLWJ1dHRvbi5saWtlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkIwMDA7XG59XG5cbiNhZGQtdG8tZmF2b3JpdGUtYnV0dG9uLmxpa2VkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDAwMDtcbn1cblxuI2FkZC10by1mYXZvcml0ZS1idXR0b24ubGlrZWQ6OmJlZm9yZSB7XG4gIC8qIGNvbnRlbnQ6ICfinaTvuI8nOyAqL1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuI2FkZC10by1mYXZvcml0ZS1idXR0b24udW5saWtlZDo6YmVmb3JlIHtcbiAgLyogY29udGVudDogJ/CfpI0nOyAqL1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuXG5cbi8qIEZhdm9yaXRlIFBhZ2UgU3R5bGVzICovXG4uZmF2b3JpdGUtcmVzdGF1cmFudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1REM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGZsZXgtYmFzaXM6IGNhbGMoMzMuMzMzJSAtIDIwcHgpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmF2b3JpdGUtcmVzdGF1cmFudDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cblxuLmZhdm9yaXRlLXJlc3RhdXJhbnQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZhdm9yaXRlLXJlc3RhdXJhbnQgaDIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmZhdm9yaXRlLXJlc3RhdXJhbnQgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5mYXZvcml0ZS1yZXN0YXVyYW50IC5mYXZvcml0ZS1kZXRhaWwtbGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCMDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbi5mYXZvcml0ZS1yZXN0YXVyYW50IC5mYXZvcml0ZS1kZXRhaWwtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkQwMDA7XG59XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODZGNjU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbmh0bWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNFMDlCO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlCQUFpQjtBQUNqQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlC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QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COzs7O0FBSUEseUJBQXlCO0FBQ3pCO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxnQ0FBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogUmVzZXQgc3R5bGVzICovXFxuYm9keSwgdWwsIGxpIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hLCBidXR0b24sIHRleHRhcmVhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1pbi13aWR0aDogNDRweDtcXG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XFxufVxcblxcbi8qIFNraXAgbGluayBzdHlsZXMgKi9cXG4uc2tpcC1saW5rIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg2RjY1O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcbn1cXG5cXG4uc2tpcC1saW5rOmZvY3VzIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIEFwcCBCYXIgU3R5bGVzICovXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODZGNjU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLmxvZ28gaW1nIHtcXG4gIG1heC13aWR0aDogNjBweDsgXFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5uYXYtbWVudS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm5hdi1tZW51IGEge1xcbiAgLyogcGFkZGluZzogMjBweDsgKi9cXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmF2LW1lbnUgYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0MjI1O1xcbn1cXG5cXG5cXG4ubWVudS1pY29uIHtcXG4gIG1pbi13aWR0aDogNDRweDtcXG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODZGNjU7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xcbiAgLm1lbnUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbi8qIFJlc3BvbnNpdmVuZXNzIGZvciBuYXYgbWVudSAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm5hdi1tZW51IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg2RjY1O1xcbiAgICB0b3A6IDgwcHg7XFxuICAgIGxlZnQ6IDEwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG4gIFxcbiAgLm5hdi1tZW51LmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC5uYXYtbWVudS5hY3RpdmUgbGkge1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi5iYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLyogbWFyZ2luOiAzcHggMDsgKi9cXG59XFxuXFxuLyogTmF2aWdhdGlvbiBEcmF3ZXIgU3R5bGVzICovXFxuLm5hdi1kcmF3ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NkY2NTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IC0yNTBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5uYXYtZHJhd2VyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQyMjU7XFxufVxcblxcbi5uYXYtZHJhd2VyLW1lbnUge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLm5hdi1kcmF3ZXItbWVudSBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubmF2LWRyYXdlci1tZW51IGEge1xcbiAgd2lkdGg6IDQ0cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbi8qIEhlcm8gRWxlbWVudCBTdHlsZXMgKi9cXG4uaGVybyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNFMDlCO1xcbn1cXG5cXG4uaGVybyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZXJvLXRpdGxlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNGRkIwMDA7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5oZXJvLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgfVxcbn1cXG5cXG4uYXBwLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgY29sb3I6ICNCMjUzM0U7XFxufVxcblxcbi5yZXN0YXVyYW50LWxpc3Qge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi8qIFJlc3RhdXJhbnQgQ2FyZCBTdHlsZXMgKi9cXG4ucmVzdGF1cmFudC1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1REM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgZmxleC1iYXNpczogY2FsYygzMy4zMzMlIC0gMjBweCk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVzdGF1cmFudC1jYXJkOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG59XFxuXFxuLnJlc3RhdXJhbnQtY2FyZCBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucmVzdGF1cmFudC1jYXJkIGgyIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5yZXN0YXVyYW50LWNhcmQgcCB7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogIzY2NjtcXG59XFxuXFxuLyogU3R5bGVzIGZvciBcXFwiTGloYXQgRGV0YWlsXFxcIiBCdXR0b24gKi9cXG4ucmVzdGF1cmFudC1jYXJkIC5yZXN0YXVyYW50LWRldGFpbC1idXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCMDAwOyBcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBmb250LXdlaWdodDogYm9sZDsgXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBcXG59XFxuXFxuLnJlc3RhdXJhbnQtY2FyZCAucmVzdGF1cmFudC1kZXRhaWwtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkQwMDA7IFxcbn1cXG5cXG4vKiBSZXNwb25zaXZlbmVzcyBmb3IgcmVzdGF1cmFudCBjYXJkcyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLnJlc3RhdXJhbnQtY2FyZCB7XFxuICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gMjBweCk7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLnJlc3RhdXJhbnQtY2FyZCB7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICB9XFxufVxcblxcbi8qIFJlc3RhdXJhbnQgRGV0YWlsIENvbnRhaW5lciBTdHlsZXMgKi9cXG4ucmVzdGF1cmFudC1kZXRhaWwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyMzQsIDIwNCk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4vKiBSZXN0YXVyYW50IEltYWdlIFN0eWxlcyAqL1xcbi5yZXN0YXVyYW50LWltYWdlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LWJhc2lzOiA0MCU7XFxufVxcblxcbi5yZXN0YXVyYW50LWltYWdlIGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIFJlc3RhdXJhbnQgRGV0YWlscyBTdHlsZXMgKi9cXG4ucmVzdGF1cmFudC1kZXRhaWxzIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGZsZXgtYmFzaXM6IDYwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiBSZXN0YXVyYW50IE5hbWUgU3R5bGVzICovXFxuLnJlc3RhdXJhbnQtbmFtZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0OyBcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7IFxcbn1cXG5cXG5cXG4vKiBDdXN0b21lciBSZXZpZXdzIFN0eWxlcyAqL1xcbi5yZXN0YXVyYW50LWRldGFpbHMgaDMge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzMzMztcXG4gIHRleHQtYWxpZ246IGxlZnQ7IFxcbn1cXG5cXG4ucmVzdGF1cmFudC1kZXRhaWxzIHVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5yZXN0YXVyYW50LWRldGFpbHMgdWwgbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzMzMztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5yZXN0YXVyYW50LWRldGFpbHMgdWwgbGkgcCB7XFxuICBtYXJnaW46IDA7IFxcbn1cXG5cXG4ucmVzdGF1cmFudC1kZXRhaWxzIHVsIGxpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7IFxcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgXFxuICBwYWRkaW5nOiAxMHB4OyBcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgXFxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgXFxufVxcblxcbi5yZXN0YXVyYW50LWRldGFpbHMgdWwgbGkgc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMzMzM7IFxcbn1cXG5cXG4ucmVzdGF1cmFudC1kZXRhaWxzIHVsIGxpIHA6bnRoLWNoaWxkKDIpIHtcXG4gIGNvbG9yOiAjNjY2OyBcXG59XFxuXFxuLnJlc3RhdXJhbnQtZGV0YWlscyB1bCBsaSBwOm50aC1jaGlsZCgzKSB7XFxuICBjb2xvcjogIzMzMzsgXFxufVxcblxcblxcbiNhZGQtdG8tZmF2b3JpdGUtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkIwMDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHggMTBweDsgXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDE2cHg7IFxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDEwMHB4OyBcXG59XFxuXFxuI2FkZC10by1mYXZvcml0ZS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDAwMDtcXG59XFxuXFxuI2FkZC10by1mYXZvcml0ZS1idXR0b24udW5saWtlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xcbn1cXG5cXG4jYWRkLXRvLWZhdm9yaXRlLWJ1dHRvbi51bmxpa2VkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDQzAwMDA7XFxufVxcblxcbiNhZGQtdG8tZmF2b3JpdGUtYnV0dG9uLmxpa2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkIwMDA7XFxufVxcblxcbiNhZGQtdG8tZmF2b3JpdGUtYnV0dG9uLmxpa2VkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkQwMDA7XFxufVxcblxcbiNhZGQtdG8tZmF2b3JpdGUtYnV0dG9uLmxpa2VkOjpiZWZvcmUge1xcbiAgLyogY29udGVudDogJ+KdpO+4jyc7ICovXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuI2FkZC10by1mYXZvcml0ZS1idXR0b24udW5saWtlZDo6YmVmb3JlIHtcXG4gIC8qIGNvbnRlbnQ6ICfwn6SNJzsgKi9cXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG5cXG5cXG4vKiBGYXZvcml0ZSBQYWdlIFN0eWxlcyAqL1xcbi5mYXZvcml0ZS1yZXN0YXVyYW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1REM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgZmxleC1iYXNpczogY2FsYygzMy4zMzMlIC0gMjBweCk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmF2b3JpdGUtcmVzdGF1cmFudDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcblxcbi5mYXZvcml0ZS1yZXN0YXVyYW50IGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5mYXZvcml0ZS1yZXN0YXVyYW50IGgyIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5mYXZvcml0ZS1yZXN0YXVyYW50IHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgY29sb3I6ICM2NjY7XFxufVxcblxcbi5mYXZvcml0ZS1yZXN0YXVyYW50IC5mYXZvcml0ZS1kZXRhaWwtbGluayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCMDAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG59XFxuXFxuLmZhdm9yaXRlLXJlc3RhdXJhbnQgLmZhdm9yaXRlLWRldGFpbC1saW5rOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkQwMDA7XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg2RjY1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0UwOUI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tICcuL2NvbmZpZyc7XG5cbmNvbnN0IEFQSV9FTkRQT0lOVCA9IHtcbiAgTElTVDogYCR7Q09ORklHLkJBU0VfVVJMfS9saXN0YCxcbiAgREVUQUlMOiAoaWQpID0+IGAke0NPTkZJRy5CQVNFX1VSTH0vZGV0YWlsLyR7aWR9YCxcbiAgU0VBUkNIOiAocXVlcnkpID0+IGAke0NPTkZJRy5CQVNFX1VSTH0vc2VhcmNoP3E9JHtxdWVyeX1gLFxuICBBRERfUkVWSUVXOiBgJHtDT05GSUcuQkFTRV9VUkx9L3Jldmlld2AsXG4gIEFERF9GQVZPUklURTogYCR7Q09ORklHLkJBU0VfVVJMfS9mYXZvcml0ZXNgLFxuICBSRU1PVkVfRkFWT1JJVEU6IGAke0NPTkZJRy5CQVNFX1VSTH0vZmF2b3JpdGVzYCxcbiAgTElTVF9GQVZPUklURVM6IGAke0NPTkZJRy5CQVNFX1VSTH0vZmF2b3JpdGVzYCwgLy8gTWVuYW1iYWhrYW4gZW5kcG9pbnQgYmFydSB1bnR1ayBkYWZ0YXIgcmVzdG9yYW4gZmF2b3JpdFxuICBJTUFHRV9TTUFMTDogKHBpY3R1cmVJZCkgPT4gYCR7Q09ORklHLkJBU0VfVVJMfS9pbWFnZXMvc21hbGwvJHtwaWN0dXJlSWR9YCxcbiAgSU1BR0VfTUVESVVNOiAocGljdHVyZUlkKSA9PiBgJHtDT05GSUcuQkFTRV9VUkx9L2ltYWdlcy9tZWRpdW0vJHtwaWN0dXJlSWR9YCxcbiAgSU1BR0VfTEFSR0U6IChwaWN0dXJlSWQpID0+IGAke0NPTkZJRy5CQVNFX1VSTH0vaW1hZ2VzL2xhcmdlLyR7cGljdHVyZUlkfWAsXG4gIENVU1RPTUVSX1JFVklFV1M6IChyZXN0YXVyYW50SWQpID0+IGAke0NPTkZJRy5CQVNFX1VSTH0vcmV2aWV3P3Jlc3RhdXJhbnRfaWQ9JHtyZXN0YXVyYW50SWR9YCxcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSZXN0YXVyYW50RGV0YWlsID0gYXN5bmMgKHJlc3RhdXJhbnRJZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9FTkRQT0lOVC5ERVRBSUwocmVzdGF1cmFudElkKSk7XG4gIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRGYXZvcml0ZVJlc3RhdXJhbnQgPSBhc3luYyAocmVzdGF1cmFudElkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJX0VORFBPSU5ULkFERF9GQVZPUklURSwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkOiByZXN0YXVyYW50SWQgfSksXG4gIH0pO1xuICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiByZXNwb25zZUpzb247XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRmF2b3JpdGVSZXN0YXVyYW50ID0gYXN5bmMgKHJlc3RhdXJhbnRJZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9FTkRQT0lOVC5SRU1PVkVfRkFWT1JJVEUsIHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkOiByZXN0YXVyYW50SWQgfSksXG4gIH0pO1xuICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiByZXNwb25zZUpzb247XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsRmF2b3JpdGVSZXN0YXVyYW50cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfRU5EUE9JTlQuQUREX0ZBVk9SSVRFKTtcbiAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gcmVzcG9uc2VKc29uO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbFJlc3RhdXJhbnRzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9FTkRQT0lOVC5MSVNUKTtcbiAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gcmVzcG9uc2VKc29uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQVBJX0VORFBPSU5UO1xuIiwiY29uc3QgQ09ORklHID0ge1xuICBCQVNFX1VSTDogJ2h0dHBzOi8vcmVzdGF1cmFudC1hcGkuZGljb2RpbmcuZGV2JyxcbiAgQ0FDSEVfTkFNRTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICBEQVRBQkFTRV9OQU1FOiAncmVzdGF1cmFudC1hcHAtZGInLFxuICBEQVRBQkFTRV9WRVJTSU9OOiAxLFxuICBPQkpFQ1RfU1RPUkVfTkFNRTogJ2Zhdm9yaXRlLXJlc3RhdXJhbnRzJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENPTkZJRztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyAqL1xuLy8gc3JjL2luZGV4LmpzXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUnO1xuaW1wb3J0ICdsYXp5c2l6ZXMnO1xuaW1wb3J0ICdsYXp5c2l6ZXMvcGx1Z2lucy9wYXJlbnQtZml0L2xzLnBhcmVudC1maXQnO1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vdmlld3MvYXBwJztcbmltcG9ydCBzd1JlZ2lzdGVyIGZyb20gJy4vc3ctcmVnaXN0ZXInO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKHtcbiAgYnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1pY29uJyksXG4gIGRyYXdlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1kcmF3ZXInKSxcbiAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGVudCcpLFxufSk7XG5cbmNvbnN0IHJlbmRlckFwcCA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgYXBwLnJlbmRlclBhZ2UoKTtcbiAgLy8gSW5pdGlhbGl6ZSBsYXp5c2l6ZXMgYWZ0ZXIgcmVuZGVyaW5nIHRoZSBwYWdlXG4gIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdsYXp5bG9hZGVkJykpO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCByZW5kZXJBcHApO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIHJlbmRlckFwcCgpO1xuICBzd1JlZ2lzdGVyKCk7XG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1zaGFkb3cgKi9cbmltcG9ydCB7IG9wZW5EQiB9IGZyb20gJ2lkYic7XG5pbXBvcnQgVXJsUGFyc2VyIGZyb20gJy4uL3JvdXRlcy91cmwtcGFyc2VyJztcbmltcG9ydCBBcGkgZnJvbSAnLi4vdXRpbHMvYXBpJztcbmltcG9ydCB7IGNyZWF0ZVJlc3RhdXJhbnREZXRhaWxUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZS1jcmVhdG9yJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vZ2xvYmFscy9jb25maWcnO1xuXG5jb25zdCBEQl9OQU1FID0gQ09ORklHLkRBVEFCQVNFX05BTUU7XG5jb25zdCB7IE9CSkVDVF9TVE9SRV9OQU1FIH0gPSBDT05GSUc7XG5cbmNvbnN0IERldGFpbCA9IHtcbiAgYXN5bmMgcmVuZGVyKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGlkPVwicmVzdGF1cmFudC1kZXRhaWxcIj5cbiAgICAgICAgPCEtLSBDb250ZW50IHdpbGwgYmUgZmlsbGVkIGluIGFmdGVyUmVuZGVyIC0tPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfSxcblxuICBhc3luYyBhZnRlclJlbmRlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coJ1N0YXJ0IHJlbmRlcmluZyByZXN0YXVyYW50IGRldGFpbCcpO1xuXG4gICAgICBjb25zdCB1cmwgPSBVcmxQYXJzZXIucGFyc2VBY3RpdmVVcmxXaXRob3V0Q29tYmluZXIoKTtcbiAgICAgIGNvbnN0IHJlc3RhdXJhbnRJZCA9IHVybC5pZDtcbiAgICAgIGNvbnN0IHJlc3RhdXJhbnREZXRhaWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGF1cmFudC1kZXRhaWwnKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBcGkuZ2V0UmVzdGF1cmFudERldGFpbChyZXN0YXVyYW50SWQpO1xuXG4gICAgICBjb25zb2xlLmxvZygnQVBJIHJlc3BvbnNlOicsIHJlc3BvbnNlKTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5lcnJvcikge1xuICAgICAgICBjb25zdCByZXN0YXVyYW50RGV0YWlsID0gcmVzcG9uc2UucmVzdGF1cmFudDtcbiAgICAgICAgcmVzdGF1cmFudERldGFpbENvbnRhaW5lci5pbm5lckhUTUwgPSBjcmVhdGVSZXN0YXVyYW50RGV0YWlsVGVtcGxhdGUocmVzdGF1cmFudERldGFpbCk7XG5cbiAgICAgICAgY29uc3QgYWRkVG9GYXZvcml0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdG8tZmF2b3JpdGUtYnV0dG9uJyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ09wZW5pbmcgSW5kZXhlZERCJyk7XG4gICAgICAgIGNvbnN0IGRiID0gYXdhaXQgb3BlbkRCKERCX05BTUUsIDEsIHtcbiAgICAgICAgICB1cGdyYWRlKGRiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSW5zaWRlIHVwZ3JhZGUgY2FsbGJhY2snKTtcbiAgICAgICAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhPQkpFQ1RfU1RPUkVfTkFNRSkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIG9iamVjdCBzdG9yZScpO1xuICAgICAgICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSwgeyBrZXlQYXRoOiAnaWQnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oT0JKRUNUX1NUT1JFX05BTUUsICdyZWFkd3JpdGUnKTtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB0eC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSk7XG4gICAgICAgIGxldCByZXN0YXVyYW50RGF0YSA9IGF3YWl0IHN0b3JlLmdldChyZXN0YXVyYW50SWQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXRyaWV2ZWQgZGF0YSBmcm9tIEluZGV4ZWREQjonLCByZXN0YXVyYW50RGF0YSk7XG5cbiAgICAgICAgY29uc3QgdXBkYXRlQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChyZXN0YXVyYW50RGF0YSkge1xuICAgICAgICAgICAgYWRkVG9GYXZvcml0ZUJ1dHRvbi5pbm5lckhUTUwgPSAn4p2k77iPIFVuZmF2b3JpdGUnO1xuICAgICAgICAgICAgYWRkVG9GYXZvcml0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd1bmxpa2VkJyk7XG4gICAgICAgICAgICBhZGRUb0Zhdm9yaXRlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2xpa2VkJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZFRvRmF2b3JpdGVCdXR0b24uaW5uZXJIVE1MID0gJ/CfpI0gQWRkIHRvIEZhdm9yaXRlJztcbiAgICAgICAgICAgIGFkZFRvRmF2b3JpdGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgndW5saWtlZCcpO1xuICAgICAgICAgICAgYWRkVG9GYXZvcml0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsaWtlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB1cGRhdGVCdXR0b24oKTtcblxuICAgICAgICBjb25zdCB0b2dnbGVGYXZvcml0ZVN0YXR1cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZiAocmVzdGF1cmFudERhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVR4ID0gZGIudHJhbnNhY3Rpb24oT0JKRUNUX1NUT1JFX05BTUUsICdyZWFkd3JpdGUnKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGV0ZVR4Lm9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKS5kZWxldGUocmVzdGF1cmFudElkKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGV0ZVR4LmRvbmU7XG4gICAgICAgICAgICByZXN0YXVyYW50RGF0YSA9IG51bGw7XG4gICAgICAgICAgICBhbGVydCgnUmVzdGF1cmFudCByZW1vdmVkIGZyb20gZmF2b3JpdGVzLicpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhZGRUeCA9IGRiLnRyYW5zYWN0aW9uKE9CSkVDVF9TVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XG4gICAgICAgICAgICBhd2FpdCBhZGRUeC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSkucHV0KHJlc3RhdXJhbnREZXRhaWwpO1xuICAgICAgICAgICAgYXdhaXQgYWRkVHguZG9uZTtcbiAgICAgICAgICAgIHJlc3RhdXJhbnREYXRhID0gcmVzdGF1cmFudERldGFpbDtcbiAgICAgICAgICAgIGFsZXJ0KCdSZXN0YXVyYW50IGFkZGVkIHRvIGZhdm9yaXRlcy4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1cGRhdGVCdXR0b24oKTtcbiAgICAgICAgfTtcblxuICAgICAgICBhZGRUb0Zhdm9yaXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRvZ2dsZUZhdm9yaXRlU3RhdHVzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdGF1cmFudERldGFpbENvbnRhaW5lci5pbm5lckhUTUwgPSBgPHA+JHtyZXNwb25zZS5tZXNzYWdlfTwvcD5gO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZW5kZXJpbmcgcmVzdGF1cmFudCBkZXRhaWw6JywgZXJyb3IpO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB7IG9wZW5EQiB9IGZyb20gJ2lkYic7XG5pbXBvcnQgeyBjcmVhdGVGYXZvcml0ZVJlc3RhdXJhbnRUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZS1jcmVhdG9yJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vZ2xvYmFscy9jb25maWcnO1xuXG5jb25zdCBEQl9OQU1FID0gQ09ORklHLkRBVEFCQVNFX05BTUU7XG5jb25zdCB7IE9CSkVDVF9TVE9SRV9OQU1FIH0gPSBDT05GSUc7XG5cbmNvbnN0IEZhdm9yaXRlID0ge1xuICBhc3luYyByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRlbnRcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwiYXBwLXRpdGxlXCI+RmF2b3JpdGUgUmVzdGF1cmFudHM8L2gxPlxuICAgICAgICA8ZGl2IGlkPVwiZmF2b3JpdGUtcmVzdGF1cmFudHNcIiBjbGFzcz1cInJlc3RhdXJhbnQtbGlzdFwiPlxuICAgICAgICAgIDwhLS0gQ29udGVudCB3aWxsIGJlIGZpbGxlZCBpbiBhZnRlclJlbmRlciAtLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9LFxuXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYiA9IGF3YWl0IG9wZW5EQihEQl9OQU1FLCBDT05GSUcuREFUQUJBU0VfVkVSU0lPTik7XG5cbiAgICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oT0JKRUNUX1NUT1JFX05BTUUsICdyZWFkb25seScpO1xuICAgICAgY29uc3Qgc3RvcmUgPSB0eC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSk7XG5cbiAgICAgIGNvbnN0IGZhdm9yaXRlUmVzdGF1cmFudHMgPSBhd2FpdCBzdG9yZS5nZXRBbGwoKTtcblxuICAgICAgYXdhaXQgdHguZG9uZTtcblxuICAgICAgY29uc3QgZmF2b3JpdGVSZXN0YXVyYW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYXZvcml0ZS1yZXN0YXVyYW50cycpO1xuXG4gICAgICBpZiAoZmF2b3JpdGVSZXN0YXVyYW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZhdm9yaXRlUmVzdGF1cmFudHNDb250YWluZXIuaW5uZXJIVE1MID0gY3JlYXRlRmF2b3JpdGVSZXN0YXVyYW50VGVtcGxhdGUoZmF2b3JpdGVSZXN0YXVyYW50cyk7XG5cbiAgICAgICAgY29uc3QgcmVzdGF1cmFudERldGFpbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudC1kZXRhaWwtYnV0dG9uJyk7XG4gICAgICAgIHJlc3RhdXJhbnREZXRhaWxCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3RhdXJhbnRJZCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVzdGF1cmFudC1pZCcpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgIy9yZXN0YXVyYW50LyR7cmVzdGF1cmFudElkfWA7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmF2b3JpdGVSZXN0YXVyYW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHA+Tm8gZmF2b3JpdGUgcmVzdGF1cmFudHMgZm91bmQuPC9wPic7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlbmRlcmluZyBmYXZvcml0ZSByZXN0YXVyYW50IGxpc3Q6JywgZXJyb3IpO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlO1xuIiwiaW1wb3J0IEFwaSBmcm9tICcuLi91dGlscy9hcGknO1xuaW1wb3J0IHsgY3JlYXRlUmVzdGF1cmFudExpc3RUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZS1jcmVhdG9yJztcblxuY29uc3QgTGlzdCA9IHtcbiAgYXN5bmMgcmVuZGVyKCkge1xuICAgIGRvY3VtZW50LnRpdGxlID0gJ0hvbWUgLSBSZXN0YXVyYW50IEFwcCc7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRlbnRcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwiYXBwLXRpdGxlXCI+RXhwbG9yZSBSZXN0YXVyYW50czwvaDE+XG4gICAgICAgIDxkaXYgaWQ9XCJyZXN0YXVyYW50LWxpc3RcIiBjbGFzcz1cInJlc3RhdXJhbnQtbGlzdFwiPlxuICAgICAgICAgIDwhLS0gQ29udGVudCB3aWxsIGJlIGZpbGxlZCBieSBhZnRlclJlbmRlciAtLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9LFxuXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFwaS5nZXRBbGxSZXN0YXVyYW50cygpO1xuICAgICAgY29uc3QgeyByZXN0YXVyYW50cyB9ID0gcmVzcG9uc2U7XG5cbiAgICAgIGNvbnN0IHJlc3RhdXJhbnRMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhdXJhbnQtbGlzdCcpO1xuICAgICAgcmVzdGF1cmFudExpc3RDb250YWluZXIuaW5uZXJIVE1MID0gY3JlYXRlUmVzdGF1cmFudExpc3RUZW1wbGF0ZShyZXN0YXVyYW50cyk7XG5cbiAgICAgIGNvbnN0IGRldGFpbEJ1dHRvbnMgPSByZXN0YXVyYW50TGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudC1kZXRhaWwtYnV0dG9uJyk7XG5cbiAgICAgIGRldGFpbEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCByZXN0YXVyYW50SWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXJlc3RhdXJhbnQtaWQnKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAjL3Jlc3RhdXJhbnQvJHtyZXN0YXVyYW50SWR9YDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlbmRlcmluZyByZXN0YXVyYW50IGxpc3Q6JywgZXJyb3IpO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iLCJpbXBvcnQgRGV0YWlsIGZyb20gJy4uL3BhZ2VzL2RldGFpbCc7XG5pbXBvcnQgRmF2b3JpdGUgZnJvbSAnLi4vcGFnZXMvZmF2b3JpdGUnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vcGFnZXMvbGlzdCc7XG5cbmNvbnN0IHJvdXRlcyA9IHtcbiAgJy8nOiBMaXN0LFxuICAnL2Zhdm9yaXRlcyc6IEZhdm9yaXRlLFxuICAnL3Jlc3RhdXJhbnQvOmlkJzogRGV0YWlsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxuY29uc3QgVXJsUGFyc2VyID0ge1xuICBwYXJzZUFjdGl2ZVVybFdpdGhDb21iaW5lcigpIHtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IHNwbGl0ZWRVcmwgPSB0aGlzLl91cmxTcGxpdHRlcih1cmwpO1xuICAgIHJldHVybiB0aGlzLl91cmxDb21iaW5lcihzcGxpdGVkVXJsKTtcbiAgfSxcblxuICBwYXJzZUFjdGl2ZVVybFdpdGhvdXRDb21iaW5lcigpIHtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiB0aGlzLl91cmxTcGxpdHRlcih1cmwpO1xuICB9LFxuXG4gIF91cmxTcGxpdHRlcih1cmwpIHtcbiAgICBjb25zdCB1cmxzU3BsaXRzID0gdXJsLnNwbGl0KCcvJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc291cmNlOiB1cmxzU3BsaXRzWzFdIHx8IG51bGwsXG4gICAgICBpZDogdXJsc1NwbGl0c1syXSB8fCBudWxsLFxuICAgICAgdmVyYjogdXJsc1NwbGl0c1szXSB8fCBudWxsLFxuICAgIH07XG4gIH0sXG5cbiAgX3VybENvbWJpbmVyKHNwbGl0ZWRVcmwpIHtcbiAgICByZXR1cm4gKHNwbGl0ZWRVcmwucmVzb3VyY2UgPyBgLyR7c3BsaXRlZFVybC5yZXNvdXJjZX1gIDogJy8nKVxuICAgICAgICAgICsgKHNwbGl0ZWRVcmwuaWQgPyAnLzppZCcgOiAnJylcbiAgICAgICAgICArIChzcGxpdGVkVXJsLnZlcmIgPyBgLyR7c3BsaXRlZFVybC52ZXJifWAgOiAnJyk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVcmxQYXJzZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xyXG5pbXBvcnQgeyBXb3JrYm94IH0gZnJvbSAnd29ya2JveC13aW5kb3cnO1xyXG5cclxuY29uc3Qgc3dSZWdpc3RlciA9IGFzeW5jICgpID0+IHtcclxuICBpZiAoISgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSkge1xyXG4gICAgY29uc29sZS5sb2coJ1NlcnZpY2UgV29ya2VyIG5vdCBzdXBwb3J0ZWQgaW4gdGhlIGJyb3dzZXInKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHdiID0gbmV3IFdvcmtib3goJy9zdy5idW5kbGUuanMnKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHdiLnJlZ2lzdGVyKCk7XHJcbiAgICBjb25zb2xlLmxvZygnU2VydmljZSB3b3JrZXIgcmVnaXN0ZXJlZCcpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIHJlZ2lzdGVyIHNlcnZpY2Ugd29ya2VyJywgZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBsaW5lYnJlYWstc3R5bGVcclxuZXhwb3J0IGRlZmF1bHQgc3dSZWdpc3RlcjtcclxuIiwiaW1wb3J0IENPTkZJRyBmcm9tICcuLi9nbG9iYWxzL2NvbmZpZyc7XG5cbmNvbnN0IGNyZWF0ZVJlc3RhdXJhbnREZXRhaWxUZW1wbGF0ZSA9IChyZXN0YXVyYW50RGV0YWlsLCBpc0Zhdm9yaXRlKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3JpZXNIdG1sID0gcmVzdGF1cmFudERldGFpbC5jYXRlZ29yaWVzXG4gICAgPyBgPGgzPkNhdGVnb3JpZXM6PC9oMz5cbiAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICR7cmVzdGF1cmFudERldGFpbC5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IGA8bGk+JHtjYXRlZ29yeS5uYW1lfTwvbGk+YCkuam9pbignJyl9XG4gICAgICAgICAgIDwvdWw+YFxuICAgIDogJyc7XG5cbiAgY29uc3QgZm9vZHNIdG1sID0gcmVzdGF1cmFudERldGFpbC5tZW51cyAmJiByZXN0YXVyYW50RGV0YWlsLm1lbnVzLmZvb2RzXG4gICAgPyBgPGgzPk1lbnUgTWFrYW5hbjo8L2gzPlxuICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgJHtyZXN0YXVyYW50RGV0YWlsLm1lbnVzLmZvb2RzLm1hcCgoZm9vZCkgPT4gYDxsaT4ke2Zvb2QubmFtZX08L2xpPmApLmpvaW4oJycpfVxuICAgICAgICAgICA8L3VsPmBcbiAgICA6ICcnO1xuXG4gIGNvbnN0IGRyaW5rc0h0bWwgPSByZXN0YXVyYW50RGV0YWlsLm1lbnVzICYmIHJlc3RhdXJhbnREZXRhaWwubWVudXMuZHJpbmtzXG4gICAgPyBgPGgzPk1lbnUgTWludW1hbjo8L2gzPlxuICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgJHtyZXN0YXVyYW50RGV0YWlsLm1lbnVzLmRyaW5rcy5tYXAoKGRyaW5rKSA9PiBgPGxpPiR7ZHJpbmsubmFtZX08L2xpPmApLmpvaW4oJycpfVxuICAgICAgICAgICA8L3VsPmBcbiAgICA6ICcnO1xuICBjb25zdCByZXZpZXdzSHRtbCA9IHJlc3RhdXJhbnREZXRhaWwuY3VzdG9tZXJSZXZpZXdzXG4gICAgPyBgPGgzPkN1c3RvbWVyIFJldmlld3M6PC9oMz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICR7cmVzdGF1cmFudERldGFpbC5jdXN0b21lclJldmlld3MubWFwKChyZXZpZXcpID0+IGBcbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPHA+PHN0cm9uZz4ke3Jldmlldy5uYW1lfTwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgPHA+JHtyZXZpZXcuZGF0ZX08L3A+XG4gICAgICAgICAgICAgIDxwPiR7cmV2aWV3LnJldmlld308L3A+XG4gICAgICAgICAgICA8L2xpPmApLmpvaW4oJycpfVxuICAgICAgICA8L3VsPmBcbiAgICA6ICcnO1xuXG4gIGNvbnN0IGhlYXJ0SWNvbiA9IGlzRmF2b3JpdGUgPyAn4p2k77iPJyA6ICfwn6SNJztcblxuICBjb25zdCBmYXZvcml0ZUJ1dHRvbiA9IGlzRmF2b3JpdGVcbiAgICA/IGA8YnV0dG9uIGlkPVwiYWRkLXRvLWZhdm9yaXRlLWJ1dHRvblwiIGNsYXNzPVwiZmF2b3JpdGUtYnV0dG9uIGxpa2VkXCI+JHtoZWFydEljb259IFVuZmF2b3JpdGU8L2J1dHRvbj5gXG4gICAgOiBgPGJ1dHRvbiBpZD1cImFkZC10by1mYXZvcml0ZS1idXR0b25cIiBjbGFzcz1cImZhdm9yaXRlLWJ1dHRvbiB1bmxpa2VkXCI+JHtoZWFydEljb259IEFkZCB0byBGYXZvcml0ZTwvYnV0dG9uPmA7XG5cbiAgcmV0dXJuIGBcbiAgICAgIDxoMSBjbGFzcz1cImFwcC10aXRsZVwiPkRldGFpbCBSZXN0YXVyYW50PC9oMT5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50LWRldGFpbC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnQtaW1hZ2VcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIiR7Q09ORklHLkJBU0VfVVJMfS9pbWFnZXMvbGFyZ2UvJHtyZXN0YXVyYW50RGV0YWlsLnBpY3R1cmVJZH1cIiBhbHQ9XCIke3Jlc3RhdXJhbnREZXRhaWwubmFtZX1cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50LWRldGFpbHNcIj5cbiAgICAgICAgICA8aDI+JHtyZXN0YXVyYW50RGV0YWlsLm5hbWV9PC9oMj5cbiAgICAgICAgICA8cD48c3Ryb25nPkFsYW1hdDo8L3N0cm9uZz4gJHtyZXN0YXVyYW50RGV0YWlsLmFkZHJlc3N9PC9wPlxuICAgICAgICAgIDxwPjxzdHJvbmc+S290YTo8L3N0cm9uZz4gJHtyZXN0YXVyYW50RGV0YWlsLmNpdHl9PC9wPlxuICAgICAgICAgIDxwPjxzdHJvbmc+RGVza3JpcHNpOjwvc3Ryb25nPiAke3Jlc3RhdXJhbnREZXRhaWwuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICR7Y2F0ZWdvcmllc0h0bWx9XG4gICAgICAgICAgJHtmb29kc0h0bWx9XG4gICAgICAgICAgJHtkcmlua3NIdG1sfVxuICAgICAgICAgICR7cmV2aWV3c0h0bWx9XG4gICAgICAgICAgJHtmYXZvcml0ZUJ1dHRvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xufTtcblxuY29uc3QgY3JlYXRlRmF2b3JpdGVSZXN0YXVyYW50VGVtcGxhdGUgPSAocmVzdGF1cmFudHMpID0+IGBcbiAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnQtbGlzdFwiPlxuICAgICR7cmVzdGF1cmFudHMubWFwKChyZXN0YXVyYW50KSA9PiBgXG4gICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudC1jYXJkXCI+XG4gICAgICAgIDxoMj4ke3Jlc3RhdXJhbnQubmFtZX08L2gyPlxuICAgICAgICA8aW1nIHNyYz1cIiR7Q09ORklHLkJBU0VfVVJMfS9pbWFnZXMvbWVkaXVtLyR7cmVzdGF1cmFudC5waWN0dXJlSWR9XCIgYWx0PVwiJHtyZXN0YXVyYW50Lm5hbWV9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50LWNhcmQtaW5mb1wiPlxuICAgICAgICAgIDxwPiR7cmVzdGF1cmFudC5jaXR5fTwvcD5cbiAgICAgICAgICA8cD5SYXRpbmc6ICR7cmVzdGF1cmFudC5yYXRpbmd9PC9wPlxuICAgICAgICAgIDxidXR0b24gZGF0YS1yZXN0YXVyYW50LWlkPVwiJHtyZXN0YXVyYW50LmlkfVwiIGNsYXNzPVwicmVzdGF1cmFudC1kZXRhaWwtYnV0dG9uXCI+TGloYXQgRGV0YWlsPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYCkuam9pbignJyl9XG4gIDwvZGl2PlxuICBgO1xuXG5jb25zdCBjcmVhdGVSZXN0YXVyYW50TGlzdFRlbXBsYXRlID0gKHJlc3RhdXJhbnRzKSA9PiBgXG48ZGl2IGNsYXNzPVwicmVzdGF1cmFudC1saXN0XCI+XG4gICR7cmVzdGF1cmFudHMubWFwKChyZXN0YXVyYW50KSA9PiBgXG4gICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnQtY2FyZFwiPlxuICAgICAgPGgyPiR7cmVzdGF1cmFudC5uYW1lfTwvaDI+XG4gICAgICA8aW1nIGRhdGEtc3JjPVwiJHtDT05GSUcuQkFTRV9VUkx9L2ltYWdlcy9tZWRpdW0vJHtyZXN0YXVyYW50LnBpY3R1cmVJZH1cIiBjbGFzcz1cImxhenlsb2FkXCIgYWx0PVwiJHtyZXN0YXVyYW50Lm5hbWV9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudC1jYXJkLWluZm9cIj5cbiAgICAgICAgPHA+JHtyZXN0YXVyYW50LmNpdHl9PC9wPlxuICAgICAgICA8cD5SYXRpbmc6ICR7cmVzdGF1cmFudC5yYXRpbmd9PC9wPlxuICAgICAgICA8YnV0dG9uIGRhdGEtcmVzdGF1cmFudC1pZD1cIiR7cmVzdGF1cmFudC5pZH1cIiBjbGFzcz1cInJlc3RhdXJhbnQtZGV0YWlsLWJ1dHRvblwiPkxpaGF0IERldGFpbDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApLmpvaW4oJycpfVxuPC9kaXY+XG5gO1xuXG5leHBvcnQge1xuICBjcmVhdGVSZXN0YXVyYW50RGV0YWlsVGVtcGxhdGUsXG4gIGNyZWF0ZUZhdm9yaXRlUmVzdGF1cmFudFRlbXBsYXRlLFxuICBjcmVhdGVSZXN0YXVyYW50TGlzdFRlbXBsYXRlLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCBBUElfRU5EUE9JTlQgZnJvbSAnLi4vZ2xvYmFscy9hcGktZW5kcG9pbnQnO1xuXG5jb25zdCBBcGkgPSB7XG4gIGFzeW5jIGdldFJlc3RhdXJhbnREZXRhaWwocmVzdGF1cmFudElkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJX0VORFBPSU5ULkRFVEFJTChyZXN0YXVyYW50SWQpKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiByZXNwb25zZUpzb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHdoaWxlIGZldGNoaW5nIHJlc3RhdXJhbnQgZGV0YWlsIGRhdGE6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgZXJyb3I6IHRydWUsIG1lc3NhZ2U6ICdFcnJvciB3aGlsZSBmZXRjaGluZyByZXN0YXVyYW50IGRldGFpbCBkYXRhLicgfTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgIGdldEN1c3RvbWVyUmV2aWV3cyhyZXN0YXVyYW50SWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfRU5EUE9JTlQuQ1VTVE9NRVJfUkVWSUVXUyhyZXN0YXVyYW50SWQpKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiByZXNwb25zZUpzb24uY3VzdG9tZXJSZXZpZXdzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjdXN0b21lciByZXZpZXdzOicsIGVycm9yKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgYWRkRmF2b3JpdGVSZXN0YXVyYW50KHJlc3RhdXJhbnRJZCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9FTkRQT0lOVC5BRERfRkFWT1JJVEUsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkOiByZXN0YXVyYW50SWQgfSksXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiByZXNwb25zZUpzb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3Igd2hpbGUgYWRkaW5nIGZhdm9yaXRlIHJlc3RhdXJhbnQuJyk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIHJlbW92ZUZhdm9yaXRlUmVzdGF1cmFudChyZXN0YXVyYW50SWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfRU5EUE9JTlQuUkVNT1ZFX0ZBVk9SSVRFLCB7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkOiByZXN0YXVyYW50SWQgfSksXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiByZXNwb25zZUpzb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3Igd2hpbGUgcmVtb3ZpbmcgZmF2b3JpdGUgcmVzdGF1cmFudC4nKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZ2V0QWxsRmF2b3JpdGVSZXN0YXVyYW50cygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfRU5EUE9JTlQuQUREX0ZBVk9SSVRFKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiByZXNwb25zZUpzb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3Igd2hpbGUgZmV0Y2hpbmcgZmF2b3JpdGUgcmVzdGF1cmFudCBkYXRhLicpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBnZXRBbGxSZXN0YXVyYW50cygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfRU5EUE9JTlQuTElTVCk7XG4gICAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gcmVzcG9uc2VKc29uO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIHdoaWxlIGZldGNoaW5nIHJlc3RhdXJhbnQgbGlzdCBkYXRhLicpO1xuICAgIH1cbiAgfSxcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxuY29uc3QgRHJhd2VySW5pdGlhdG9yID0ge1xuICBpbml0KHsgYnV0dG9uLCBkcmF3ZXIsIGNvbnRlbnQgfSkge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdG9nZ2xlRHJhd2VyKGV2ZW50LCBkcmF3ZXIpO1xuICAgIH0pO1xuXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fY2xvc2VEcmF3ZXIoZXZlbnQsIGRyYXdlcik7XG4gICAgfSk7XG4gIH0sXG5cbiAgX3RvZ2dsZURyYXdlcihldmVudCwgZHJhd2VyKSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZHJhd2VyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgfSxcblxuICBfY2xvc2VEcmF3ZXIoZXZlbnQsIGRyYXdlcikge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGRyYXdlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXJJbml0aWF0b3I7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLy8gdmlld3MvYXBwLmpzXG5cbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBEcmF3ZXJJbml0aWF0b3IgZnJvbSAnLi4vdXRpbHMvZHJhd2VyLWluaXRpYXRvcic7XG5pbXBvcnQgVXJsUGFyc2VyIGZyb20gJy4uL3JvdXRlcy91cmwtcGFyc2VyJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vcm91dGVzL3JvdXRlcyc7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKHsgYnV0dG9uLCBkcmF3ZXIsIGNvbnRlbnQgfSkge1xuICAgIHRoaXMuX2J1dHRvbiA9IGJ1dHRvbjtcbiAgICB0aGlzLl9kcmF3ZXIgPSBkcmF3ZXI7XG4gICAgdGhpcy5fY29udGVudCA9IGNvbnRlbnQ7XG5cbiAgICB0aGlzLl9pbml0aWFsQXBwU2hlbGwoKTtcbiAgfVxuXG4gIF9pbml0aWFsQXBwU2hlbGwoKSB7XG4gICAgRHJhd2VySW5pdGlhdG9yLmluaXQoe1xuICAgICAgYnV0dG9uOiB0aGlzLl9idXR0b24sXG4gICAgICBkcmF3ZXI6IHRoaXMuX2RyYXdlcixcbiAgICAgIGNvbnRlbnQ6IHRoaXMuX2NvbnRlbnQsXG4gICAgfSk7XG4gICAgdGhpcy5faW5pdE1lbnUoKTtcbiAgfVxuXG4gIF9pbml0TWVudSgpIHtcbiAgICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWljb24nKTtcbiAgICBjb25zdCBuYXZEcmF3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWRyYXdlcicpO1xuICAgIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LW1lbnUnKTtcblxuICAgIG1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbmF2RHJhd2VyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgbmF2TWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblxuICAgICAgaWYgKG5hdk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBuYXZNZW51LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVudUljb24uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHNraXBUb0NvbnRlbnRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraXAtbGluaycpO1xuICAgIHNraXBUb0NvbnRlbnRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdXJsID0gVXJsUGFyc2VyLnBhcnNlQWN0aXZlVXJsV2l0aENvbWJpbmVyKCk7XG4gICAgICBsZXQgdGFyZ2V0SWQgPSBudWxsO1xuXG4gICAgICBpZiAodXJsID09PSAnLycpIHtcbiAgICAgICAgdGFyZ2V0SWQgPSAnbWFpbi1jb250ZW50JztcbiAgICAgIH0gZWxzZSBpZiAodXJsLmluY2x1ZGVzKCcvcmVzdGF1cmFudC8nKSkge1xuICAgICAgICB0YXJnZXRJZCA9ICdyZXN0YXVyYW50LWRldGFpbCc7XG4gICAgICB9IGVsc2UgaWYgKHVybCA9PT0gJy9mYXZvcml0ZXMnKSB7XG4gICAgICAgIHRhcmdldElkID0gJ2Zhdm9yaXRlLXJlc3RhdXJhbnRzJztcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldElkKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XG4gICAgICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgICAgdGFyZ2V0RWxlbWVudC50YWJJbmRleCA9IC0xO1xuICAgICAgICAgIHRhcmdldEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgcmVuZGVyUGFnZSgpIHtcbiAgICBjb25zdCB1cmwgPSBVcmxQYXJzZXIucGFyc2VBY3RpdmVVcmxXaXRoQ29tYmluZXIoKTtcbiAgICBjb25zdCBwYWdlID0gcm91dGVzW3VybF07XG4gICAgdGhpcy5fY29udGVudC5pbm5lckhUTUwgPSBhd2FpdCBwYWdlLnJlbmRlcigpO1xuICAgIGF3YWl0IHBhZ2UuYWZ0ZXJSZW5kZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGNhY2hlZE1vZHVsZS5lcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBjYWNoZWRNb2R1bGUuZXJyb3I7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdHRyeSB7XG5cdFx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuXHRcdG1vZHVsZSA9IGV4ZWNPcHRpb25zLm1vZHVsZTtcblx0XHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXHR9IGNhdGNoKGUpIHtcblx0XHRtb2R1bGUuZXJyb3IgPSBlO1xuXHRcdHRocm93IGU7XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0b3Jcbl9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwiYXBwLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzb25cIik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmQwMjQ5MGUxYzMzODMzZmI5NmFcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJyZXN0YXVyYW50LWFwcHM6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgY3VycmVudE1vZHVsZURhdGEgPSB7fTtcbnZhciBpbnN0YWxsZWRNb2R1bGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jO1xuXG4vLyBtb2R1bGUgYW5kIHJlcXVpcmUgY3JlYXRpb25cbnZhciBjdXJyZW50Q2hpbGRNb2R1bGU7XG52YXIgY3VycmVudFBhcmVudHMgPSBbXTtcblxuLy8gc3RhdHVzXG52YXIgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzID0gW107XG52YXIgY3VycmVudFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4vLyB3aGlsZSBkb3dubG9hZGluZ1xudmFyIGJsb2NraW5nUHJvbWlzZXMgPSAwO1xudmFyIGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nID0gW107XG5cbi8vIFRoZSB1cGRhdGUgaW5mb1xudmFyIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzO1xudmFyIHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckQgPSBjdXJyZW50TW9kdWxlRGF0YTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5pLnB1c2goZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0dmFyIG1vZHVsZSA9IG9wdGlvbnMubW9kdWxlO1xuXHR2YXIgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUob3B0aW9ucy5yZXF1aXJlLCBvcHRpb25zLmlkKTtcblx0bW9kdWxlLmhvdCA9IGNyZWF0ZU1vZHVsZUhvdE9iamVjdChvcHRpb25zLmlkLCBtb2R1bGUpO1xuXHRtb2R1bGUucGFyZW50cyA9IGN1cnJlbnRQYXJlbnRzO1xuXHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0b3B0aW9ucy5yZXF1aXJlID0gcmVxdWlyZTtcbn0pO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1ySSA9IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVSZXF1aXJlKHJlcXVpcmUsIG1vZHVsZUlkKSB7XG5cdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXHRpZiAoIW1lKSByZXR1cm4gcmVxdWlyZTtcblx0dmFyIGZuID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcblx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuXHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcblx0XHRcdFx0dmFyIHBhcmVudHMgPSBpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHM7XG5cdFx0XHRcdGlmIChwYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuXHRcdFx0XHRcdHBhcmVudHMucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcblx0XHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcblx0XHRcdH1cblx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuXHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcblx0XHRcdFx0XHRyZXF1ZXN0ICtcblx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuXHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHQpO1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcXVpcmUocmVxdWVzdCk7XG5cdH07XG5cdHZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiByZXF1aXJlW25hbWVdO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJlcXVpcmVbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHRmb3IgKHZhciBuYW1lIGluIHJlcXVpcmUpIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlcXVpcmUsIG5hbWUpICYmIG5hbWUgIT09IFwiZVwiKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcihuYW1lKSk7XG5cdFx0fVxuXHR9XG5cdGZuLmUgPSBmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdHJldHVybiB0cmFja0Jsb2NraW5nUHJvbWlzZShyZXF1aXJlLmUoY2h1bmtJZCkpO1xuXHR9O1xuXHRyZXR1cm4gZm47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZHVsZUhvdE9iamVjdChtb2R1bGVJZCwgbWUpIHtcblx0dmFyIF9tYWluID0gY3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZDtcblx0dmFyIGhvdCA9IHtcblx0XHQvLyBwcml2YXRlIHN0dWZmXG5cdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfYWNjZXB0ZWRFcnJvckhhbmRsZXJzOiB7fSxcblx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuXHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuXHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuXHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuXHRcdF9tYWluOiBfbWFpbixcblx0XHRfcmVxdWlyZVNlbGY6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gbWUucGFyZW50cy5zbGljZSgpO1xuXHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gX21haW4gPyB1bmRlZmluZWQgOiBtb2R1bGVJZDtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuXHRcdH0sXG5cblx0XHQvLyBNb2R1bGUgQVBJXG5cdFx0YWN0aXZlOiB0cnVlLFxuXHRcdGFjY2VwdDogZnVuY3Rpb24gKGRlcCwgY2FsbGJhY2ssIGVycm9ySGFuZGxlcikge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBbaV1dID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRlY2xpbmU6IGZ1bmN0aW9uIChkZXApIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG5cdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG5cdFx0fSxcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcblx0XHRcdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcblx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG5cdFx0XHRcdFx0KHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChcblx0XHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIE1hbmFnZW1lbnQgQVBJXG5cdFx0Y2hlY2s6IGhvdENoZWNrLFxuXHRcdGFwcGx5OiBob3RBcHBseSxcblx0XHRzdGF0dXM6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRpZiAoIWwpIHJldHVybiBjdXJyZW50U3RhdHVzO1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0dmFyIGlkeCA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblxuXHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuXHRcdGRhdGE6IGN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuXHR9O1xuXHRjdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG5cdHJldHVybiBob3Q7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXR1cyhuZXdTdGF0dXMpIHtcblx0Y3VycmVudFN0YXR1cyA9IG5ld1N0YXR1cztcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcblx0XHRyZXN1bHRzW2ldID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cyk7XG59XG5cbmZ1bmN0aW9uIHVuYmxvY2soKSB7XG5cdGlmICgtLWJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0XHRcdHZhciBsaXN0ID0gYmxvY2tpbmdQcm9taXNlc1dhaXRpbmc7XG5cdFx0XHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nID0gW107XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGxpc3RbaV0oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHRyYWNrQmxvY2tpbmdQcm9taXNlKHByb21pc2UpIHtcblx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuXHRcdC8qIGZhbGx0aHJvdWdoICovXG5cdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMrKztcblx0XHRcdHByb21pc2UudGhlbih1bmJsb2NrLCB1bmJsb2NrKTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxufVxuXG5mdW5jdGlvbiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmbikge1xuXHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkgcmV0dXJuIGZuKCk7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nLnB1c2goZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVzb2x2ZShmbigpKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5T25VcGRhdGUpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG5cdH1cblx0cmV0dXJuIHNldFN0YXR1cyhcImNoZWNrXCIpXG5cdFx0LnRoZW4oX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNKVxuXHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGUpIHtcblx0XHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKS50aGVuKFxuXHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInByZXBhcmVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciB1cGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMpLnJlZHVjZShmdW5jdGlvbiAoXG5cdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdGtleVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJDW2tleV0oXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5jLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUucixcblx0XHRcdFx0XHRcdFx0dXBkYXRlLm0sXG5cdFx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlZE1vZHVsZXNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRbXSlcblx0XHRcdFx0KS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRyZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKGFwcGx5T25VcGRhdGUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkoYXBwbHlPblVwZGF0ZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHVwZGF0ZWRNb2R1bGVzO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcbn1cblxuZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJyZWFkeVwiKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHRcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1cyAoc3RhdGU6IFwiICtcblx0XHRcdFx0XHRjdXJyZW50U3RhdHVzICtcblx0XHRcdFx0XHRcIilcIlxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJuYWxBcHBseShvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG5cblx0dmFyIHJlc3VsdHMgPSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycy5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHtcblx0XHRyZXR1cm4gaGFuZGxlcihvcHRpb25zKTtcblx0fSk7XG5cdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gdW5kZWZpbmVkO1xuXG5cdHZhciBlcnJvcnMgPSByZXN1bHRzXG5cdFx0Lm1hcChmdW5jdGlvbiAocikge1xuXHRcdFx0cmV0dXJuIHIuZXJyb3I7XG5cdFx0fSlcblx0XHQuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJhYm9ydFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IGVycm9yc1swXTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuXHR2YXIgZGlzcG9zZVByb21pc2UgPSBzZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuXG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5kaXNwb3NlKSByZXN1bHQuZGlzcG9zZSgpO1xuXHR9KTtcblxuXHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG5cdHZhciBhcHBseVByb21pc2UgPSBzZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuXHR2YXIgZXJyb3I7XG5cdHZhciByZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcblx0fTtcblxuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5hcHBseSkge1xuXHRcdFx0dmFyIG1vZHVsZXMgPSByZXN1bHQuYXBwbHkocmVwb3J0RXJyb3IpO1xuXHRcdFx0aWYgKG1vZHVsZXMpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChbZGlzcG9zZVByb21pc2UsIGFwcGx5UHJvbWlzZV0pLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiZmFpbFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNldFN0YXR1cyhcImlkbGVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG5cdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRpZiAoIWN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzKSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufSIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wIHx8IHtcblx0XCJhcHBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbnZhciBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0O1xudmFyIHdhaXRpbmdVcGRhdGVSZXNvbHZlcyA9IHt9O1xuZnVuY3Rpb24gbG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkge1xuXHRjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0ID0gdXBkYXRlZE1vZHVsZXNMaXN0O1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHJlc29sdmU7XG5cdFx0Ly8gc3RhcnQgdXBkYXRlIGNodW5rIGxvYWRpbmdcblx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5odShjaHVua0lkKTtcblx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0XHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZFxuXHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgaG90IHVwZGF0ZSBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCk7XG5cdH0pO1xufVxuXG5zZWxmW1wid2VicGFja0hvdFVwZGF0ZXJlc3RhdXJhbnRfYXBwc1wiXSA9IChjaHVua0lkLCBtb3JlTW9kdWxlcywgcnVudGltZSkgPT4ge1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0aWYoY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCkgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgY3VycmVudFVwZGF0ZVJ1bnRpbWUucHVzaChydW50aW1lKTtcblx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKCk7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHR9XG59O1xuXG52YXIgY3VycmVudFVwZGF0ZUNodW5rcztcbnZhciBjdXJyZW50VXBkYXRlO1xudmFyIGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGVSdW50aW1lO1xuZnVuY3Rpb24gYXBwbHlIYW5kbGVyKG9wdGlvbnMpIHtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikgZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtcjtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHVuZGVmaW5lZDtcblx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKHVwZGF0ZU1vZHVsZUlkKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG5cdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cblx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hhaW46IFtpZF0sXG5cdFx0XHRcdGlkOiBpZFxuXHRcdFx0fTtcblx0XHR9KTtcblx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuXHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuXHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFtb2R1bGUgfHxcblx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuXHRcdFx0KVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG5cdFx0XHRcdHZhciBwYXJlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbcGFyZW50SWRdO1xuXHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG5cdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcblx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcblx0XHRcdFx0cXVldWUucHVzaCh7XG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRpZDogcGFyZW50SWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcblx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcblx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuXHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gYltpXTtcblx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcblx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuXHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG5cdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUobW9kdWxlKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyBtb2R1bGUuaWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcblx0XHQpO1xuXHR9O1xuXG5cdGZvciAodmFyIG1vZHVsZUlkIGluIGN1cnJlbnRVcGRhdGUpIHtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdFx0dmFyIG5ld01vZHVsZUZhY3RvcnkgPSBjdXJyZW50VXBkYXRlW21vZHVsZUlkXTtcblx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cblx0XHRcdHZhciByZXN1bHQ7XG5cdFx0XHRpZiAobmV3TW9kdWxlRmFjdG9yeSkge1xuXHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHMobW9kdWxlSWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0ID0ge1xuXHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG5cdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcblx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcblx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuXHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuXHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGVycm9yOiBhYm9ydEVycm9yXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9BcHBseSkge1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IG5ld01vZHVsZUZhY3Rvcnk7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcblx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjdXJyZW50VXBkYXRlID0gdW5kZWZpbmVkO1xuXG5cdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cblx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGorKykge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2pdO1xuXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0aWYgKFxuXHRcdFx0bW9kdWxlICYmXG5cdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkIHx8IG1vZHVsZS5ob3QuX21haW4pICYmXG5cdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG5cdFx0XHRhcHBsaWVkVXBkYXRlW291dGRhdGVkTW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcblx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG5cdFx0XHQhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkXG5cdFx0KSB7XG5cdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG5cdFx0XHRcdG1vZHVsZTogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0cmVxdWlyZTogbW9kdWxlLmhvdC5fcmVxdWlyZVNlbGYsXG5cdFx0XHRcdGVycm9ySGFuZGxlcjogbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG5cblx0cmV0dXJuIHtcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHR9KTtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR2YXIgaWR4O1xuXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG5cdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuXHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG5cdFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuXHRcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0ZGlzcG9zZUhhbmRsZXJzW2pdLmNhbGwobnVsbCwgZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJEW21vZHVsZUlkXSA9IGRhdGE7XG5cblx0XHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcblx0XHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcblx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcblx0XHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcblx0XHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuXHRcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuXHRcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cblx0XHRcdHZhciBkZXBlbmRlbmN5O1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXBwbHk6IGZ1bmN0aW9uIChyZXBvcnRFcnJvcikge1xuXHRcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG5cdFx0XHRmb3IgKHZhciB1cGRhdGVNb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oYXBwbGllZFVwZGF0ZSwgdXBkYXRlTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW3VwZGF0ZU1vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJ1biBuZXcgcnVudGltZSBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRVcGRhdGVSdW50aW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lW2ldKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdHZhciBhY2NlcHRDYWxsYmFjayA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXIgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0aWYgKGFjY2VwdENhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGFjY2VwdENhbGxiYWNrKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGFjY2VwdENhbGxiYWNrKTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzLnB1c2goZXJyb3JIYW5kbGVyKTtcblx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MucHVzaChkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBjYWxsYmFja3MubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3Nba10uY2FsbChudWxsLCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgZXJyb3JIYW5kbGVyc1trXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzW2tdKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIG8gPSAwOyBvIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgbysrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW29dO1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpdGVtLnJlcXVpcmUobW9kdWxlSWQpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGU6IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9XG5cdH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkuanNvbnAgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGFwcGx5SGFuZGxlcnMpIHtcblx0aWYgKCFjdXJyZW50VXBkYXRlKSB7XG5cdFx0Y3VycmVudFVwZGF0ZSA9IHt9O1xuXHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSBbXTtcblx0XHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0fVxuXHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF07XG5cdH1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMuanNvbnAgPSBmdW5jdGlvbiAoXG5cdGNodW5rSWRzLFxuXHRyZW1vdmVkQ2h1bmtzLFxuXHRyZW1vdmVkTW9kdWxlcyxcblx0cHJvbWlzZXMsXG5cdGFwcGx5SGFuZGxlcnMsXG5cdHVwZGF0ZWRNb2R1bGVzTGlzdFxuKSB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0ge307XG5cdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gcmVtb3ZlZENodW5rcztcblx0Y3VycmVudFVwZGF0ZSA9IHJlbW92ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcblx0XHRvYmpba2V5XSA9IGZhbHNlO1xuXHRcdHJldHVybiBvYmo7XG5cdH0sIHt9KTtcblx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0Y2h1bmtJZHMuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdGlmIChcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdCkge1xuXHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IGZhbHNlO1xuXHRcdH1cblx0fSk7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXIgPSBmdW5jdGlvbiAoY2h1bmtJZCwgcHJvbWlzZXMpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rcyAmJlxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZUNodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0IWN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF1cblx0XHRcdCkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSk7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yTSA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBmZXRjaCA9PT0gXCJ1bmRlZmluZWRcIikgdGhyb3cgbmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0OiBuZWVkIGZldGNoIEFQSVwiKTtcblx0cmV0dXJuIGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSByZXR1cm47IC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcblx0XHRpZighcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1cGRhdGUgbWFuaWZlc3QgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3Jlc3RhdXJhbnRfYXBwc1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtyZXN0YXVyYW50X2FwcHNcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gbW9kdWxlIGNhY2hlIGFyZSB1c2VkIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImRlZmF1bHRWZW5kb3JzLW5vZGVfbW9kdWxlc19hbnNpLWh0bWwtY29tbXVuaXR5X2luZGV4X2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZS01MzcwZDJcIixcImRlZmF1bHRWZW5kb3JzLW5vZGVfbW9kdWxlc19odG1sLWVudGl0aWVzX2xpYl9uYW1lZC1yZWZlcmVuY2VzX2pzXCIsXCJkZWZhdWx0VmVuZG9ycy1ub2RlX21vZHVsZXNfbGF6eXNpemVzX3BsdWdpbnNfcGFyZW50LWZpdF9sc19wYXJlbnQtZml0X2pzLW5vZGVfbW9kdWxlc19yZWdlbmUtOGFjMGQwXCIsXCJkZWZhdWx0VmVuZG9ycy1ub2RlX21vZHVsZXNfc3R5bGUtbG9hZGVyX2Rpc3RfcnVudGltZV9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWdfanMtbm9kZV9tb2R1bGUtMzU1ZmUxXCIsXCJkZWZhdWx0VmVuZG9ycy1ub2RlX21vZHVsZXNfd2VicGFjay1kZXYtc2VydmVyX2NsaWVudF9zb2NrZXRfanMtbm9kZV9tb2R1bGVzX3dlYnBhY2stZGV2LXNlcnYtYjdiMGU5XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvaW5kZXguanM/cHJvdG9jb2w9d3MlM0EmaG9zdG5hbWU9MC4wLjAuMCZwb3J0PTgwODAmcGF0aG5hbWU9JTJGd3MmbG9nZ2luZz1pbmZvJm92ZXJsYXk9JTdCJTIyZXJyb3JzJTIyJTNBdHJ1ZSUyQyUyMndhcm5pbmdzJTIyJTNBZmFsc2UlN0QmcmVjb25uZWN0PTEwJmhvdD10cnVlJmxpdmUtcmVsb2FkPXRydWVcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZGVmYXVsdFZlbmRvcnMtbm9kZV9tb2R1bGVzX2Fuc2ktaHRtbC1jb21tdW5pdHlfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lLTUzNzBkMlwiLFwiZGVmYXVsdFZlbmRvcnMtbm9kZV9tb2R1bGVzX2h0bWwtZW50aXRpZXNfbGliX25hbWVkLXJlZmVyZW5jZXNfanNcIixcImRlZmF1bHRWZW5kb3JzLW5vZGVfbW9kdWxlc19sYXp5c2l6ZXNfcGx1Z2luc19wYXJlbnQtZml0X2xzX3BhcmVudC1maXRfanMtbm9kZV9tb2R1bGVzX3JlZ2VuZS04YWMwZDBcIixcImRlZmF1bHRWZW5kb3JzLW5vZGVfbW9kdWxlc19zdHlsZS1sb2FkZXJfZGlzdF9ydW50aW1lX2luamVjdFN0eWxlc0ludG9TdHlsZVRhZ19qcy1ub2RlX21vZHVsZS0zNTVmZTFcIixcImRlZmF1bHRWZW5kb3JzLW5vZGVfbW9kdWxlc193ZWJwYWNrLWRldi1zZXJ2ZXJfY2xpZW50X3NvY2tldF9qcy1ub2RlX21vZHVsZXNfd2VicGFjay1kZXYtc2Vydi1iN2IwZTlcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvZGV2LXNlcnZlci5qc1wiKSkpXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImRlZmF1bHRWZW5kb3JzLW5vZGVfbW9kdWxlc19hbnNpLWh0bWwtY29tbXVuaXR5X2luZGV4X2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZS01MzcwZDJcIixcImRlZmF1bHRWZW5kb3JzLW5vZGVfbW9kdWxlc19odG1sLWVudGl0aWVzX2xpYl9uYW1lZC1yZWZlcmVuY2VzX2pzXCIsXCJkZWZhdWx0VmVuZG9ycy1ub2RlX21vZHVsZXNfbGF6eXNpemVzX3BsdWdpbnNfcGFyZW50LWZpdF9sc19wYXJlbnQtZml0X2pzLW5vZGVfbW9kdWxlc19yZWdlbmUtOGFjMGQwXCIsXCJkZWZhdWx0VmVuZG9ycy1ub2RlX21vZHVsZXNfc3R5bGUtbG9hZGVyX2Rpc3RfcnVudGltZV9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWdfanMtbm9kZV9tb2R1bGUtMzU1ZmUxXCIsXCJkZWZhdWx0VmVuZG9ycy1ub2RlX21vZHVsZXNfd2VicGFjay1kZXYtc2VydmVyX2NsaWVudF9zb2NrZXRfanMtbm9kZV9tb2R1bGVzX3dlYnBhY2stZGV2LXNlcnYtYjdiMGU5XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=