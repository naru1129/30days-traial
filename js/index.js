var swiper = new Swiper('.swiper-container', {
    width: 1116,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      loopedSlides: 6,
    },
    slidesPerView: 2.5,
    spaceBetween: 40,
    initialSlide: 0,
    loop: true,
  });