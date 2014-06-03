define(function (require, exports, module) {

	var underscore = require('underscore');
	var Router = require('app.router');
	var mediator = require('framework/mediator');

	require('css!./ui/_shared/styles/global.css');

	var app = {
		registeredViews: [],
		router: new Router(),
		start: function(){
			Backbone.history.start();
		},
		userSession: null,
	};

	window.app = app;

	return app;

});
