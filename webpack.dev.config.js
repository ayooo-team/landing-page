'use strict';

module.exports = {
    entry: [
        "webpack-dev-server/client?http://0.0.0.0:8080",
        "webpack/hot/only-dev-server",
        "./index.jsx"
    ],
    output: {
        path: __dirname + "/public/assets",
        publicPath: "/assets",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "react-hot-loader",
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
