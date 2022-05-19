import Swiper, { Grid, Pagination } from "swiper";
import { renderPagination } from "./sliders.js";

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
        clickable: true,        
    },

    on: {
        paginationUpdate: renderPagination
    }
});

const filter = document.querySelector('.services__filter')
const selectFilterElems = filter.querySelectorAll('.services__select')

for (let i = 0; i < selectFilterElems.length; i++) {
    const selectFilter = selectFilterElems[i];
    
    selectFilter.addEventListener('change', e => {
        const itemSelected = selectFilter.querySelector('.select-dropdown__item._selected')
        const itemData = itemSelected.dataset.cat

        console.log(itemData)

        servicesSlider.updateSlides() // подробнее о методах обновления слайдера - https://swiperjs.com/swiper-api#method-swiper-updateSlides
    })
}