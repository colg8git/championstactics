const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },

    effect: 'cards',
    cardsEffect: {
      slideShadows: true
    },
});