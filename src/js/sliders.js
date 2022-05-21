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
    // 720: {
    //     slidesPerView: 3,
    //     slidesPerGroup: 3,
    //     spaceBetween: 25,
    // },
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
    // 350: {
    //     slidesPerView: 1.4,
    //     spaceBetween: 16,
    // },
    0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,
    },
}

let portfolioSliderPaginBlockWidth
const portfolioSlider = new Swiper('.portfolio__slider', {
    modules: [ Grid, Pagination ],
    
    breakpoints: breakpointsSlider,

    pagination: {
        el: '.portfolio__slider-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
    },

    on: {
        paginationUpdate: renderPagination
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
        paginationUpdate: renderPagination
    }
});

// Добавление активных классов точкам пагинации
export function renderPagination(swiper, pagination) {
    const paginBlock = pagination.closest('.pagination-block')
    const bulletElems = pagination.querySelectorAll('.swiper-pagination-bullet')
    let bulletActiveIndex

    console.log(paginBlock.dataset.width)
    if (paginBlock.dataset.width == undefined) {
        paginBlock.dataset.width = paginBlock.clientWidth
    }

    Array.from(bulletElems).filter((e, i, a) => {
        if (e.classList.contains('swiper-pagination-bullet-active')) {
            bulletActiveIndex = i
        }
        return a
    })
    // console.log(swiper)
    // console.log(bulletActiveIndex)

    // bulletActiveIndex >= 3

    if (bulletElems.length >= 4) {
        if (bulletActiveIndex >= 3) {
            pagination.style.transform = 'translateX(0)'
            paginBlock.style.width = 'auto'
        }
        if (bulletActiveIndex === bulletElems.length - 1) {
            
            if (bulletElems.length === 4) {
                paginBlock.style.width = paginBlock.dataset.width - 3 + 'px'
            }
            else {
                paginBlock.style.width = paginBlock.dataset.width - 20 + 'px'
            }
        }
        if (bulletActiveIndex < 3) {
            
            if (bulletElems.length === 4) {
                pagination.style.transform = 'translateX(-10px)'
                paginBlock.style.width = parseInt(paginBlock.dataset.width) - 3 + 'px'
            }
            else {
                pagination.style.transform = 'translateX(-20px)'
                paginBlock.style.width = parseInt(paginBlock.dataset.width) - 20 + 'px'
            }
        }
    }
    else {
        // pagination.style.transform = 'translateX(-20px)'
    }

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