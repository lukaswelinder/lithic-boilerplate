const dirptree = require('dirp-tree');

const server_file_tree = {
  name: 'server',
  files: ['server_config.js'],
  paths: [
    {
      name: 'data',
      files: ['data_config.js'],
      paths: [
        {
          name: 'models',
          files: ['models_index.js']
        },{
          name: 'collections',
          files: ['collections_index.js']
        },{
          name: 'db',
          files: ['db.sql']
        }
      ]
    },{
      name: 'router',
      files: ['router_config.js'],
      paths: [
        {
          name: 'utils',
          files: ['utils_index.js']
        }
      ]
    }
  ]
};

const client_file_tree = {
  name: 'public',
  files: ['index.html'],
  paths: [
    {
      name: 'dist',
      files: ['dist.log']
    },{
      name: 'assets',
      paths: [ 'img', 'svg', 'fonts' ]
    },{
      name: 'scss',
      files: ['stylesheet.scss']
    },{
      name: 'jsx',
      files: ['index.jsx'],
      paths: [
        'actions',
        'reducers',
        'routes',
        {
          name: 'views',
          paths: [ 'components', 'containers', 'd3' ]
        }
      ]
    }
  ]
};

// :NOTE: actual dirptree.config.js should not be structured this way as of 0.0.3
module.exports = {
  generate: dirptree,
  config: {
    name: 'app',
    files: ['index.js'],
    paths: [client_file_tree,server_file_tree]
  }
};