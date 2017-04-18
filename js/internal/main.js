"use strict";

function start(){
    console.log("Welcome.");

    var fadeTime = 100;


    // click
    $("body").click(function(){
      $("#anta_kicken").fadeToggle();
    });
}

// When window has loaded
window.onload = function () {

    start();
};
