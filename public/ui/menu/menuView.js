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

		},

	});

});
