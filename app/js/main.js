var swiper = new Swiper('.configuration__swiper_solutions', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var accessorySwiper = new Swiper('.configuration__swiper_accessory', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var someSwiper = new Swiper('.configuration__swiper_addition', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var variantsSwiper = new Swiper('.collector__swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
})

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

const mobileMenuButton = document.querySelector('.navigation__mobile-menu');
const navigation = document.querySelector('.navigation__list');
mobileMenuButton.addEventListener("click", () => {
    mobileMenuButton.classList.toggle("_active");
    navigation.classList.toggle("_active");
})