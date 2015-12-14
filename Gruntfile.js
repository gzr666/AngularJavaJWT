module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			example: {
				port: 1337,
				base: 'src'
			}
		}
	});

	grunt.loadNpmTasks('grunt-connect');
	grunt.registerTask('default', 'connect:example');

};