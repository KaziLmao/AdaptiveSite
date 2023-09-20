var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.5,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // 640: {
    //   slidesPerView: 1,
    //   spaceBetween: 10,
    // },
    // 768: {
    //   slidesPerView: 2,
    //   spaceBetween: 10,
    // },
    // 1200: {
    //   slidesPerView: 2,
    //   spaceBetween: 50,
    // },
  },
});