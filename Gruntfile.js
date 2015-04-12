module.exports = function (grunt) {
  grunt.initConfig({

    copy: {
      bootstrap: {
        files: [
          {
            expand: true,
            cwd: "_components/bootstrap/docs/assets/css",
            src: "*.*",
            dest: "vendor/css/"
          }
        ]
      },
      img: {
        files: [
          {
            expand: true,
            cwd: "static/img",
            src: "*.*",
            dest: "vendor/img/"
          }
        ]
      },
      images: {
        files: [
          {
            expand: true,
            cwd: "static/images",
            src: "*.*",
            dest: "vendor/images/"
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
      },
      fonts: {
        files: [
          {
            expand: true,
            cwd: "static/fonts",
            src: "*.*",
            dest: "vendor/fonts/"
          }
        ]
      }
    },
    uglify: {
      main: {
        files: {
          'vendor/js/main.min.js': [
            '_components/jquery/jquery.js',
            '_components/underscore/underscore-min.js',
            'static/js/backbone-min.js',
            'static/js/highlight.7.3.pack.js',
            'static/js/mustache.js',
            'static/js/injector.js',
            'static/js/utilities.js'
          ]
        }
      },
      docs: {
        files: {
          'vendor/js/docs.min.js': [
            'static/js/jquery-1.8.0.min.js',
            'static/js/jquery.slideto.min.js',
            'static/js/jquery.wiggle.min.js',
            'static/js/jquery.ba-bbq.min.js',
            'static/js/handlebars-2.0.0.js',
            'static/js/underscore-min.js',
            'static/js/backbone-min.js',
            'static/js/swagger-ui.js',
            'static/js/highlight.7.3.pack.js',
            'static/js/marked.js'
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
  grunt.registerTask('build', ['copy', 'uglify', 'exec:build']);
};
