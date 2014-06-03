define(function (require) {

	'use strict';

	require('bootstrap_js');
	require('css!bootstrap_css');
	require('css!ui/_shared/styles/bootstrap-overrides');
	var Backbone = require('backbone');
	var mediator = require('framework/mediator');

	return Backbone.View.extend({

		constructor: function(options){

			this.options = options || {};

			var layoutTemplate = this.options.layoutTemplate;
			if(layoutTemplate){
				this.setElement('[data-el=app]');
				this.$el.html(layoutTemplate({}));
				this.setElement(this.$('[data-el=main]'));
			}

			mediator.trigger('registerView', this);

			this.initialize.apply(this, arguments);

		}

	});

});
