/* Nav Icon */
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row')
const navList = document.querySelector('.nav__list')


navBtn.onclick = function () {
    mobileNav();
}

navList.onclick = function () {
	mobileNav();
}

function mobileNav () {
	nav.classList.toggle('header__top-row--mobile');
	navIcon.classList.toggle('nav-icon--active');
	document.body.classList.toggle('no-scroll');
}

/* Phone Mask */
mask('[data-tel-input]');

/* For placeholder */ 
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input) => {
	input.addEventListener('input', () => {
		if (input.value == '+') input.value = '';
	})
	input.addEventListener('blur', () => {
		if (input.value == '+') input.value = '';
	})
});

/* Yandex Map */
ymaps.ready(init);
function init(){
	var map = new ymaps.Map('map', {
		center: [59.943543, 30.338928],
        // Zoom level. Valid values ​​are 0 (worldwide) to 19.
		zoom: 16,
	});

    var myPlacemark = new ymaps.Placemark(
		[59.943543, 30.338928],
		{
			balloonContent: `
				<div class="balloon">
					<div class="balloon__address">Наб. реки Фонтанки 10-15</div>
					<div class="balloon__contacts">
						<a href="tel:+78121234567">+8 (812) 123-45-67</a>
					</div>
				</div>
			`,
		},
		{
			iconLayout: 'default#image',
			iconImageHref: './img/map/location-pin.svg',
			iconImageSize: [40, 40],
			iconImageOffset: [-20, -40],
		}
	);

    map.controls.remove('geolocationControl');
	map.controls.remove('searchControl'); 
	map.controls.remove('trafficControl'); 
	map.controls.remove('typeSelector'); 
    map.controls.remove('rulerControl'); 
    map.behaviors.disable(['scrollZoom']); 

    map.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();

}