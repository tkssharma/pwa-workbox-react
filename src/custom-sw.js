/* eslint-disable no-undef */
// See https://developers.google.com/web/tools/workbox/guides/configure-workbox
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

workbox.routing.registerRoute(
  new RegExp('.css$'),
  workbox.strategies.cacheFirst({
    cacheName: 'poc-cache-Stylesheets',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
        maxEntries: 20, // only cache 20 request
        purgeOnQuotaError: true,
      }),
    ],
  }),
);
workbox.routing.registerRoute(
  new RegExp('.(png|svg|jpg|jpeg)$'),
  workbox.strategies.cacheFirst({
    cacheName: 'poc-cache-Images',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7,
        maxEntries: 50,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('https://randomuser.me/api/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'poc-cache-employees',
    cacheExpiration: {
      maxAgeSeconds: 60 * 30, //cache the news content for 30mn
    },
  }),
);
workbox.routing.registerRoute('/', workbox.strategies.networkFirst());
// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
workbox.precaching.precacheAndRoute(self.__precacheManifest);
