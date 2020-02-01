var path = require('path');
var webpack = require('webpack');
var glob = require('glob');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const main_build = {
    cache: true,
    mode: 'development',
    entry: {
        main: './index.js',
        vendor: [
            'angular',
            'jquery',
            path.join(__dirname, '/dist/tmp/wa.template.cache.js'),
            path.join(__dirname, '/dist/tmp/headings.config.bundle.js')
          ]
    },
    output: {
        path: path.join(__dirname, '/dist/final'),
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: 'babel-loader',
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['babel-plugin-angularjs-annotate']
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "window.jQuery": "jquery",
            "$": "jquery",
            "jQuery": "jquery"
        }),
    ]
}

const headings_build = {
    mode: 'production',
    entry: {
        main: glob.sync('*.js', {
            cwd: path.join(__dirname, "/src"), 
            // ignore: ['headings/*.js', 'headings/**/*.js'],
            root: '/',
            matchBase: true,
            realpath: true
        }),
        vendor: [
            'jquery',
            'angular'
        ]
    },
    output: {
        path: path.join(__dirname, '/dist/tmp_headings_webpack/'),
        filename: '[name].headings.config.webpack.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/env'],
                    plugins: [['babel-plugin-angularjs-annotate', {explicitOnly: true}]]
                }
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin()
    ]
}
module.exports = {
    main_build, headings_build
}