//CODE TO USE ON YOUR WEBSITE - !!! YOU NEED IT

//DEMO CODE - !!!YOU DON'T NEED IT
var demoBtns = document.querySelectorAll('.demo-btn');
var nav = document.querySelector('.nav');
var pageContent = document.querySelector('.page__content');

//change demo on btn click
demoBtns.forEach(function(el, ind) {
  
  el.addEventListener('click', function() {
    
    //add active class to active btn
    demoBtns.forEach(function(el) {
      el.classList.remove('js-active');
    });
    
    this.classList.add('js-active');
    
    //add proper classes for effects
    var effClass = ind + 1;
    
    nav.classList.remove(nav.classList[1]);
    
    nav.classList.add('nav--offcanvas-' + effClass);
    
    pageContent.classList.remove(pageContent.classList[1]);
    
 pageContent.classList.add('content--offcanvas-' + effClass);
    
    
    
  });
  
});