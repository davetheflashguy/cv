define(function (require, exports, module) {

	var BaseView = require('framework/view');
	var mediator = require('framework/mediator');

	require('css!./resumeView');
	var resumeTemplate = require('html!./resumeTemplate');


	return Backbone.View.extend({

		el: ".resume-container",

		initialize: function(){

			this.render();

		},

		render: function(){

			this.$el.html(resumeTemplate({}));

		}
	});

});
