const assets = [
    '/example-pwa/',
    'manifest.json',
    'images/icons/icon-72x72.png',
    'images/icons/icon-96x96.png',
    'index.html',
]

self.addEventListener('install', installEvent => {
    installEvent.waitUntil(
        caches.open('static').then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener('fetch', fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(response => {
            return response || fetch(fetchEvent.request)
        })
    )
})