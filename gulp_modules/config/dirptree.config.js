const dirptree = require('dirp-tree');

const server_file_tree = {
  name: 'server',
  files: ['server_config.js'],
  paths: [
    {
      name: 'data',
      files: ['data_config.js'],
      paths: ['insert', 'update', 'delete', 'query', 'utils']
    },{
      name: 'router',
      files: ['router_config.js'],
      paths: ['utils']
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
      paths: [ 'img', 'svg', 'font' ]
    },{
      name: 'scss',
      files: ['stylesheet.scss'],
      paths: ['layout', 'effects']
    },{
      name: 'jsx',
      files: ['index.jsx'],
      paths: [
        'actions',
        'reducers',
        'routes',
        {
          name: 'views',
          paths: [ 'components', 'containers', 'utils' ]
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