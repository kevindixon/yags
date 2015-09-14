module.exports = function(grunt) {

	grunt.initConfig({
		sassFileSpec: {
			development: {
				'generate-grid-classes.css': 'sass/generate-grid-classes.scss',
				'example.css': 'sass/example.scss' 
			},
			production: {
				'generate-grid-classes.min.css': 'sass/generate-grid-classes.scss',
				'example.min.css': 'sass/example.scss' 
			}
		},

		sass: {
			development: {
				files: '<%= sassFileSpec.development %>'
			},
			production: {
				files: '<%= sassFileSpec.production %>',
				options: {
					style: 'compressed'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', "Deploys the content to the prototypes site", ['sass:development', 'sass:production']);

};