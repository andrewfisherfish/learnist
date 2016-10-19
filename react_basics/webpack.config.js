var webpack = require('webpack');

module.exports = {
    // starting point of our code
    entry: "./index.js",

    // final bundled code
    output: {
        path: __dirname,
        filename: "bundle.js"
    },

    devtool: "source-map",

    // something we don't want to put in our bundle
    externals: {

    },

    // plugins
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            debug: true,
            minimize: true,
            sourceMap: true,
        })
    ],

    // modules
    module: {
        // loaders
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            // query: {
            //     presets: ['react', 'es2015']
            // }
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }]
    }
}
