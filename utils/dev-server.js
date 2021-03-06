'use strict';

var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('../webpack.dev.config.js');

var compiler = webpack(config);

var options = {
    contentBase: 'build/',
    hot: true,
    filename: 'bundle.js',
    stats: {
        colors: true
    },
    proxy: {
        "*": "http://localhost:3000"
    }
};

var server = new WebpackDevServer(compiler, options);

server.listen(8080, 'localhost', function() {
    console.log('webpack-dev-server now running');
});
