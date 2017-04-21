const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const Webpack = require('webpack');

module.exports = {
    entry: {
        // vendors: ['jquery', 'bootstrap', 'tether'],
        main: './src/js/main.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/assets'),
        publicPath: 'assets',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /(\.css|\.scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
        ],
        extensions: ['.js', '.css']
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        // new Webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery',
        //     'root.jQuery': 'jquery',
        //     Tether: 'tether',
        //     tether: 'tether',
        // }),
        // new CommonsChunkPlugin({
        //     name: 'vendors',
        //     // filename: 'vendors.js',
        //     children: true,
        //     async: true,
        //     minChunks: Infinity,
        // }),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
        }),
    ],
    devtool: 'source-map',
    devServer: {
        // contentBase: 'dist',
        watchContentBase: true,
        compress: true,
        port: 9000,
        hot: true,
        hotOnly: true,
        open: true,
        overlay: true,
    }
}