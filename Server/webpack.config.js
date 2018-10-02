var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        proxy: {
            "/api": "http://localhost:9090"
        }
    }
};