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
    arrows: true,
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
  $('.feedback-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<button class="button-prev"></button>',
    nextArrow: '<button class="button-next"></button>',
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
  });
  $('.main-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    centerPadding: '0'
  });


	$(".header-contacts__button").on('click', function(e) {
	  $(".overlay").show();
	});
	$(".popup-close").on('click', function(e) {
	    $(".overlay").hide();
	});
    $(document).on('scroll', function() {
        var w_top = $(window).scrollTop();
        if (w_top >= 3) {
            $('.nav-main').css('opacity', '0.8');
        } else {
            $('.nav-main').css('opacity', '1');
        }
    });
    $("#nav-main").on("click","a", function (event) {
        event.preventDefault();
        var offset = 44;
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top - offset
        }, 500);
    });
});