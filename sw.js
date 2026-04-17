const CACHE = 'rts-academy-v1';
const FILES = [
  '/',
  '/index.html',
  '/RTS Logo.jpg',
  '/director.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
