/* eslint-disable no-console */
import { register } from 'register-service-worker'
/*const SW_VERSION = 1;
const CACHE_NAME = `pwa-cache-v${SW_VERSION}`;
const urlList = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/app.js'
];

self.addEventListener('install', event => {
    console.log('install - Service Worker installing.');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('SW: Cache opened');
                return cache.addAll(urlList);
            })
            .catch(error => {
                console.error(error);
            })
    );
});*/
if (process.env.NODE_ENV === 'production') {
register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
        console.log(
            'App is being served from cache by a service worker.\n' +
            'For more details, visit https://goo.gl/AFskqB'
        )
    },
    registered () {
        console.log('Service worker has been registered.')
    },
    cached () {
        console.log('Content has been cached for offline use.')
    },
    updatefound () {
        console.log('New content is downloading.')
    },
    updated () {
        console.log('New content is available; please refresh.')
    },
    offline () {
        console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
        console.error('Error during service worker registration:', error)
    }
})
}
