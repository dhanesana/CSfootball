$(document).ready(function() {
  //everything fades in
  $('body').hide().fadeIn(2000);
  //preclick mouseover effect for divs
  function preClick () {
    $("div").mouseenter(function(){
      $(this).css({"opacity": "0.5"});
      $(this).effect('bounce', {times:2}, 200);
    });
      $("div").mouseleave(function(){
      $(this).css({"opacity": "1"});
    });
  }; 
  $('div').one('click', function() {
    //header expand
    $('#header').animate({top:"5%"}
      ,{ duration: 500, queue: false });
    $('#header').animate({width:"50%"}
      ,{ duration: 500, queue: false });
    $('#header').animate({right:"25%"}
      ,{ duration: 500, queue: false });
    //lettuce expand
    $('#lettuce').animate({top:"20%"}
      ,{ duration: 500, queue: false });
    $('#lettuce').animate({width:"50%"}
      ,{ duration: 500, queue: false });
    $('#lettuce').animate({right:"25%"}
      ,{ duration: 500, queue: false });
    //tomato expand
    $('#tomato').animate({top:"27%"}
      ,{ duration: 500, queue: false });
    $('#tomato').animate({width:"50%"}
      ,{ duration: 500, queue: false });
    $('#tomato').animate({right:"25%"}
      ,{ duration: 500, queue: false });
    //logo expand
    $('#logo').animate({top:"35%"}
      ,{ duration: 500, queue: false });
    $('#logo').animate({width:"50%"}
      ,{ duration: 500, queue: false });
    $('#logo').animate({right:"25%"}
      ,{ duration: 500, queue: false });
    //cheese expand
    $('#cheese').animate({bottom:"25%"}
      ,{ duration: 500, queue: false });
    $('#cheese').animate({width:"50%"}
      ,{ duration: 500, queue: false });
    $('#cheese').animate({right:"25%"}
      ,{ duration: 500, queue: false });
    //footer expand
    $('#footer').animate({bottom:"5%"}
      ,{ duration: 500, queue: false });
    $('#footer').animate({width:"50%"}
      ,{ duration: 500, queue: false });
    $('#footer').animate({right:"25%"}
      ,{ duration: 500, queue: false });
    //everything fades in
    //logo fades in a bit later and replaces painpattynoLogo
    $("#pattynoLogo").hide(100);
    $('#gamelogo').fadeIn(2500);
    $('#hawk').fadeIn(1000);
    $('#footer').fadeIn(2500);
    $('#msg').fadeIn(2500);
    $('#year').fadeIn(2500);
    // mouseover opacity effect on divs
    $("#header").mouseenter(function(){
      $(this).css({"opacity": "0.5"});
    });
    $("#header").mouseleave(function(){
      $(this).css({"opacity": "1"});
    });
    $("#lettuce").mouseenter(function(){
      $(this).css({"opacity": "0.5"});
    });
    $("#lettuce").mouseleave(function(){
      $(this).css({"opacity": "1"});
    });
    $("#tomato").mouseenter(function(){
      $(this).css({"opacity": "0.5"});
    });
    $("#tomato").mouseleave(function(){
      $(this).css({"opacity": "1"});
    });
    $("#cheese").mouseenter(function(){
      $(this).css({"opacity": "0.5"});
    });
    $("#cheese").mouseleave(function(){
      $(this).css({"opacity": "1"});
    });
    $("#footer").mouseenter(function(){
      $(this).css({"opacity": "0.5"});
    });
    $("#footer").mouseleave(function(){
      $(this).css({"opacity": "1"});
    });
    $("#start").mouseenter(function(){
      $("#gamelogo").css({"opacity": "0.5"});
    });
    $("#start").mouseleave(function(){
      $("#gamelogo").css({"opacity": "1"});
    });  
  });
});


//Start Button Blinking via StackOverflow
function blink(selector){
    $(selector).animate({opacity:0}, 50, "linear", function(){
        $(this).delay(700);
        $(this).animate({opacity:1}, 50, function(){
        blink(this);
        });
        $(this).delay(700);
    });
}

blink("#start");





//Animation on User Click
 /* $("#logo").click(function(){
    $("#msg").animate({
      left:'50%',
      opacity:'100%',
    });
  }); */

