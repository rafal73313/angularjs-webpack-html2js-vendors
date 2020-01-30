var webpackConfig = require('./webpack.config');

module.exports = function(grunt) {


    grunt.initConfig({

        copy: {
            main: {
                files: [
                    {
                        expand: true, flatten: true, src: './index.html', dest: './dist', filter: 'isFile'
                    },
                ]
            }
        },

        injector: {
            main: {
                options: {
                    relative: true
                },
                files: {
                    './dist/index.html': ['./dist/bundle.final.js']
                }
            }
        },

        html2js: {
            options: {
                base: './',
                module: 'wa.templates',
                singleModule: true,
                useStrict: true,
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    requireAngular: true
                }
            },
            main: {
                src: ['src/**/*.html'],
                dest: 'dist/temp/wa.template.cache.js'
            }
        },


        webpack: webpackConfig,

        concat: {
            main: {
                files: {
                  'dist/bundle.final.js': ['dist/temp/vendor.js', 'dist/temp/main.js']
                },
            }
        },

        clean: {
            main: {
                src: ['./dist']
            }
        }
    })

    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', [
        'clean',
        'html2js',
        'webpack:build',
        'concat',
        'copy',
        'injector'
    ])
}