module.exports = function(grunt) {

	grunt.initConfig({
		lessFileSpec: { 'example.css': 'less/example.less' },
		sassFileSpec: { 'example.css': 'sass/example.scss' },

		less: {
			development: {
				files: '<%= lessFileSpec %>'
			}
		},

		sass: {
			development: {
				files: '<%= sassFileSpec %>'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('example-less', ['less']);
	grunt.registerTask('example-sass', ['sass']);

};