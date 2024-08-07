/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-1c3feaa0'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "app.bundle.js",
    "revision": "13443514a3b25b571c18568313c13fbd"
  }, {
    "url": "defaultVendors-node_modules_ansi-html-community_index_js-node_modules_css-loader_dist_runtime-5370d2.bundle.js",
    "revision": "9da6204c1cfb6b9b8c4a96260c937ee5"
  }, {
    "url": "defaultVendors-node_modules_html-entities_lib_named-references_js.bundle.js",
    "revision": "96633994ecfd8fa3d107b8b8b4fa9d62"
  }, {
    "url": "defaultVendors-node_modules_lazysizes_plugins_parent-fit_ls_parent-fit_js-node_modules_regene-8ac0d0.bundle.js",
    "revision": "cc55043406c580225386b1e61e7855e9"
  }, {
    "url": "defaultVendors-node_modules_style-loader_dist_runtime_injectStylesIntoStyleTag_js-node_module-355fe1.bundle.js",
    "revision": "e0c9c647b3ada914434647f1d227834d"
  }, {
    "url": "defaultVendors-node_modules_webpack-dev-server_client_socket_js-node_modules_webpack-dev-serv-b7b0e9.bundle.js",
    "revision": "594a736312f9413a6dff16edf5e08366"
  }, {
    "url": "favicon.png",
    "revision": "de48959ba80419b7a6802cf446ce7d37"
  }, {
    "url": "index.html",
    "revision": "0a674b8e14885e3c3baf920dc9fff03c"
  }, {
    "url": "public/app.webmanifest",
    "revision": "e29bd86a74da8e00861170ef66387246"
  }, {
    "url": "public/favicon.png",
    "revision": "de48959ba80419b7a6802cf446ce7d37"
  }, {
    "url": "public/icons/RA-128-128.png",
    "revision": "bbfc5587db1f8c7179c9ddeb92f9a8a7"
  }, {
    "url": "public/icons/RA-144-144.png",
    "revision": "0efbd8e619753d659a9b9cbdcb16cdcd"
  }, {
    "url": "public/icons/RA-192-192.png",
    "revision": "e214085e83c25dd6516902943bd66795"
  }, {
    "url": "public/icons/RA-48-48.png",
    "revision": "a79e437685ae10a29c337674d5fa896b"
  }, {
    "url": "public/icons/RA-512-512.png",
    "revision": "f953589eecd366b241bc318518713eb7"
  }, {
    "url": "public/icons/RA-72-72.png",
    "revision": "af917f13c3590d8bd4bd6c9932c0d4db"
  }, {
    "url": "public/icons/RA-96-96.png",
    "revision": "9e21f1fc3536e8dee684558db9555b84"
  }, {
    "url": "public/images/heros/hero-image_2-desktop.jpg",
    "revision": "3cc75d29a1d63a84641abee3623161f6"
  }, {
    "url": "public/images/heros/hero-image_2-mobile.jpg",
    "revision": "f3f53777d167120e5b00b6559b655edb"
  }, {
    "url": "public/images/logo.png",
    "revision": "de48959ba80419b7a6802cf446ce7d37"
  }], {});
  workbox.registerRoute(({
    url
  }) => url.href.startsWith('https://restaurant-api.dicoding.dev'), new workbox.StaleWhileRevalidate({
    "cacheName": "restaurant-api-cache",
    plugins: []
  }), 'GET');
  workbox.registerRoute(({
    url
  }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/small/<pictureId>'), new workbox.StaleWhileRevalidate({
    "cacheName": "restaurant-images-small-cache",
    plugins: []
  }), 'GET');
  workbox.registerRoute(({
    url
  }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/<pictureId>'), new workbox.StaleWhileRevalidate({
    "cacheName": "restaurant-images-medium-cache",
    plugins: []
  }), 'GET');
  workbox.registerRoute(({
    url
  }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/large/<pictureId>'), new workbox.StaleWhileRevalidate({
    "cacheName": "restaurant-images-large-cache",
    plugins: []
  }), 'GET');

}));
//# sourceMappingURL=sw.bundle.js.map
