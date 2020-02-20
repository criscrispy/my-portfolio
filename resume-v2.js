// ========================================================================= //
//  Typed Js
// ========================================================================= //

$(document).ready(function () {
    'use strict';
    var typed = $(".typed");

    $(function () {
        typed.typed({
            strings: ["Christian Addy.", "a Customer support engineer.", "an IT administrator.", "an aspiring Frontend developer.",],
            typeSpeed: 100,
            loop: true,
        });
    });
});

// We listen to the resize event
// window.addEventListener('resize', () => {
//     // We execute the same script as before
//     let vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
// });
