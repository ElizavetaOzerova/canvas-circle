'use strict';

(function() {

	var canvas = document.querySelector('.canvas');
	var context = canvas.getContext('2d');

	canvas.onmousemove = function(e) {
		context.beginPath();
		context.strokeStyle = '#D03425';
		context.arc(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top, 70, 0, 2 * Math.PI);
		context.stroke();
	};

	canvas.addEventListener('click', function(event) {
		event.preventDefault();
		context.clearRect(0, 0, canvas.width, canvas.height);
	});

})();
