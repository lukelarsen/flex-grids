module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            options: {

            },
            single_file: {
                options: {
                    // Target-specific options go here.
                },
                src: 'css/screen.css',
                dest: 'css/prefixed.css'
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
};