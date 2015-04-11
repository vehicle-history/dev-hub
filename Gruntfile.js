module.exports = function (grunt) {
  grunt.initConfig({

    copy: {
      bootstrap: {
        files: [
          {
            expand: true,
//            cwd: "_components/bootstrap/dist/css",
            cwd: "_components/bootstrap/docs/assets/css",
            src: "*.*",
            dest: "vendor/css/"
          }
        ]
      },
      images: {
        files: [
          {
            expand: true,
            cwd: "static/img",
            src: "*.*",
            dest: "vendor/img/"
          }
        ]
      },
      static: {
        files: [
          {
            expand: true,
            cwd: "static/css",
            src: "*.css",
            dest: "vendor/css/"
          }
        ]
      }
    },
    uglify: {
      js: {
        files: {
          'vendor/js/all.min.js': [
            '_components/jquery/jquery.js',
            'static/js/shred.bundle.js',
            'static/js/jquery.slideto.min.js',
            'static/js/jquery.wiggle.min.js',
            'static/js/jquery.ba-bbq.min.js',
            'static/js/handlebars-1.0.rc.1.js',
            '_components/underscore/underscore-min.js',
            'static/js/backbone-min.js',
            'static/js/swagger.js',
            'static/js/swagger-ui.js',
            'static/js/highlight.7.3.pack.js',
            'static/js/mustache.js',
            'static/js/injector.js',
            'static/js/utilities.js'
          ]
        }
      }
    },
    exec: {
      build: {
        cmd: 'bundle exec jekyll build --trace'
      },
      serve: {
        cmd: 'bundle exec jekyll serve --watch'
      }
    },
    watch: {
      files: ['Gruntfile.js', '_components/**/*', 'static/**/*'],
      tasks: ['uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['copy', 'uglify', 'exec:serve']);
};
