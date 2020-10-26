// submenu on Vanila JS 
// document.querySelector('.submenu-btn').onclick = function () {
//   this.classList.toggle('btn-rotate');
//   document.querySelector('.submenu').classList.toggle('submenu--hide');
// };

//submenu on jQuery
const $submenuLink = $('.submenu__link');
$('.submenu-interactive').on('click', function (e) {
	e.preventDefault();
	$('.submenu-btn').toggleClass('btn-rotate');
	if ($submenuLink.attr('tabindex')) {
		$submenuLink.removeAttr('tabindex');
	} else {
		$submenuLink.attr('tabindex', -1);
	}
  $('.submenu').toggleClass('submenu--hide');
});

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


$navLink.on('click', function (e) {
	e.preventDefault();
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

//popup form
const $modalForm = $('.modal-form');
const $modalMap = $('.modal-map');
const $popupForm = $('.popup-form');
const $popupMap = $('.popup-map');


// popup form show
$('.contacts__btn').on('click', function (e) {
	e.preventDefault();
	$modalForm.addClass('modal-form--show');
	$popupForm.addClass('popup--show');
});

// popup map show
$('.about__map-link').on('click', function (e) {
	e.preventDefault();
	$modalMap.addClass('modal-map--show');
	$popupMap.addClass('popup--show');
});

// popup hide
$('.modal__close').on('click', function () {
	$modalForm.removeClass('modal-form--show');
	$modalMap.removeClass('modal-map--show');
	$popupForm.removeClass('popup-form--show');
});

// popup hide from overlay click
$('.modal-overlay').on('click', function () {
	$modalForm.removeClass('modal-form--show');
	$modalMap.removeClass('modal-map--show');
});