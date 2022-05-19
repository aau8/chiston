import { removeAllClasses, removeClass } from "./utils/functions.js";
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
        // dynamicBullets: true,
        // dynamicMainBullets: 3,
        clickable: true,
        
    },

    on: {
        paginationUpdate: renderPagination
    }
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
        clickable: true,
    },

    on: {
        paginationUpdate: renderPagination
    }
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
        clickable: true,
    },

    on: {
        paginationUpdate: renderPagination
    }
});

// Добавление активных классов точкам пагинации
function renderPagination(swiper, pagination) {
    const bulletElems = pagination.querySelectorAll('.swiper-pagination-bullet')
    const bulletActive = pagination.querySelector('.swiper-pagination-bullet-active')

    removeAllClasses(bulletElems, ['swiper-pagination-bullet-prev', 'swiper-pagination-bullet-prev-prev', 'swiper-pagination-bullet-next', 'swiper-pagination-bullet-next-next'])

    if (bulletActive.previousElementSibling) {
        bulletActive.previousElementSibling.classList.add('swiper-pagination-bullet-prev')
        
        if (bulletActive.previousElementSibling.previousElementSibling) {
            bulletActive.previousElementSibling.previousElementSibling.classList.add('swiper-pagination-bullet-prev-prev')
        }
    }

    if (bulletActive.nextElementSibling) {
        bulletActive.nextElementSibling.classList.add('swiper-pagination-bullet-next')

        if (bulletActive.nextElementSibling.nextElementSibling) {
            bulletActive.nextElementSibling.nextElementSibling.classList.add('swiper-pagination-bullet-next-next')
        }
    }
}