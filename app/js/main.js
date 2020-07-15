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



const imgPopup = document.createElement('div'),
    commonSection = document.querySelector('.portfolio'),
    pointer = document.querySelector('.portfolio__inner-details'),
    bigImage = document.createElement('img'),
    scroll = calcScroll();

imgPopup.classList.add('popup');
commonSection.appendChild(imgPopup);

imgPopup.style.display = 'none';
imgPopup.style.justifyContent = 'center';
imgPopup.style.alignItems = 'center';

imgPopup.appendChild(bigImage);

pointer.addEventListener('click', (event) => {
    event.preventDefault();

    target = event.target;
    console.log(target);

    if (target && target.classList.contains('portfolio__preview')) {
        imgPopup.style.display = 'flex';
        const path = target.parentNode.getAttribute('href');
        bigImage.setAttribute('src', path);
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
    }

    if (target && target.matches('div .popup')) {
        imgPopup.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
    }
});

function calcScroll() {
    let div = document.createElement('div');

    div.style.width= '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}
