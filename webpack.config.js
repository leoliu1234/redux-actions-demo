var path = require('path');
var webpack = require('webpack');

module.exports = {
    // devtool: 'cheap-module-source-map',
    devtool:'source-map',
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'public/javascripts'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        }]
    }
};