define(function (require, exports, module) {

	var BaseView = require('framework/view');
	var mediator = require('framework/mediator');

	require('css!./homeView');
	var homeTemplate = require('html!./homeTemplate');


	return Backbone.View.extend({

		el: ".home-container",

		initialize: function(){

			this.render();

		},

		render: function(){

			this.$el.html(homeTemplate({}));

		}
	});

});
