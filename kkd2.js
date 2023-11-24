alert("Welcome to KKD Tutorials!");
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
      createClickEffect(e.clientX, e.clientY);
    });
  });
  function createClickEffect(x, y) {
    var clickEffect = document.getElementById('click-effect');
    clickEffect.style.left = x - 10 + 'px';
    clickEffect.style.top = y - 10 + 'px'; 
    clickEffect.style.transform = 'scale(1)';
    setTimeout(function() {
      clickEffect.style.transform = 'scale(0)';
    }, 200);
  }
  window.onscroll = function() {
    var header = document.getElementById('sticky-header');
    if (window.scrollY > 50 ){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
  }