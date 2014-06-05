require.config({
	paths: {
		almond: 'bower_components/almond/almond',
		bootstrap_css: 'bower_components/bootstrap/dist/css/bootstrap',
		bootstrap_css_overrides: 'ui/_shared/styles/bootstrap-overrides',
		bootstrap_js: 'bower_components/bootstrap/dist/js/bootstrap',
		backbone: 'bower_components/backbone/index',
		handlebars: 'bower_components/handlebars/handlebars.amd',
		holderjs: 'bower_components/holderjs/holder',
		html: 'bower_components/requirejs-handlebars-plugin/requirejs-handlebars-plugin',
		jquery: 'bower_components/jquery/jquery',
		jquery_ui: 'bower_components/jquery-ui-amd/jquery-ui-1.10.0/jqueryui',
		underscore: 'bower_components/lodash/dist/lodash',
		text: 'bower_components/requirejs-text/text',
		jquery_form_validator: 'ui/_shared/js/jquery.validate.min',
		prefixfree: 'ui/_shared/js/prefixfree.min'
	},
	shim: {
		bootstrap_js: ['jquery']
	},
	packages: [{
		name: 'css',
		main: 'css',
		location: 'bower_components/require-css'
	}],
	map: {
		'*': {
			'css': 'css'
		}
	}
});
