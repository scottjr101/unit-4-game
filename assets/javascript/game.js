// golbal variables
var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
var lose = 0;
var win = 0;
var counter = 0;

var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

$("#number-to-guess").text(randomNumber);
// added reset function to reset the random number the user will see, so all 4 crystals will have a new value, and
// the score counter will be set to zero.
function reset() {
    randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
    crystal1 = Math.floor(Math.random() * (12 - 1) + 1);
    crystal2 = Math.floor(Math.random() * (12 - 1) + 1);
    crystal3 = Math.floor(Math.random() * (12 - 1) + 1);
    crystal4 = Math.floor(Math.random() * (12 - 1) + 1);
    $("#number-to-guess").text(randomNumber);
    $('#currentScore').text(counter);
    counter = 0;
    start();

}
// had to create since i have other functions in play.
function start() {
    // just to clear all the numbers again like in the reset function.
    randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
    crystal1 = Math.floor(Math.random() * (12 - 1) + 1);
    crystal2 = Math.floor(Math.random() * (12 - 1) + 1);
    crystal3 = Math.floor(Math.random() * (12 - 1) + 1);
    crystal4 = Math.floor(Math.random() * (12 - 1) + 1);
    $("#number-to-guess").text(randomNumber);
    $('#currentScore').text(counter);
    counter = 0;

    // reversed engineered how each one of these was created from the activity i started this from.
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
    //added the .off() because it will repeat the click twice without it and save the last number that
    // was clicked and push it to the total score during the next game.
    $(".image").off().on("click", function () {

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
        } else if (counter >= randomNumber) {
            lose++;
            $('#losses').text(lose);
            reset();
        }

    });
}
start();