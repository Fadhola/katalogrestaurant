/* eslint-disable prefer-regex-literals */
/* eslint-disable no-useless-escape */
/* eslint-disable no-restricted-globals */
import 'regenerator-runtime';
import { workbox } from 'workbox-window';
import { cacheAppShell, removeOldCaches, cacheFirstStrategy } from './utils/cache-helper';

self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      cacheAppShell([
        './',
        './public/app.webmanifest',
        './public/icon/RA-48-48.png',
        './public/icon/RA-72-72.png',
        './public/icon/RA-96-96.png',
        './public/icon/RA-128-128.png',
        './public/icon/RA-144-144.png',
        './public/icon/RA-192-192.png',
        './public/icon/RA-512-512.png',
        './public/images/heros/hero-image_2.jpg',
        '../dist/index.html',
        '../dist/app.bundle.js',
        '../dist/sw.bundle.js',
      ]),
      removeOldCaches(),
    ]),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    removeOldCaches(),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    cacheFirstStrategy(event.request),
  );
});

workbox.routing.registerRoute(
  new RegExp('.*\.json'),
  new workbox.strategies.StaleWhileRevalidate(),
);
