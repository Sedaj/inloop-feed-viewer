var path = require('path');
var webpack = require('webpack'), devServer;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

devServer = {
    contentBase: './',
    quiet: false,
    noInfo: false,
    inline: true,
    publicPath: 'http://localhost:8000/dist/',
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8000,
    hot: true
};

module.exports = {
    devServer: devServer,
    devtool: 'inline-source-map',
    context: __dirname,
    entry: [
        './src/index.tsx'
    ],
    output: {
        publicPath: 'http://localhost:8000/dist/',
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin("style/main.css")
    ],

    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loaders: [
                    'react-hot-loader/webpack',
                    'awesome-typescript-loader'
                ]
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
            }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
