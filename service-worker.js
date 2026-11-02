// Only cache public icon resources; never cache financial data, HTML, authentication or Supabase API responses.
const CACHE = 'familien-organizer-public-assets-v1';
const ASSETS = ['./icon-192.png', './icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('familien-organizer-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (!ASSETS.some(asset => url.pathname.endsWith(asset.slice(1)))) return;
  event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request)));
});
