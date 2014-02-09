module.exports = function(grunt) {
    grunt.initConfig({
         watch: {
         	files:['index.html','css/*.css'],
         	options:{
         		livereload:true
            }
         }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};
