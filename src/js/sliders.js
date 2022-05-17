import Swiper, { Grid, Pagination } from "swiper";
// import 'swiper/css'

const sliders = document.querySelectorAll('.slider')

for (let i = 0; i < sliders.length; i++) {   

    // const slider = new Swiper(sliders[i], {
    //     modules: [ Grid, Pagination ],
    
    //     // slidesPerColumn: 2,
    //     // slidesPerColumnFill: 'row',
    //     // grid: {
    //     //     rows: 2,
    //     // },
    
    //     breakpoints: {
    //         990: {
    //             slidesPerView: 4,
    //             spaceBetween: 25,
    //         },
    //         720: {
    //             slidesPerView: 3,
    //             spaceBetween: 25,
    //         },
    //         680: {
    //             slidesPerView: 3,
    //             spaceBetween: 16,
    //         },
    //         470: {
    //             slidesPerView: 2,
    //             spaceBetween: 16,
    //         },
    //         425: {
    //             slidesPerView: 1.8,
    //             spaceBetween: 16,
    //         },
    //         350: {
    //             slidesPerView: 1.4,
    //             spaceBetween: 16,
    //         },
    //         320: {
    //             slidesPerView: 1,
    //             spaceBetween: 16,
    //         },
    //     },
    
    //     pagination: {
    //         el: sliders[i].closest('.s-body').querySelector('.pagination'),
    //         dynamicBullets: true,
    //         dynamicMainBullets: 3,
    //         clickable: true,
    //     },
    
    //     // navigation: {
    //     //     nextEl: ".swiper__arrow-next",
    //     //     prevEl: ".swiper__arrow-prev",
    //     // },
    
    //     // scrollbar: {
    //     //     el: ".swiper-scrollbar",
    //     // },
    // });
}

const servicesSlider = new Swiper('.services__slider', {
    modules: [ Grid, Pagination ],

    breakpoints: {
        990: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        680: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        470: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        425: {
            slidesPerView: 1.8,
            spaceBetween: 16,
        },
        350: {
            slidesPerView: 1.4,
            spaceBetween: 16,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
    },

    pagination: {
        el: '.services__slider-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 3,
        clickable: true,
    },
});


const portfolioSlider = new Swiper('.portfolio__slider', {
    modules: [ Grid, Pagination ],

    breakpoints: {
        990: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        680: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        470: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        425: {
            slidesPerView: 1.8,
            spaceBetween: 16,
        },
        350: {
            slidesPerView: 1.4,
            spaceBetween: 16,
        },
        320: {
            slidesPerView: 1.2,
            spaceBetween: 16,
        },
    },

    pagination: {
        el: '.portfolio__slider-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 3,
        clickable: true,
    },
});


const reviewsSlider = new Swiper('.reviews__slider', {
    modules: [ Grid, Pagination ],

    breakpoints: {
        990: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        680: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        450: {
            slidesPerView: 1.6,
            spaceBetween: 16,
        },
        390: {
            slidesPerView: 1.4,
            spaceBetween: 16,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
    },

    pagination: {
        el: '.reviews__slider-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 3,
        clickable: true,
    },
});