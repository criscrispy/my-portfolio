// ========================================================================= //
//  Typed Js
// ========================================================================= //

$(document).ready(function () {
    'use strict';
    var typed = $(".typed");

    $(function () {
        typed.typed({
            strings: ["Christian Addy.", "a Customer support engineer.", "an IT administrator.", "an aspiring Frontend developer.",],
            typeSpeed: 40,
            loop: true,
        });
    });
});

// ================================================== //

// ================================================== //
// Spinner
// ================================================== //

$(document).ready(function () {
    //Preloader
    preloaderFadeOutTime = 1400;
    function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

// ================================================== //




// ================================================== //
// Show description of crossover products on small and extra small screens
// ================================================== //

// Example 1
// $(document).ready(function () {

//     $('.crossover-product-description-sm-xs').click(function () {

//         $(this).toggleClass('show-title-sm-xs');
//     });
// });

// Example 2
$(function () {
    $('[data-toggle="crossover-product-description-sm-xs"]').tooltip()
})


// ================================================== //