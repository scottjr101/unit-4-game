
var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
var lose = 0;
var win = 0;

var crystal1 = Math.floor(Math.random() * (12 - 1) + 1);
var crystal2 = Math.floor(Math.random() * (12 - 1) + 1);
var crystal3 = Math.floor(Math.random() * (12 - 1) + 1);
var crystal4 = Math.floor(Math.random() * (12 - 1) + 1);

$("#number-to-guess").text(randomNumber);

function reset() {
    randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
    crystal1 = Math.floor(Math.random() * (12 - 1) + 1);
    crystal2 = Math.floor(Math.random() * (12 - 1) + 1);
    crystal3 = Math.floor(Math.random() * (12 - 1) + 1);
    crystal4 = Math.floor(Math.random() * (12 - 1) + 1);
    $("#number-to-guess").text(randomNumber);
    $('#currentScore').text(counter);
    counter = 0;
    
}

var counter = 0;
// Crystal 1
var imageCrystal = $('.crystal1').attr("crystalvalue");
$('.crystal1').attr("crystalvalue", crystal1);
// Crystal 2
var imageCrystal = $('.crystal2').attr("crystalvalue");
$('.crystal2').attr("crystalvalue", crystal2);
// Crystal 3
var imageCrystal = $('.crystal3').attr("crystalvalue");
$('.crystal3').attr("crystalvalue", crystal3);
// Crystal 4
var imageCrystal = $('.crystal4').attr("crystalvalue");
$('.crystal4').attr("crystalvalue", crystal4);

// This time, our click event applies to every single crystal on the page. Not just one.
$(".image").on("click", function() {

  var imageCrystal = ($(this).attr("crystalvalue"));
  imageCrystal = parseInt(imageCrystal);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += imageCrystal;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  $('#currentScore').text(counter);

  if (counter === randomNumber) {
    win++;
    $('#wins').text(win);
    reset();
  }

  else if (counter >= randomNumber) {
    lose++;
    $('#losses').text(lose);
    reset();
  }

});