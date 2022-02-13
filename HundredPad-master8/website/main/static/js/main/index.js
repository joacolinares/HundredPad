$(document).ready(function(){
    new WOW().init();

    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        items: 1,
        autoplayTimeout: 2500,
        nav:true,
        dots: false,
        autoplayHoverPause: true,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        navText: ['<span class="fa fa-chevron-up"></span>','<span class="fa fa-chevron-down"></span>'],
        
        responsive: {
            0: {
              items: 1,
              autoplay:true,
              nav:false,
              dots:true,
              animateOut: 'slideOutLeft',
               animateIn: 'slideInRight',
            },
            600: {
              items: 1,
              autoplay:false,
               nav:false
            }
          }
      });

      $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
      });
      

});