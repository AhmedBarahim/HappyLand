(function($) {
  "use strict";
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });



  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop();

    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
    });
  });



})(jQuery);

// -------------------- //
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if(window.outerWidth > 992) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
      document.getElementById("header").style.height = "80px";
      document.getElementById("logo").style.height = "80px";
      document.getElementById("nav").style.padding = "4px 0px";

    } else {
      document.getElementById("header").style.height = "110px";
      document.getElementById("logo").style.height = "110px";
      document.getElementById("nav").style.padding = "10px 0px";

    }
  }
}
window.onresize = function() {scrollFunction()};
