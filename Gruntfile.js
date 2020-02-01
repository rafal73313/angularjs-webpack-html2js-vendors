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
            },
            headings: {
                options: {
                    relative: true
                },
                files: {
                    './dist/index.html': ['./dist/tmp_headings_final/final.headings.js']
                }
            }
        },

        html2js: {
            options: {
                base: './',
                module: 'wa.templates',
                singleModule: false,
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
                    requireAngular: false
                }
            },
            main: {
                src: ['src/**/*.html'],
                dest: 'dist/tmp/wa.template.cache.js'
            }
        },


        webpack: webpackConfig,

        concat: {
            main: {
                files: {
                  'dist/bundle.final.js': ['dist/tmp/vendor.js', 'dist/tmp/main.js']
                },
            },
            headings_bundle: {
                files: {
                    './dist/tmp/headings.config.bundle.js': [
                        './dist/tmp/wa.template.cache.js',
                        './src/headings/headings.config.js',
                        './src/headings/headings.directive.js',
                        './src/headings/**/*.js',
                    ]
                }
            },
            headings_final: {
                files: {
                    './dist/headings.config.bundle.final.js': [
                        './dist/tmp_headings_webpack/vendor.headings.config.webpack.js',
                        './dist/tmp/wa.template.cache.js',
                        './dist/tmp_headings_webpack/main.headings.config.webpack.js'
                    ]
                }
            },
            headings_after_webpack: {
                files: {
                    './dist/tmp_headings_final/final.headings.js': [
                        './dist/tmp_headings_webpack/vendor*',
                        './dist/tmp/wa.template.cache.js',
                        './dist/tmp_headings_webpack/main*',
                    ]
                }
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            headings_bundle: {
                files: {
                    './dist/tmp/headings.config.bundle.js': [
                        './dist/tmp/wa.template.cache.js',
                        './src/headings/headings.config.js',
                        './src/headings/headings.directive.js',
                        './src/headings/**/*.js',
                    ]
                }
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
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [
        'clean',
        'html2js',
        'copy',
        'webpack:headings_build',
        'concat:headings_after_webpack',
        // 'concat:headings_final',
        // 'webpack:main_build',
        // 'webpack:headings_concat',
        // 'concat:main',
        // 'injector:main',
        'injector:headings'
    ])
}