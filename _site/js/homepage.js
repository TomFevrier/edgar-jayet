const colorScheme = {
	'mainColor': '#231f20',
	'secondaryColor': '#918f8f',
	'architectureColor': '#0000ff',
	'designColor': '#ff0000',
	'artColor': '#ffed00',
	'publicationsColor': '#231f20',
	'aboutColor': '#636366',
	'contactColor': '#e6e7e9'
}

window.onload = function() {

	var titleClicked = false;

	var title = document.getElementsByTagName('h1')[0];
	var menuItems = Array.from(document.getElementsByClassName('menu-item'));
	var circle = document.getElementById('circle');

	const makeMenuAppear = function() {
		menuItems.forEach(function(item) {
			item.style.opacity = 1;
		});
		circle.style.border = 'none';
		circle.style.backgroundColor = colorScheme.secondaryColor;
	}

	const makeMenuDisappear = function() {
		menuItems.forEach(function(item) {
			item.style.opacity = 0;
		});
		circle.style.border = '3px solid ' + colorScheme.mainColor;
		circle.style.backgroundColor = 'white';
	}

	title.onmouseover = makeMenuAppear;
	title.onmouseout = function() {
		if (!titleClicked) makeMenuDisappear();
	}
	title.onclick = function() {
		titleClicked = !titleClicked;
		titleClicked ? makeMenuAppear() : makeMenuDisappear();
	}



	menuItems.forEach(function(item) {
		item.onmouseover = function() {
			let color = item.className.replace('menu-item ', '') + 'Color';
			circle.style.backgroundColor = colorScheme[color];
		}
		item.onmouseout = function() {
			circle.style.backgroundColor = colorScheme.secondaryColor;
		}
	});
}
