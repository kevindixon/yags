module.exports = function(grunt) {

	grunt.initConfig({
		sassFileSpec: { 'example.css': 'sass/example.scss' },

		sass: {
			development: {
				files: '<%= sassFileSpec %>'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('example-sass', ['sass']);

};