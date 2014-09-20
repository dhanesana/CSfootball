var myFunction

function myFunction () {
	alert ("cool");
};

//Logo Fade in on Load
$('#logo', '#start').hide().fadeIn(2500);

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
