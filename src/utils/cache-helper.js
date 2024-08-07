/* eslint-disable linebreak-style */
/* eslint-disable import/named */
import { CACHE_NAME } from '../globals/config';
// eslint-disable-next-line linebreak-style

async function openCache() {
  return caches.open(CACHE_NAME);
}

async function cacheAppShell(requests) {
  const cache = await openCache();
  await cache.addAll(requests);
}

async function removeOldCaches() {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames
      .filter((name) => name !== CACHE_NAME)
      .map((name) => caches.delete(name)),
  );
}

async function cacheFirstStrategy(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  return fetch(request);
}

export {
  cacheAppShell,
  removeOldCaches,
  cacheFirstStrategy,
};
