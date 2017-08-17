/* ===============
    HOME PAGE
=============== */

// Desktoppr API key
var desktopprAPIkey = "aSBEtAiYniLeyB8Sf9Zc";

// Go and get a random image using Desktoppr and then set it as the background
$.ajax({
    url: "https://api.desktoppr.co/1/wallpapers/random?auth_token=" + desktopprAPIkey,
    method: "GET"
}).done(function(wallpapers) {
    $('body').css('background-image', 'url(' + wallpapers.response.image.url + ')');
});

// Every 3000ms get the time, format it, and then put it in the .time div
setInterval(function(){
    var currentTime = new Date();
    var cT = moment(currentTime).format("h:MM A");
    $(".time").html(cT);
}, 3000);

/* ===============
    ADMIN PAGE
=============== */
$('.plus').on('click', function(){
    console.log($(this).siblings('.form-group'));
    $(this).hide();
    $(this).siblings('.form-group').fadeIn();
});

function hideForm(){
    $(".form-group").hide();
    $('.plus').fadeIn();
    clearForm();
}

function clearForm(){
    $(".form-control").val("");
}
$(document).on('click', '.tasks', function(){
   $(this).parent().parent().addClass('open');
});


