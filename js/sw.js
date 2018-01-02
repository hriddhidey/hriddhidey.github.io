self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});

self.addEventListener('install', e => {
	e.waitUntil(
		// after the service worker is installed,
		// open a new cache
		caches.open('hriddhi-dey-cache')
		.then(cache => {
			// add all URLs of resources we want to cache
			return cache.addAll([
			// '/',
			// '/index.html',
			// '/article.html',
			// '/styles/grid.css',
			// '/styles/style.css',
			// '/styles/animations.css',
			// '/styles/aos.css',
			// '/js/index.js',
			// '/js/typed.js',
			// '/js/aos.js',
			'/assets/images/bg.jpg',
			'/assets/images/logo.png',
			'/assets/images/myface.jpg',
			]);
		})
		.catch(e => console.log('Error occurred while opening cache: ', e))
	);
});