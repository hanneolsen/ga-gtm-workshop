module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			js: {
				src: ['website/src/js/angular/angular.min.js', 'website/src/js/angular/*.js','website/src/js/**/*.js'],
				dest: 'website/dist/js/app.js',
			},
			css: {
				src: ['website/src/css/bootstrap/*.css', 'website/src/css/**/*.css'],
				dest: 'website/dist/css/main.css',
			}
		},
		watch: {
			everything: {
				files: ['website/src/js/**/*.js', 'website/src/css/**/*.css'],
				tasks: ['concat'],
				options: {
					spawn: false,
				},
			}
		},
		connect: {
			server: {
				options: {
					port: 8000,
					hostname: '*',
					keepalive: true,
					base: './website'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['connect']);

};