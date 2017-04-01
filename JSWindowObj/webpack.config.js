const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /(\.css|\.scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules"
        ],
        extensions: [".js", ".css"]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("main.css"),
    ],
    devtool: "cheap-module-eval-source-map",
    devServer: {
        compress: true,
        port: 9000,
        hot: true,
        hotOnly: true,
        open: true,
        watchContentBase: true,
        overlay: true
    }
}