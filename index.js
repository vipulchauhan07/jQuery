$("h1").addClass("big");

$(document).keypress(function(e) {
    console.log($('h1').text(e.key));
});