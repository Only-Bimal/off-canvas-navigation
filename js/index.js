//CODE TO USE ON YOUR WEBSITE - !!! YOU NEED IT

//DEMO CODE - !!!YOU DON'T NEED IT
var demoBtns = document.querySelectorAll('.demo-btn');

//change demo on btn click
demoBtns.forEach(function(el) {
  
  el.addEventListener('click', function() {
    
    //add active class to active btn
    demoBtns.forEach(function(el) {
      el.classList.remove('js-active');
    });
    
    this.classList.add('js-active');
    
  });
  
});