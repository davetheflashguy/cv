# Requirejs Handlebars Plugin

A minimal RequireJS Handlebars plugin that provides...

- On the fly loading & compilation of Handlebars templates from source
- AMD wrapped, precompiled templates included in the R.js optimized build

Based on Esa-Matti Suuronen's previous work: [https://github.com/epeli/requirejs-hbs]()

If you need a more full featured solution, check out: [https://github.com/SlexAxton/require-handlebars-plugin]()

## Installation

I use NPM to install Node dependencies and [Bower](http://bower.io) for browser dependencies

**RequireJS for use in Node...**
`npm install --save-dev requirejs`

**Handlebars for use in Node...**
`npm install --save-dev handlebars`

**Handlebars* for use in the browser...**
`bower install --save handlebars`

**Requires the AMD version of Handlebars (at least v1.1.2)*

**RequireJS...**
`bower install --save requirejs`

**RequireJS Text Plugin...**
`bower install --save requirejs-text`

**RequireJS Handlebars Plugin...**
`bower install --save requirejs-handlebars-plugin`


## Setup

**RequireJS config**
```
require.config({
	paths: {
		handlebars: 'your_path_to/handlebars.amd',
		html: 'your_path_to/requirejs-handlebars',
	}
});
```

**R.js build config**
```
{
	mainConfigFile: your_path_to_require_config,
	stubModules: ['text', 'html']
}
```

## Usage

```
require(['html!path_to/template'], function(template){

	var data = {foo: 'bar'};
	document.body.innerHTML = template(data);

});
```

**Important:** This plugin assumes you will use `.html` as the file extension for your Handlebars templates


