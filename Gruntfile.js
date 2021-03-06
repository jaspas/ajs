module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        'http-server': {

        'dev': {
            port: 8282,
            host: '0.0.0.0',
            showDir : true,
            autoIndex: true,
            ext: 'html',
            runInBackground: true,
            logFn: function(req, res, error) { },
            proxy: 'http://someurl.com',
            https: {
                cert: 'cert.pem',
                key : 'key.pem'
            },
            openBrowser : false,
            customPages: {
                '/readme': 'README.md',
                '/readme.html': 'README.html'
            }

        }

    },

        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['path/to/**/*.css']
            },
            lax: {
                options: {
                    import: false
                },
                src: ['path/to/**/*.css']
            }
        },
        jshint: {
            options: {
                'bitwise': true,
                'camelcase': true,
                'curly': true,
                'eqeqeq': true,
                'esversion': 6,
                'forin': true,
                'freeze': true,
                'immed': true,
                'indent': 4,
                'latedef': 'nofunc',
                'newcap': true,
                'noarg': true,
                'noempty': true,
                'nonbsp': true,
                'nonew': true,
                'plusplus': false,
                'quotmark': 'single',
                'undef': true,
                'unused': false,
                'strict': false,
                'maxparams': 10,
                'maxdepth': 5,
                'maxstatements': 40,
                'maxcomplexity': 8,
                'maxlen': 120,
                'asi': false,
                'boss': false,
                'debug': false,
                'eqnull': true,
                'esnext': false,
                'evil': false,
                'expr': false,
                'funcscope': false,
                'globalstrict': false,
                'iterator': false,
                'lastsemic': false,
                'laxbreak': false,
                'laxcomma': false,
                'loopfunc': true,
                'maxerr': 50,
                'moz': false,
                'multistr': false,
                'notypeof': false,
                'proto': false,
                'scripturl': false,
                'shadow': false,
                'sub': true,
                'supernew': false,
                'validthis': false,
                'noyield': false,

                'browser': true,
                'node': true,

                'globals': {
                    'angular': false,
                    '$': false
                }
            },

            files: {
                src: ['Gruntfile.js', '**/*.js', '!node_modules/**']
            }
          },
            // jsBeautify: {
            //     options: {
            //
            //     },
            //     files: {
            //         'dest/default_options': ['/']
            //     }
            //
            // }
        //},
        watch: {
            configFiles: {
                files: ['Gruntfile.js', 'config/*.js'],
                options: {
                    reload: true
                }
            }
        }
    });

    // Load the plugin that provides the 'uglify' task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-js-beautify');
    grunt.loadNpmTasks('angular-http-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['jshint', 'csslint', 'watch']);
};
