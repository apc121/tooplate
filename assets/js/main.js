var swiper = new Swiper(".homeCarousel", {
    direction: "vertical",
    slidesPerView: 1,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: true,

});
var swiper = new Swiper(".feaback__carousel", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

