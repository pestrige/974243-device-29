// submenu on Vanila JS 
// document.querySelector('.submenu-btn').onclick = function () {
//   this.classList.toggle('btn-rotate');
//   document.querySelector('.submenu').classList.toggle('submenu--hide');
// };

//submenu on jQuery
$('.submenu-btn').on('click', function () {
  $(this).toggleClass('btn-rotate');
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
$('.services__nav-link').on('click', function (e) {
	e.preventDefault();
	$(this).parent().addClass('services__nav-item--active');
	$('.services__nav-link').not(this).parent().removeClass('services__nav-item--active');
});

$('#delivery-link').on('click', function () {
	$('#delivery-content').addClass('services__content-item--active');
	$('#warranty-content').removeClass('services__content-item--active');
	$('#credit-content').removeClass('services__content-item--active');
});

$('#warranty-link').on('click', function () {
	$('#warranty-content').addClass('services__content-item--active');
	$('#delivery-content').removeClass('services__content-item--active');
	$('#credit-content').removeClass('services__content-item--active');
});

$('#credit-link').on('click', function () {
	$('#credit-content').addClass('services__content-item--active');
	$('#delivery-content').removeClass('services__content-item--active');
	$('#warranty-content').removeClass('services__content-item--active');
});

// popup form show
$('.contacts__btn').on('click', function (e) {
	e.preventDefault();
  $('.modal-form').addClass('modal-form--show');
});

// popup map show
$('.about__map-link').on('click', function (e) {
	e.preventDefault();
  $('.modal-map').addClass('modal-map--show');
});

// popup hide
$('.modal__close').on('click', function () {
	$('.modal-form').removeClass('modal-form--show');
	$('.modal-map').removeClass('modal-map--show');
});