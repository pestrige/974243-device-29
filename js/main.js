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

//service slider on jQuery
const $navLink = $('.services__nav-link');
const $deliveryContent = $('#delivery-content');
const $warrantyContent = $('#warranty-content');
const $creditContent = $('#credit-content');


$navLink.on('click', function (evt) {
	evt.preventDefault();
	$(this).parent().addClass('services__nav-item--active');
	$navLink.not(this).parent().removeClass('services__nav-item--active');
});

$('#delivery-link').on('click', function () {
	$deliveryContent.addClass('services__content-item--active');
	$warrantyContent.removeClass('services__content-item--active');
	$creditContent.removeClass('services__content-item--active');
});

$('#warranty-link').on('click', function () {
	$warrantyContent.addClass('services__content-item--active');
	$deliveryContent.removeClass('services__content-item--active');
	$creditContent.removeClass('services__content-item--active');
});

$('#credit-link').on('click', function () {
	$creditContent.addClass('services__content-item--active');
	$deliveryContent.removeClass('services__content-item--active');
	$warrantyContent.removeClass('services__content-item--active');
});

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