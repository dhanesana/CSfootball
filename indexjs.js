
//Everything Fades in
$('body').hide().fadeIn(400);

//Logo Fade in on Load
$('#logo').hide().fadeIn(2500);

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

// div fading with mouseenter and mouseleave
$("#header").mouseenter(function(){
  $("#header").css({
    "opacity": "0.5"
  });
});
    
$("#header").mouseleave(function(){
  $("#header").css({
    "opacity": "1"
  });
});

$("#footer").mouseenter(function(){
  $("#footer").css({
    "opacity": "0.5"
  });
});
    
$("#footer").mouseleave(function(){
  $("#footer").css({
    "opacity": "1"
  });
});

$("#lettuce").mouseenter(function(){
  $("#lettuce").css({
    "opacity": "0.5"
  });
});
    
$("#lettuce").mouseleave(function(){
  $("#lettuce").css({
    "opacity": "1"
  });
});

$("#tomato").mouseenter(function(){
  $("#tomato").css({
    "opacity": "0.5"
  });
});
    
$("#tomato").mouseleave(function(){
  $("#tomato").css({
    "opacity": "1"
  });
});

$("#cheese").mouseenter(function(){
  $("#cheese").css({
    "opacity": "0.5"
  });
});
    
$("#cheese").mouseleave(function(){
  $("#cheese").css({
    "opacity": "1"
  });
});

$("#start").mouseenter(function(){
  $("#gamelogo").css({
    "opacity": "0.5"
  });
});
    
$("#start").mouseleave(function(){
  $("#gamelogo").css({
    "opacity": "1"
  });
});



