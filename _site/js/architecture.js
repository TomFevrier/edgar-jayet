window.onload = function() {

	var hubMenu = document.getElementsByClassName('menu-item hub')[0];
	var hub = document.createElement('img');
	hub.setAttribute('src', '/media/hub-bleu.svg');
	hub.setAttribute('id', 'hub');
	hub.setAttribute('class', 'svg')
	hub.style.opacity = 0;
	document.getElementById('circle').appendChild(hub);

	hubMenu.onmouseover = function() {
		hub.style.opacity = 1;
	}
	hubMenu.onmouseout = function() {
		hub.style.opacity = 0;
	}
}
