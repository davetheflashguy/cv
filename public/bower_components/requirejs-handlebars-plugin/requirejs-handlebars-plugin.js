define(function() {

	// store templates here
	var templates = {};

	return {

		load: function(name, parentRequire, onload, config) {

			if (config.isBuild) {

				// during R.js build, use Node to load the template
				var fs = require.nodeRequire('fs');
				var fsPath = config.dirBaseUrl + '/' + name + '.html';
				templates[name] = fs.readFileSync(fsPath).toString();
				onload();

			} else {

				// in Dev mode, use text.js plugin to load the template
				parentRequire(['text!' + name + '.html', 'handlebars'], function(raw, handlebars) {

					// once loaded, compile it with Handlebars
					onload(handlebars.default.compile(raw));

				});

			}

		},

		write: function(pluginName, name, write) {

			// during the R.js build, use the NPM installed Handlebars
			var handlebars = require.nodeRequire('handlebars');

			// compile the template stored in the templates object
			var compiled = handlebars.precompile(templates[name]);

			// put the compiled template inside an AMD wrapper
			write(
				'define("html!' + name + '", ["handlebars"], function(handlebars){ \n' +
					'return handlebars.default.template(' + compiled.toString() + ');\n' +
				'});\n'
			);

		}

	};
});
