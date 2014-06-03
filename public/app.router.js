define(function (require, exports, module) {

	var Backbone = require('backbone');
	var mediator = require('framework/mediator');
	var appLayoutTemplate = require('html!ui/_shared/layouts/app');

	require(['ui/home/homeView'], function(HomeView){

		new HomeView({layoutTemplate: appLayoutTemplate})

	});
	require(['ui/resume/resumeView'], function(HomeView){

		new HomeView({layoutTemplate: appLayoutTemplate})

	});
	require(['ui/contact/contactView'], function(ContactView){

		new ContactView({layoutTemplate: appLayoutTemplate})

	});

	require(['ui/menu/menuView'], function(MenuView){
		var menu = new MenuView();
				menu.render();


		// menu listeners
		  var scrolling_speed = 500;
		  // handle navigation clicks
		  $("#home-btn").click(function() {
		    $('html, body').animate({
		            scrollTop: $(".home-container").offset().top - 50
		        }, scrolling_speed);
		  })
		  $("#resume-btn").click(function() {
		    $('html, body').animate({
		            scrollTop: $(".resume-container").offset().top - 50
		        }, scrolling_speed);
		  })
		  $("#contact-btn").click(function() {
		    $('html, body').animate({
		            scrollTop: $(".contact-container").offset().top - 50
		        }, scrolling_speed);
		  })
			$("#hire-me-btn").click(function() {
				$('html, body').animate({
								scrollTop: $(".contact-container").offset().top - 50
						}, scrolling_speed);
			})
	});

	return Backbone.Router.extend({


		routes: {
			'home' : 'home',
			'resume' : 'resume',
			'contact' : 'contact',
			'hire-me' : 'contact',

		},

		home: function() {
			$('html, body').animate({
							scrollTop: $(".home-container").offset().top - 50
					}, 500);
		},

		resume: function() {
			$('html, body').animate({
							scrollTop: $(".resume-container").offset().top - 50
					}, 500);
		},

		contact: function() {
			$('html, body').animate({
							scrollTop: $(".contact-container").offset().top - 50
					}, 500);
		},

	});

});
