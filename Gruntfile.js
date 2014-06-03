/*global module:false*/
module.exports = function(grunt) {

	"use strict";

	grunt.initConfig({
		requirejs: {
			compile: {
				options: {
					separateCSS: true,
					out: 'public/app.min.js',
					mainConfigFile: 'public/app.config.js',
					name: 'almond',
					findNestedDependencies: true,
					optimize: 'none',
					stubModules: ['text', 'html', 'css'],
					include: ['handlebars', 'app.start'],
					insertRequire: ['app.start']
				}
			}
		},
		cssmin: {
			files: {
				src: ['public/app.min.css'],
				dest: 'public/app.min.css'
			},
			options: {}
		},
		tests: JSON.stringify(grunt.file.expand({},'public/**/*.test.js')).replace(/public\//g,'').replace(/.js/g,''),
		replace: {
			insertTests: {
                    src: ['public/test/index.html'],
                    overwrite: true,
                    replacements: [
                        {
                            from: /require\(\[.*\]/,
                            to: 'require('+'<%= tests %>'
                        }
                    ]
            }
		},
		plato: {
			your_task: {
				files: {
					'public/analysis': [
						'public/**/*.js',
						'!public/bower_components/**',
						'!public/analysis/**',
						'!public/test/**',
						'!public/**/*.min.js'
					]
				}
			}
		},
		mocha: {
			all: ['public/test/index.html']
        }
	});

	grunt.registerTask('test', ['replace:insertTests', 'mocha']);

	grunt.registerTask('default', [
		//'test',
		'plato',
		'requirejs',
		'cssmin'
	]);

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-plato');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-mocha');

};
