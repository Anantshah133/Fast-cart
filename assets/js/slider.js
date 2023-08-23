$('.banner-slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    responsive: [{
            breakpoint: 1387,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 966,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 734,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                fade: true,
            }
        },
    ]
});


$('.product-box-slider').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1680,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 660,
            settings: {
                slidesToShow: 2,
            }
        },
    ]
});



$('.category-slider').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1745,
            settings: {
                slidesToShow: 6,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2500,
            }
        },
        {
            breakpoint: 1540,
            settings: {
                slidesToShow: 5,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2500,
            }
        },
        {
            breakpoint: 910,
            settings: {
                slidesToShow: 4,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2500,
            }
        },
        {
            breakpoint: 730,
            settings: {
                slidesToShow: 3,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2500,
            }
        },
        {
            breakpoint: 410,
            settings: {
                slidesToShow: 2,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2500,
            }
        },
    ]
});

$('.product-box-slider-2').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1680,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 660,
            settings: {
                slidesToShow: 2,
            }
        },
    ]
});

$('.best-selling-slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1495,
            settings: {
                slidesToShow: 2,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2500,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 666,
            settings: {
                slidesToShow: 1,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2500,
            }
        },
    ]
});


$('.slider-3-blog').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [
        {
            breakpoint: 1550,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 940,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                fade: true,
            }
        },
    ]
});