window.onload = function(){

TweenMax.staggerFrom("#dev_pics" ,1 , {opacity : 0 , x: 350, ease : Power2.easeOut},0.2);
TweenMax.from("#logo",0.2, { opacity: 0 , scale : 0.5}) ;
TweenMax.staggerFrom("h4", 1 ,{opacity:0 , delay: 1.2 } , 0.5);

}
