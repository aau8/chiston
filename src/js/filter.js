import Swiper, { Grid, Pagination } from "swiper";
import { renderPagination, breakpointsSlider } from "./sliders.js";

const servicesSlider = new Swiper('.services__slider', {
    modules: [ Grid, Pagination ],

    breakpoints: breakpointsSlider,

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