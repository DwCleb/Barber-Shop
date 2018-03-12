$(document).ready(function(){
    //Esconde preloader
     $(window).load(function(){
       
       $('#preloader').fadeOut(2000);//2000 é a duração do efeito (2.0 seg)
       
       setTimeout(function(){
         $('.container').show();
         }, 100);
});
});