/**
 * The 'webpack-config' will be the responsible for setting the webpack rules like the 'index.js' location
 * 'bundle' location and other dicrectories path
 */

// Import the 'path' method to deal with paths in different OS
const path = require('path');

// The export will give "directions" like paths and which files and extentions to use
module.exports = {
  //The 'entry' gives the path to a file where the react and react-dom are being imported
  entry: path.resolve(__dirname, 'src', 'index.js'),
  //The 'output' is a file which contains the configuration that allow browsers to interpret react
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  // The 'devServer' is the final file to be shown to the user
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        // The 'js' will be interpreted
        test: /\.js$/,
        // The 'node_modules' will be excluded
        exclude: /node_modules/,
        // The 'babel-loader' is the responsible for "translating" the react to the browser
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
};
