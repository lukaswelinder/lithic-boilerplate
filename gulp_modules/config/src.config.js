'use strict';

const merge = (...args) => [].concat(...args);

const server_paths = {
  root: 'app/server',
  index: ['app/index.js'],
  js: {
    index: ['app/index.js'],
    all: ['app/server/**/*.js']
  },
  ignore: ['app/server/data/db']
};

const public_paths = {
  root: 'app/public',
  index: ['app/public/index.html'],
  assets: ['app/public/assets/**/*'],
  jsx: {
    index: ['app/public/jsx/index.jsx'],
    all: ['app/public/jsx/**/*.jsx']
  },
  scss: {
    index: ['app/public/scss/stylesheet.scss'],
    all: ['app/public/scss/**/*.scss']
  },
  ignore: ['app/public/dist']
};

const app = {
  root: 'app',
  index: ['app/index.js'],
  all: merge(server_paths.js.all, public_paths.jsx.all),
  ignore: merge(server_paths.ignore, public_paths.ignore)
};

const dest = {
  root: 'app/public/dist',
  assets: 'app/public/dist/assets',
  js: 'app/public/dist/js',
  css: 'app/public/dist/css'
};

module.exports = {
  merge: merge,
  app: app,
  dest: dest,
  server: server_paths,
  public: public_paths
};