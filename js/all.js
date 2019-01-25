$(document).ready(function() {
   $('.box1').click(function(event){
    event.preventDefault();   
    $('.box1').addClass('shake').delay(1000).hide(800);
    $('.box2').delay(1000).fadeIn(8000);
   });

   $('.top a').click(function(event){
    event.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    },3000);
   });

  });