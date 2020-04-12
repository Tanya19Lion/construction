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
        arrows: false,
        dots: true

    });

});

