this.posts = {}

document.addEventListener('mousemove', function(e) {
	const x = e.pageX / (window.innerWidth * 10), y = e.pageY / (window.innerHeight * 10);
	const bg = document.querySelector('.logo');
	bg.style.backgroundPosition = `${20 * x - 10}vh ${20 * y - 3}vh`;
});

$(function(){
	$("#head-text").typed({
		strings: [" "," ","Developer.", "Creative.", "Fundamentally lazy.", "Hi, I'm Hriddhi."],
		typeSpeed: 10,
		backDelay: 1000,
		loop: false,
		contentType: 'text',
		loopCount: false
	});
});

function loadArticle(post) {
	var text = this.posts[post],
	converter = new showdown.Converter(),
	html = converter.makeHtml(text),
	articleWindow = window.open("./article.html", "_blank");

	console.log(text);

	articleWindow.document.querySelector('body').innerHTML = html;
}