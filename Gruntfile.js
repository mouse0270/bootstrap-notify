module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				compress: {
					drop_console: true
				},
				preserveComments: 'some'
			},
			default: {
				files: {
					'bootstrap-notify.min.js': ['bootstrap-notify.js']
				}
			}
		},
		jshint: {
			options: {
				jshintrc: 'jshintrc.json'
			},
			default: {
				src: 'bootstrap-notify.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('default', ['uglify']);
};
