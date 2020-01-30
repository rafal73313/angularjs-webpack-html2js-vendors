var path = require('path');
var glob = require('glob')


const build = {
    cache: true,
    mode: 'development',
    entry: {
        main: './index.js',
        vendor: [
            'angular',
            path.join(__dirname, '/dist/temp/wa.template.cache.js')
          ]
    },
    output: {
        path: path.join(__dirname, '/dist/temp'),
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
                            presets: ['@babel/env'],
                            plugins: ['babel-plugin-angularjs-annotate']
                        }
                    }
                ]
            }
        ]
    }
}

module.exports = {
    build
}