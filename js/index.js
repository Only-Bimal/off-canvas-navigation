//CODE TO USE ON YOUR WEBSITE - !!! YOU NEED IT

//hide nav open btn when the nav is open, adding/removing open classes to nav and content
var navOpenBtn = document.querySelector('.nav-open-btn');
var navCloseBtn = document.querySelector('.nav__close');
var nav = document.querySelector('.nav');
var pageContent = document.querySelector('.page__content');

navOpenBtn.addEventListener('click', function() {
  navOpenBtn.classList.add('js-hidden');
  
  nav.classList.add('js-open');
  
  pageContent.classList.add('js-open');
});

navCloseBtn.addEventListener('click', function() {
  navOpenBtn.classList.remove('js-hidden');
  
  nav.classList.remove('js-open');
  
  pageContent.classList.remove('js-open');
});

//DEMO CODE - !!!YOU DON'T NEED IT
var demoBtns = document.querySelectorAll('.demo-btn');

//adding default demo classes
nav.classList.add('nav--offcanvas-1');
pageContent.classList.add('content--offcanvas-1');

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
    
    nav.classList.remove('js-open');
  
    pageContent.classList.remove('js-open');
    
    navOpenBtn.classList.remove('js-hidden');
    
    nav.classList.remove(nav.classList[1]);
    
    nav.classList.add('nav--offcanvas-' + effClass);
    
    pageContent.classList.remove(pageContent.classList[1]);
    
 pageContent.classList.add('content--offcanvas-' + effClass);
    
    
    
  });
  
});