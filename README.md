# Using Workbox with Create React App

Employee CRUD with WorkBox 

### Build the project

```bash
$ npm install
$ npm run build
```
### Running  Application

```bash
$ yarn global add serve
$ serve -s build
or 
$ cd build
$ python -m SimpleHTTPServer 8000
```
### caching mechanism using workbox

```
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
      maxAgeSeconds: 60 * 30,
    },
  }),
);
```

