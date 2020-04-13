$(function(){
    
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
        nextArrow: '<button type="button" class="slider-btn slick-next"></button>'
    });

    $('.services__inner .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.services__inner').find('.tab-item').removeClass('active-tab').hide();
            $('.services__inner .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });
});

