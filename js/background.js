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