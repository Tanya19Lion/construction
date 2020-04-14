$(function(){
    
    $(".header__menu-icon").on("click", function(){
        $(".header__menu-mobile").toggleClass("active");
        $(".header__menu-content").slideToggle();
    })

    $(".header__main-inner").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    });

    $(".portfolio__inner").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slider-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slider-btn slick-next"></button>',
        responsive: [
            {
              breakpoint: 924,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
               }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    $('.services__inner .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.services__inner').find('.tab-item').removeClass('active-tab').hide();
            $('.services__inner .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
    });

    $(".clients__inner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        variableWidth: true,
        speed: 100,
        responsive: [
            {
              breakpoint: 840,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    new WOW().init();

});

