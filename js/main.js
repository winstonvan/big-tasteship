(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        // $('.proloader').delay(500).fadeOut(500)
    });

    $(document).ready(function () {

        //===== Back to top

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        $('.reffer_box').on('click',function(event){
            event.preventDefault();
            $(this).children(".reffer_select_icon").toggleClass("d-block");
        });

        $('.active_slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            nextArrow:'<button type="button" class="slick-next"><img src="img/arrow_right.png" alt="#"></button>',
            autoplaySpeed: 3000,
            dots: true,
            arrows: true,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: '0',
            responsive: [
            {
              breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            },
            {
            breakpoint: 472,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            }
          ]
              
        });


    });

})(jQuery);