// ========================================================================= //
//  Typed Js
// ========================================================================= //

$(document).ready(function () {
	'use strict';
	var typed = $('.typed');

	$(function () {
		typed.typed({
			strings: [
				'Hi there :)!^700 My name is Christian Addy',
				'but you can just call me Chris.',
				'My IT work experience has been in 3 fields:^500',
				'Customer Support, Frontend Developer and...',
				'Integration Engineer roles^500.',
				'Building web projects in my free time...',
				'and exploring different technologies...',
				'are things I am most passionate about^400.',
				'Check out these projects and more about me below.',
				'Thank you for stopping by...',
				'and have a wonderful day :) ^1500',
				'Intro loop begins in 3^1000 2^1000 1^100'
			],
			typeSpeed: 30,
			loop: true,
			startDelay: 200
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
	$('[data-toggle="crossover-product-description-sm-xs"]').tooltip();
});

// ================================================== //

AOS.init({
	delay: 200, // values from 0 to 3000, with step 50ms
	duration: 1200, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: true, // whether animation should happen only once - while scrolling down
	mirror: false // whether elements should animate out while scrolling past them
});