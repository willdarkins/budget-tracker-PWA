const CACHE_NAME = 'budget-tracker-cache-v1';
const DATA_CACHE_NAME = 'data-cache-v1';

const FILES_TO_CACHE = [
    '/',
    '/css/styles.css',
    '/icons/icon-72x72.png',
    '/icons/icon-96x96.png',
    '/icons/icon-128x128.png',
    '/icons/icon-144x144.png',
    '/icons/icon-152x152.png',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
    '/icons/icon-128x128.png',
    '/js/idb.js',
    '/js/index.js',
    '/index.html',
    '/manifest.json',
  ];

    // Install the service worker
self.addEventListener('install', function(evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Your fiels were pre-cached succesffuly!');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
})