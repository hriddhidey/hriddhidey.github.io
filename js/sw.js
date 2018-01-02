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
			'/',
			'/index.html',
			'/article.html',
			'/styles/grid.css',
			'/styles/style.css',
			'/styles/animations.css',
			'/styles/aos.css',
			'/js/index.js',
			'/js/typed.js',
			'/js/aos.js',
			'/assets/images/bg.jpg',
			'/assets/images/logo.png',
			'/assets/images/myface.jpg',
			'https://hriddhiblog.wordpress.com/2015/08/15/a-jouyous-cry/',
			'https://hriddhiblog.wordpress.com/2017/06/01/peace/',
			'https://hriddhiblog.wordpress.com/2016/10/15/have-a-little-faith/',
			'https://github.com/hriddhidey/visage',
			'https://hriddhidey.github.io/Tesk/',
			'https://github.com/hriddhidey/DWDM-Project',
			'https://drive.google.com/file/d/0B4mq-VppkZBXckhrNFRheXlCMG8/view?usp=sharing'
			]);
		})
		.catch(e => console.log('Error occurred while opening cache: ', e))
	);
});