'use strict';

// configuration of webpack-gulp tasks, imported by 'utils_index.js'
const web = {};

web.pack = require('webpack-stream');
web.import = require('webpack-load-plugins')();

// :TODO: implement intuitive stdout progress & error logging
// web.log = {
//   progress: new web.pack.webpack.ProgressPlugin(function(p, m) { console.log(p); }),
//   complete: function(status) { console.log(status); }
// }

web.loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },{
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader:"url?limit=10000&mimetype=application/font-woff"
  },{
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "file"
  },{
    test: /\.scss$/,
    loaders: ['style', 'css', 'postcss', 'sass']
  }
];

// :TODO: implement envify to pass argument variables
//        (solves React & Redux deployment errors)
web.plugins = {
  dev: [
    new web.pack.webpack.HotModuleReplacementPlugin()
  ],
  deploy: [
    new web.pack.webpack.optimize.DedupePlugin(),
    new web.pack.webpack.optimize.UglifyJsPlugin()
  ]
};

web.task = {
  dev: {
    watch: true,
    devtool: 'source-map',
    plugins: web.plugins.dev,
    module: { loaders: web.loaders }
  },
  deploy: {
    watch: false,
    plugins: web.plugins.deploy,
    module: { loaders: web.loaders }
  }
};


module.exports = web;


/* For importing 3rd party webpack plugins: */

// web.pack_plugins({
//   pattern: ['*-webpack-plugin','@*/*-webpack-plugin'], // the glob(s) to search for
//   config: 'package.json', // where to find the plugins, by default searched up from process.cwd()
//   scope: ['dependencies', 'devDependencies', 'peerDependencies'], // which keys in the config to look within
//   replaceString: /-webpack-plugin$/, // what to remove from the name of the module when adding it to the context
//   camelize: true, // if true, transforms hyphenated plugins names to camel case
//   lazy: true, // whether the plugins should be lazy loaded on demand
//   rename: {}, // a mapping of plugins to rename
//   renameFn: function (name) { ... } // a function to handle the renaming of plugins (the default works)
// });