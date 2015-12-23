var webpack = require("webpack");

module.exports = {
  entry: {
    index: './lib/index.js'
  },
  output: {
    path: './',
    filename: 'standalone.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ["stage-1", "es2015"],
          plugins: ["add-module-exports"]
        }
      }, {
        test: require.resolve("./lib/index"),
        loader: "expose?KeypressCombinationEmitter"
      }
    ],
    postLoaders: [
      {
        loader: "transform?envify"
      }
    ],
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
};