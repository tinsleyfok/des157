// JavaScript Document

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    $(document).ready(function () {

        setTimeout(function () {
            $('.fly-in-text').removeClass('hidden');
        }, 500);

        setTimeout(function () {
            $('.fly-in-text').delay(8000).fadeOut();
        });

    });

});