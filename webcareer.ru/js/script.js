$(document).ready(function(){
  $(".slider").owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: true,
  	autoplayTimeout: 3000
  });

  $(".btn-nav").on("click", function() {
    $(".nav__list").slideToggle(1000);
  })
});