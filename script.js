$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");

        }

    });
    // toggle menu/navbar script

    $('.navbar .menuu').toggleclass("active");


});