define(function (require, exports, module) {

	var mediator = require('framework/mediator');

	require('css!./menuView');
	var themesLayoutTemplate = require('html!./menuTemplate');



	return Backbone.View.extend({

		el : "",

		initialize: function(){

			this.render();

		},

		render: function(){

			// inject base template
			$(".menu-container").html(themesLayoutTemplate());

			var route = (Backbone.history.fragment == "") ? "home" : Backbone.history.fragment;
			$("#dcc-main-navbar li").removeClass("active");
			$('[data-menu-target="'+route+'"]').addClass("active");
		},

	});

});
