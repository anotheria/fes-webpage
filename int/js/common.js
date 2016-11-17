$(document).ready(function () {
    /*=======================================
     PAGE SCROLL TOP
     ========================================*/
    $('.scroll-top').click(function () {
        $('body').animate({scrollTop: 0}, 500);
        return false;
    });
});