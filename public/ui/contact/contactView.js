define(function (require, exports, module) {

	var BaseView = require('framework/view');
	var mediator = require('framework/mediator');

	require('css!./contactView');
	var contactTemplate = require('html!./contactTemplate');


	return Backbone.View.extend({

		el: ".contact-container",

		initialize: function(){

			this.render();

		},

		render: function(){

			this.$el.html(contactTemplate({}));

		}
	});

});
