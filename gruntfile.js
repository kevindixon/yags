module.exports = function(grunt) {

	grunt.initConfig({
		sassFileSpec: { 
			'generate-grid-classes.css': 'sass/generate-grid-classes.scss',
			'example.css': 'sass/example.scss' 
		},

		sass: {
			development: {
				files: '<%= sassFileSpec %>'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');

};