function checkScroll() {
    let animatedBlocks = document.querySelectorAll('.animBlock');
  
    animatedBlocks.forEach(function(block) {
      let blockPosition = block.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.5;
  
      if (blockPosition < screenPosition) {
        block.classList.add('show');
      }
    });
  }
  
  window.addEventListener('scroll', checkScroll);
  