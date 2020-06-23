// ========================================================================= //
//  Typed Js
// ========================================================================= //

$(document).ready(function () {
    'use strict';
    var typed = $(".typed");

    $(function () {
        typed.typed({
            strings: ["My name is Christian Addy",
                "but you can just call me Chris.",
                "Formerly a Customer support engineer",
                "and an IT administrator,",
                "I now aspire to be a Frontend developer.",
                "I love to build projects",
                "and explore different technologies.",
                "Discover some of these projects below.",
                "Thanks for stopping by",
                "and looking forward to hearing from you :) ",],
            typeSpeed: 50,
            loop: false,
        });
    });
});

// ================================================== //

// ================================================== //
// Spinner
// ================================================== //

$(document).ready(function () {
    //Preloader
    preloaderFadeOutTime = 1500;

    function hidePreloader() {
        var preloader = $('.spinner-wrapper');

        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

// $(document).ready(function () {
//     Preloader
//     FadeTime = 8000;
//     function showMainProfileImage() {
//         var mainProfilepic = $('.cover-img');

//         mainProfilepic.fadeIn(FadeTime);
//     }
//     showMainProfileImage();
// });


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