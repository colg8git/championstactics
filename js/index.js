document.addEventListener("DOMContentLoaded", function() {
  const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      autoplay: {
        delay: 4300,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },

      effect: 'cards',
      cardsEffect: {
        slideShadows: true
      },

      navigation: {
        nextEl: '.swiper-button-2',
        prevEl: '.swiper-button-1',
      },
  });

  const shapes = document.querySelectorAll('.swiper-block');
  const slideColors = [
    'rgba(124,182,35,0.8)',
    'rgba(41,31,78,0.8)',
    'rgba(204,61,20,0.8)',
    'rgba(157,116,64,0.8)',
    'rgba(63,71,63,0.8)',
    'rgba(82,52,67,0.8)',
    'rgba(76,111,63,0.8)'
  ];

  swiper.on('slideChange', function () {
    const activeSlideIndex = swiper.activeIndex;
    const currentColor = slideColors[activeSlideIndex];

    shapes.forEach(shape => {
      shape.style.backgroundColor = currentColor;
      shape.style.boxShadow = `0 0 clamp(12.5rem, 10.714rem + 8.929vw, 18.75rem) clamp(12.5rem, 10.714rem + 8.929vw, 18.75rem) ${currentColor}`;
    });
  });

  const sliderContainer = document.querySelector('.swiper');

  sliderContainer.addEventListener('touchstart', function (e) {
    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
    }
  });

  document.body.addEventListener('touchend', function (e) {
    if (!swiper.autoplay.running && !sliderContainer.contains(e.target)) {
      swiper.autoplay.start();
    }
  });
});
