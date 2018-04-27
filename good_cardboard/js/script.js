$(document).ready(function() {

	//initialization WOW.js
	new WOW().init();

	//initialization Slick-slider
	$('.production-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerPadding: '0',
    asNavFor: '.production-slider-thumb'
  });
  $('.production-slider-thumb').slick({
    infinite: true,
    slidesToShow: 4,
    asNavFor: '.production-slider',
    focusOnSelect: true,
    arrows: true
  });
  $('.feedback-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<button class="button-prev"></button>',
    nextArrow: '<button class="button-next"></button>'
  });
  $('.main-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: '0'
  })


	$(".header-contacts__button").on('click', function(e) {
	  $(".overlay").show(1000);
	});
	$(".popup-close").on('click', function(e) {
	    $(".overlay").hide(1000);
	});
});