var wrapperMenu = document.querySelector('.wrapper-menu');
var elSiteHeader =document.querySelector('.site_header');


wrapperMenu.addEventListener('click', function(){
  elSiteHeader.classList.toggle('open');  
})