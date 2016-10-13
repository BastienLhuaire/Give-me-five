var path         = require('path');
var SRC          = path.join(__dirname, 'src/');
var NODE_MODULES = path.join(__dirname, 'node_modules/');

module.exports = {
  entry: "./src/app.js",
  output: {
  	path: "./dist/",
  	publicPath: '/dist/',
    filename: "bundle.js"
  },
  module: {
   loaders: [
     {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015',  'stage-0'] 
        }
     }
   ]
 },
 resolve: {
 	root: [SRC, NODE_MODULES],
   	extensions: ['', '.js']
 }
}