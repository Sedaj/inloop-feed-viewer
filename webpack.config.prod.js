var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: "bundle.js",
        path: __dirname + "/prod/"
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin("style/main.css"),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader' },
            { test: /\.html$/, use: [ "html-loader?config=otherHtmlLoaderConfig" ] }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};