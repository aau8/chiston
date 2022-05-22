import { removeAllClasses, removeClass } from "./utils/functions.js";
import Swiper, { Grid, Pagination } from "swiper";

export const breakpointsSlider = {
    1050: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 25,
    },
    990: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 25,
    },
    680: {
        slidesPerView: 2.6,
        slidesPerGroup: 3,
        spaceBetween: 16,
    },
    530: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 16,
    },
    470: {
        slidesPerView: 1.8,
        spaceBetween: 16,
    },
    450: {
        slidesPerView: 1.5,
        spaceBetween: 16,
    },
    0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,
    },
}

// document.addEventListener('load') {

// }
const portfolioSlider = new Swiper('.portfolio__slider', {
    modules: [ Grid, Pagination ],
    
    centeredSlides: false,

    breakpoints: {
        1050: {
            slidesPerGroup: 4,
            slidesPerView: 4,
            spaceBetween: 25,
        },
        990: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 25,
        },
        680: {
            slidesPerView: 2.6,
            slidesPerGroup: 3,
            spaceBetween: 16,
        },
        530: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 16,
        },
        470: {
            slidesPerView: 1.8,
            spaceBetween: 16,
        },
        450: {
            slidesPerView: 1.5,
            spaceBetween: 16,
        },
        0: {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
            spaceBetween: 16,
            centeredSlides: true,
        },
    },

    pagination: {
        el: '.portfolio__slider-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
    },

    on: {
        paginationUpdate: renderPagination,
        afterInit: swiperAfterInit,
    }
});

// let reviewsSliderPaginBlockWidth
const reviewsSlider = new Swiper('.reviews__slider', {
    modules: [ Grid, Pagination ],

    breakpoints: breakpointsSlider,

    pagination: {
        el: '.reviews__slider-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
    },

    on: {
        paginationUpdate: renderPagination,
        afterInit: swiperAfterInit,
    }
});

export function swiperAfterInit(swiper) {
    const paginBlock = swiper.$el[0].closest('.s-body').querySelector('.pagination-block')

    setTimeout(e => {
        paginBlock.dataset.width = paginBlock.clientWidth
    }, 300)
}

// Добавление активных классов точкам пагинации
export function renderPagination(swiper, pagination) {
    const paginBlock = pagination.closest('.pagination-block')
    const bulletElems = pagination.querySelectorAll('.swiper-pagination-bullet')
    let bulletActiveIndex

    Array.from(bulletElems).filter((e, i, a) => {
        if (e.classList.contains('swiper-pagination-bullet-active')) {
            bulletActiveIndex = i
        }
        return a
    })
    
    const checkDataWidth = setInterval(() => {
        
        if (paginBlock.dataset.width != undefined) {
            clearInterval(checkDataWidth)

            if (bulletElems.length > 4) {
                const paginBlockWidth = parseInt(paginBlock.dataset.width)

                if (bulletActiveIndex >= 3) {
                    pagination.style.transform = 'translateX(0)'
                    paginBlock.style.width = paginBlockWidth + 'px'
                }
                if (bulletActiveIndex === bulletElems.length - 1) {
                    
                    if (bulletElems.length === 4) {
                        paginBlock.style.width = paginBlockWidth - 3 + 'px'
                    }
                    // else if (bulletElems.length === 5) {
                        // paginBlock.style.width = paginBlockWidth - 30 + 'px'
                    // }
                    else {
                        paginBlock.style.width = paginBlockWidth - 20 + 'px'
                    }
                }
                if (bulletActiveIndex < 3) {
                    
                    if (bulletElems.length === 4) {
                        pagination.style.transform = 'translateX(-10px)'
                        paginBlock.style.width = paginBlockWidth - 3 + 'px'
                    }
                    // else if (bulletElems.length === 5) {
                    //     pagination.style.transform = 'translateX(-5px)'
                    //     paginBlock.style.width = paginBlockWidth - 30 + 'px'
                    // }
                    else {
                        pagination.style.transform = 'translateX(-20px)'
                        paginBlock.style.width = paginBlockWidth - 20 + 'px'
                    }
                }
            }
            else {
                pagination.style.width = 'auto'
            }
        }
    }, 10);


    // const bulletElems = pagination.querySelectorAll('.swiper-pagination-bullet')
    // const bulletActive = pagination.querySelector('.swiper-pagination-bullet-active')

    // removeAllClasses(bulletElems, ['swiper-pagination-bullet-prev', 'swiper-pagination-bullet-prev-prev', 'swiper-pagination-bullet-next', 'swiper-pagination-bullet-next-next', 'swiper-pagination-bullet-next-next-next'])

    // if (bulletActive.previousElementSibling) {
    //     bulletActive.previousElementSibling.classList.add('swiper-pagination-bullet-prev')
        
    //     if (bulletActive.previousElementSibling.previousElementSibling) {
    //         bulletActive.previousElementSibling.previousElementSibling.classList.add('swiper-pagination-bullet-prev-prev')
    //     }
    // }

    // if (bulletActive.nextElementSibling) {
    //     bulletActive.nextElementSibling.classList.add('swiper-pagination-bullet-next')

    //     if (bulletActive.nextElementSibling.nextElementSibling) {
    //         bulletActive.nextElementSibling.nextElementSibling.classList.add('swiper-pagination-bullet-next-next')

    //         if (bulletActive.nextElementSibling.nextElementSibling.nextElementSibling) {
    //             bulletActive.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('swiper-pagination-bullet-next-next-next')
    //         }
    //     }
    // }
}