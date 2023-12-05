// let i = 0;
// const img = ['source/img/background/ethereum.png', 'source/img/background/ubisoft.png', 'source/img/background/oasys.svg'];
// const bg = document.querySelector('.background-container');

// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

// for (i = 0 ; i < 100; i++) {
//     var randomNumber = getRandomInteger(1, 3);
//     console.log(randomNumber);
// }

// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
// ----------------------------------GIMNO----------------------------------------- //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
// створення зірки
// function createStar(x, y, size) {
//     var star = $("<div>");
//     star.css({
//       "position": "absolute",
//       "left": x + "px",
//       "top": y + "px",
//       "width": size + "px",
//       "height": size + "px",
//       "border-radius": "50%",
//       "background-color": "white",
//       "box-shadow": "0 0 10px 1px white"
//     });
//     return star;
//   }
  
//   // отримання випадкового числа в діапазоні від min до max
//   function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   // розміщення зірок на фоні
//   function placeStars(numStars, container) {
//     var containerWidth = $(container).width();
//     var containerHeight = $(container).height();
    
//     for (var i = 0; i < numStars; i++) {
//       var x = random(0, containerWidth);
//       var y = random(0, containerHeight);
//       var size = random(1, 4);
//       var star = createStar(x, y, size);
//       $(container).append(star);
//     }
//   }
  
//   // виклик функції розміщення зірок
//   placeStars(50, "body");

document.addEventListener("DOMContentLoaded", function() {
    const colors = [
      'rgba(255, 0, 0, 0.5)',
      'rgba(0, 255, 0, 0.5)',
      'rgba(0, 0, 255, 0.5)',
      'rgba(255, 255, 0, 0.5)',
      'rgba(255, 0, 255, 0.5)',
      'rgba(0, 255, 255, 0.5)',
      'rgba(128, 128, 128, 0.5)'
    ];
  
    const container = document.querySelector('.container');
  
    // Функція для створення випадкової фігури
    function createShape() {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        shape.style.width = getRandomSize();
        shape.style.height = getRandomSize();
        shape.style.backgroundColor = getRandomColor();
        // Рандомне розташування квадратів
        shape.style.top = getRandomPosition() + 'px';
        shape.style.left = getRandomPosition() + 'px';
        container.appendChild(shape);
      }
  
    // Функція для отримання випадкового розміру
    function getRandomSize() {
      return Math.floor(Math.random() * 200) + 50 + 'px';
    }
  
    // Функція для отримання випадкового кольору
    function getRandomColor() {
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function getRandomPosition() {
        return Math.floor(Math.random() * 500); // 500 - максимальна ширина/висота контейнера
      }
  
    // Створення 15 випадкових фігур
    for (let i = 0; i < 10; i++) {
      createShape();
    }
  });