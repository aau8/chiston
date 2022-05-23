import Swiper, { Pagination, Navigation } from "swiper";
import { renderPagination, breakpointsSlider, swiperAfterInit } from "./sliders.js";

const servicesSlider = new Swiper('.services__slider', {
    modules: [ Pagination, Navigation ],

    breakpoints: breakpointsSlider,

    pagination: {
        el: '.services__slider-pagination',
        type: 'fraction',
    },

    navigation: {
        prevEl: '.services__slider-arrow_prev',
        nextEl: '.services__slider-arrow_next',
    },

    // pagination: {
    //     el: '.services__slider-pagination',
    //     clickable: true,
    //     dynamicBullets: true,
    //     dynamicMainBullets: 3,
    // },

    // on: {
    //     paginationUpdate: renderPagination,
    //     afterInit: swiperAfterInit
    // }
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