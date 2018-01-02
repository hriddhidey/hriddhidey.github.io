AOS.init()

document.addEventListener('mousemove', function(e) {
	const x = e.pageX / (window.innerWidth * 10), y = e.pageY / (window.innerHeight * 10);
	const bg = document.querySelector('.logo');
	bg.style.backgroundPosition = `${20 * x - 10}vh ${20 * y - 3}vh`;
});

navigator.serviceWorker && navigator.serviceWorker.register('/js/sw.js')
.then(function(registration) {
	console.log('Excellent, registered with scope: ', registration.scope);
});

$(function(){
	$("#head-text").typed({
		strings: [" "," ","Developer.", "Creative.", "Sleepy.", "Hi, I'm Hriddhi."],
		typeSpeed: 10,
		backDelay: 1000,
		loop: false,
		contentType: 'text',
		loopCount: false
	});
});