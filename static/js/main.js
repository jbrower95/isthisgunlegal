function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

shuffle(guns);
var counter = -1;
var gun = $("#gun");
var guncaption = $("#gun_name");

function nextGun() {
	counter = counter + 1;
	gun.attr('src' ,"./static/legal/" + guns[counter].filename);
	guncaption.text(guns[counter].name);
}

var buttonNo = $("#button_no");
var buttonYes = $("#button_yes");

buttonNo.hover(function() {
	//in
	$("#button_no").fadeTo( "fast" , 0.5);
}, function() {
	$("#button_no").fadeTo( "fast" , 1);
});

buttonYes.hover(function() {
	//in
	$("#button_yes").fadeTo( "fast" , 0.5);
}, function() {
	$("#button_yes").fadeTo( "fast" , 1);
});

var msgs = [
	"Can you believe this?",
	"Totally federally allowed.",
	"No federal ban on that!",
	"The federal government has absolutely no problem with you owning that.",
	"If you went hunting with that people would probably laugh at you.",
	"Seriously, why would you ever need to own this.", 
	"?",
	"Isn't it terrifying that people might have purchased this."
];

buttonYes.click(function() {
	var msg = msgs[Math.floor(Math.random()*msgs.length)];
	alertify.log(msg);
	nextGun();
});

buttonNo.click(function() {
	alertify
  .okBtn("Show me the bill.")
  .cancelBtn("Continue the game.")
  .confirm("Thought that should be illegal? Some people in Congress agree with you.", function (ev) {

      // The click event is in the
      // event variable, so you can use
      // it here.
      ev.preventDefault();
      window.open("https://www.congress.gov/bill/114th-congress/house-bill/4269/text");

  }, function(ev) {

      // The click event is in the
      // event variable, so you can use
      // it here.
      ev.preventDefault();
      
  });
});

$( document ).ready(function() {
	$('#title').animateCss('bounce');
	$('#button_no').animateCss('swing');
	$('#button_yes').animateCss('swing');
    nextGun();
    $('#gun').animateCss('fadeIn');
});




