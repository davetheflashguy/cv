define(function (require, exports, module) {

	var mediator = require('framework/mediator');

	require('css!./menuView');
	var themesLayoutTemplate = require('html!./menuTemplate');
	var bootstrap_js = require("bootstrap_js")



	return Backbone.View.extend({

		el : "",

		initialize: function(){

			this.render();

		},

		render: function(){

			// inject base template
			$(".menu-container").html(themesLayoutTemplate());

			var route = (Backbone.history.fragment == "") ? "home" : Backbone.history.fragment;

			$('[data-menu-target="'+route+'"]').addClass("active");

			var prefixfree = require('prefixfree');
			$('[data-spy="scroll"]').each(function () {
			  var $spy = $(this).scrollspy('refresh'); // I think this is not needed because nothing was invisible before
			});

		},

	});

});
