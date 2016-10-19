module.exports = {
  // starting point of our code
  entry: "./index.js",

  // final bundled code
  output: {
    path: __dirname,
    filename: "bundle.js"
  },

  // something we don't want to put in our bundle
  externals:{},

  // plugins
  plugins: [

  ]

  // modules
  module: {
    // loaders
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      }
    ]
  }
}
