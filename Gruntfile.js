module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            src: {
                files: ['**/*.scss'],
                tasks: ['sass:dev']
            },
            options: {
                livereload: true,
            },
        },
        sass: {
            options: {
                sourcemap: false,
                precision: 8,
                lineNumbers: true
            },
            dev: {
                files: [{
                    expand: 'expanded',
                    check: false,
                    update: false,
                    cwd: './src/Assets/sass',
                    src: ['*.scss'],
                    dest: './src/',
                    ext: '.css'
                }]
            }
        },

    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');	
  };