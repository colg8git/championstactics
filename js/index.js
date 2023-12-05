document.addEventListener("DOMContentLoaded", function() {
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

  const shapes = document.querySelectorAll('.swiper-block');
  const slideColors = [
    'rgba(124,182,35,0.5)',
    'rgba(41,31,78,0.7)',
    'rgba(204,61,20,0.5)',
    'rgba(157,116,64,0.5)',
    'rgba(63,71,63,0.5)',
    'rgba(82,52,67,0.5)',
    'rgba(76,111,63,0.5)'
  ];

  swiper.on('slideChange', function () {
    const activeSlideIndex = swiper.activeIndex; // Отримуємо індекс активного слайда
    const currentColor = slideColors[activeSlideIndex]; // Отримуємо колір для поточного слайда

    shapes.forEach(shape => {
      shape.style.backgroundColor = currentColor; // Застосовуємо колір для всіх блоків поточного слайда
      shape.style.boxShadow = `0 0 100px 200px ${currentColor}`;
    });
  });
});