var userTeam,
    oppTeam;

$(document).ready(function() {
    //Everything Fades in
  $('body').hide().fadeIn(1000);
  //Speech Fade in on Load
  $('.speech').hide().fadeIn(1200);

  // ref slides up to the middle
  $("#refFlip").animate({
    top:'36.5%',
    opacity:'1',
  }, 1500, 'easeOutBounce');
  //GAME PLAN slides in
  $("#gamePlan").effect("slide",1500, 'easeOutBounce');
  // flipping coin slides up
  $('.front').animate({
    top:'26%',
    opacity:'1',
  }, 500, 'linear');
  $("#heads").mouseenter(function(){
    $(this).css({"opacity": "0.5"});
  });
  $("#heads").mouseleave(function(){
    $(this).css({"opacity": "1"});
  });
  $("#tails").mouseenter(function(){
      $(this).css({"opacity": "0.5"});;
    });
  $("#tails").mouseleave(function(){
    $(this).css({"opacity": "1"});
  });
});


// Jquery Popups !
//Load Instructions Popup
var status = 0;
function popLoad(){
  if(status==0){
    $("#popupBG").css({
      "opacity": "0.5"
    });
    $("#popupBG").fadeIn("slow");
    $("#popUp").fadeIn("slow");
    status = 1;
  }
}

//Load Seahawks Popup
var status2 = 0;
function popLoad2(){
  if(status2==0){
    $("#popupBG2").css({
      "opacity": "0.5"
    });
    $("#popupBG2").fadeIn("slow");
    $("#popUp2").fadeIn("slow");
    status2 = 1;
  }
}



//Close Popup2
  $("#ok").click(function(){
    $("#popupBG").fadeOut("slow");
    $("#popUp").fadeOut("slow");
  });

//Center Win Popup
  function popupPos(){
  var winWidth = document.documentElement.clientWidth;
  var winHeight = document.documentElement.clientHeight;
  var popupHeight = $("#popUp").height();
  var popupWidth = $("#popUp").width();
  $("#popUp").css({
    "position": "absolute",
    "top": winHeight/2-popupHeight/1.9,
    "left": winWidth/2-popupWidth/1.9
  });  
}

//Center Lose Popup
function popupPos2(){
  var winWidth2 = document.documentElement.clientWidth;
  var winHeight2 = document.documentElement.clientHeight;
  var popupHeight2 = $("#popUp2").height();
  var popupWidth2 = $("#popUp2").width();
  $("#popUp2").css({
    "position": "absolute",
    "top": winHeight2/2-popupHeight2/2,
    "left": winWidth2/2-popupWidth2/2
  });  
}

// coin toss
function userGame() {
  var runner1 = $("#runball");
  var runset = runner1.offset();
  $('#gameBG2').fadeOut(2000);
  $('#playerCatch').fadeOut(2000);
  $('#frontBall').fadeOut(2000, function() {
    $('#run').fadeIn('fast');
    $("#run").animate({'font-size': "6rem"}, 1000, function() {
      $('#gameBG3').fadeIn(1500, function() {
        $('#run').fadeOut('fast');
        $('#runball').fadeIn(700, function() {
          popupPos();
          popLoad();
          $(document).bind('keydown', function(e) {
            var run1 = $("#runball"),
                run2 = $("#runball2"),
                runset = run1.offset(),
                runset2 = run2.offset(),
                left = 37,
                up = 38,
                right = 39,
                down = 40
            if (e.keyCode == right) {
                run1.animate({left: "+=30" }, 1);
                run2.animate({left: "+=30" }, 1);
                run1.toggle();
                run2.toggle();
                if (runset.left >= 50 || runset2.left >= 90) {
                  $('#lol').fadeIn(400);
                }
                if (runset.left >= 200 || runset2.left >= 200) {
                  $('#keep').fadeIn(400);
                }
                if (runset.left >= 512 || runset2.left >= 512) {
                  $('#halfway').fadeIn(400);
                }
                if (runset.left >= 700 || runset2.left >= 700) {
                  $('#almost').fadeIn(400);
                }
            }
          });
        })        
      });
    });
  })

    //$(".gouser").text("Go " + userTeam.toUpperCase() + "!");
};

/* function tossTails() {
    coinToss = Math.floor(Math.random() * 100);
    userCoin = "tails";

    if (coinToss > 50) {
      wcoin = "heads";
  } else {
      wcoin = "tails";
  };

    if (userCoin == wcoin) {
      popupPos();
      popLoad();
      $(".coinPic").attr("src","img/coinTails.png");
      $(".gouser").text("The coin lands on " + wcoin.toUpperCase() + "!");
      $(".rdy").text("THAT MEANS U GON RECEIVE");
    } else {
      popupPos2();
      popLoad2();
      $(".coinPic").attr("src","img/coin.png");
      $(".gouser").text("The coin lands on " + wcoin.toUpperCase() + "...");
      $(".rdy").text("THAT MEANS U GON KICKOFF");
    }

}; */
function receiveLeft() {
  $('#preGame').fadeOut('fast');
  $('#gameBG').fadeIn(3500);
  $('#football').fadeIn(3500);
  $('#playerReceive').fadeIn(3500);
  $('#playerRun').fadeIn(3500);
  $("#playerRun").animate({
    opacity:'1',
    left:'20%',
  }, 2000, 'linear');
  //player run fades out as player kick fades in
  $('#playerRun').fadeOut(100, function () {
    $('#playerKick').fadeIn(100, function() {
      $("#football").animate({width: '10%',
        height: '10%', opacity:'1',left:'50.5%', top: '35%' }, 1500, function () {
          $('#football').fadeOut(0, function () {
            $("#football2").animate({width:'2%',height:'2%', top:'50%',
            opacity:'1', left: '80%'}, 1500, function() {
              $('#playerKick').fadeOut('fast');
              $('#playerReceive').fadeOut('fast');
              $("#football2").fadeOut('fast');
              $('#gameBG').fadeOut('fast', function() {
                $('#gameBG2').fadeIn(2000);
                $("#playerCatch").animate({opacity:'1', top:'35%',}, 3000, 'linear');
                $("#frontBall").fadeIn('fast');
                $("#frontBall").animate({top: '30%',
                width:'10%', height:'20%'}, 3000, function () {
                  userGame();
                });
              });
            })
          })
        });
    });
  });




};




