//main-slider slick slider plugin
$(document).ready(function(){
	$('.slider__list').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		initialSlide:2,
		autoplay:false,
		speed:1000
	});
});

//service slider
const itemLinks = document.querySelectorAll('.services__nav-item'),
    contentItems = document.querySelectorAll('.services__content-item');

let catchActiveLink = function(activeItem, indexItem) {
    activeItem.onclick = function(evt) {
        evt.preventDefault();
        for (let i = 0; i < itemLinks.length; i++) {
            itemLinks[i].classList.remove('services__nav-item--active');
            contentItems[i].classList.remove('services__content-item--active');
        }
        activeItem.classList.add('services__nav-item--active');
        contentItems[indexItem].classList.add('services__content-item--active');
    }
}

for (i = 0; i < itemLinks.length; i++) {
    catchActiveLink(itemLinks[i], i);
}

//popup
const overlay = document.querySelector('.modal-overlay'),
			popupForm = document.querySelector('.popup-form'),
			loginInput = popupForm.querySelector('.popup-form__name-field'),
			closeFormBtn = popupForm.querySelector('.modal__close'),
			popupMap = document.querySelector('.popup-map'),
			closeMapBtn = popupMap.querySelector('.modal__close'),
			contactsBtn = document.querySelector('.contacts__btn'),
			mapBtn = document.querySelector('.about__map-link');

// popup form
contactsBtn.onclick = function (evt) {
	evt.preventDefault();
	overlay.classList.add('modal-overlay--show');
	popupForm.classList.add('popup--show');
	loginInput.focus();
};

closeFormBtn.onclick = function () {
	overlay.classList.remove('modal-overlay--show');
	popupForm.classList.remove('popup--show');
};

// popup map
mapBtn.onclick = function (evt) {
	evt.preventDefault();
	overlay.classList.add('modal-overlay--show');
	popupMap.classList.add('popup--show');
	closeMapBtn.focus();
};

closeMapBtn.onclick = function () {
	overlay.classList.remove('modal-overlay--show');
	popupMap.classList.remove('popup--show');
};

// popup hide from overlay click
overlay.onclick = function () {
	overlay.classList.remove('modal-overlay--show');
	popupForm.classList.remove('popup--show');
	popupMap.classList.remove('popup--show');
};