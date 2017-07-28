// Main JS should go here!
// Include scripts using Browserify by doing:
// var $ = require("jquery");

// require("./toggle");
        
$('.gallery__container').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    // appendDots: $('.carousel'),
    mobileFirst: true,
    swipeToSlide: true
});