//DEMO CODE - !!!YOU DON'T NEED IT

//show nav open button onclick on demo button

var demoBtns = document.querySelectorAll('.demo-btn');
var navOpen = document.querySelector('.nav-open-btn');

demoBtns.forEach(function(el) {
  
  el.addEventListener('click', function() {
    
    navOpen.classList.remove('js-hidden');
  });
  
});