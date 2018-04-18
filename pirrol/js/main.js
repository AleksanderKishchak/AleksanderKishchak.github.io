$(document).ready(function(){
  $(".slider").owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: true,
  	autoplayTimeout: 3000
  });
  
  $(".btn-nav").on("click", function() {
    $("#nav__list").slideToggle(700);
  });

//-----------------------------SPINCREMENT--------------------------------------
  var show = true;
  $(window).on("scroll load", function() {

    var w_top = $(window).scrollTop(),
        w_height = $(window).height(),
        done__lists = $(".done__lists");
        e_top = $(done__lists).offset().top, // element distance to top
        e_height = $(done__lists).outerHeight(),// element height
        gap = 500;


    if ($(window).height() < 400) gap = 200;
    if (!show) return false;

    if (w_top + gap >= e_top || e_top + e_height <= w_height) {
      $(".spincrement").spincrement({
        thousandSeparator: " ",
        duration: 3000,
        leeway: 50
      });

      show = false;
    }
  })
//-------------------------------------------------------------------------



});

window.onload = function() {

  var video = document.getElementById("work-process__video");
  var btn = document.getElementById("play-icon");


// ---------------------------FOR MOBILE--------------------------
  video.onclick = function() {
    over();
    setTimeout(function() {
      out();
    }, 1500);
  }
//----------------------------------------------------------
  btn.onclick = function() {
    if(video.paused) {
      video.play();
      btn.style.opacity = "0";
    } else {
      video.pause();
      btn.style.opacity = "1";    
    }
  }

  btn.onmouseover = over;
  btn.onmouseout = out;

  function over() {
    if(!video.paused) {
      btn.style.opacity = "1";
    }
  }
  function out() {
    if(!video.paused) {
      btn.style.opacity = "0";
    }
  }

}