'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        "./src/js/index.jsx",
        "webpack/hot/dev-server",
        "webpack-dev-server/client?http://localhost:8080/"
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: "json-loader"
            },
            {
                test: /\.png$/,
                exclude: /node_modules/,
                loaders: "file-loader"
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!postcss-loader!sass-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};
