'use strict';

const fs = require('fs');
const gulp = require('gulp');
const args = require('yargs').argv;

const run = require('./gulp_modules/utils_index');
const web = require('./gulp_modules/config/web.config');
const src = require('./gulp_modules/config/src.config');

const ARG_DIR = args.dir;
const ARG_ENV = args.env;

// work directory & source glob from '--dir ...' which defaults to entire app
const ENV_DIR = (ARG_DIR && ARG_DIR in src) ? src[ARG_DIR].root : src.app.root;
const ENV_SRC = (ARG_DIR && ENV_DIR in src) ? src[ARG_DIR].all : src.app.all;
// pack.task set according to '--env ...' which defaults to 'dev'
const ENV_WPT = (ARG_ENV && ARG_ENV in web.task) ? web.task[ARG_ENV] : web.task.dev;

/* * * * * * * * * * * * * * | Uses 'dirp-tree' to build filetree structure;
 * gulp init                 | config located @ 'gulp_modules/config/dirptree.config.js'
 * * * * * * * * * * * * * * |/
 * @return {[undefined]}       WARNING: early dev phase, possible breaking changes
 */
gulp.task('init', function() {
  // :NOTE: not a standard design pattern of dirp-tree;
  //        refer to its documentation for info
  return run.dirptree.generate(run.dirptree.config);
});

/* * * * * * * * * * * * * * | Launches application & runs according to arguments;
 * gulp launch ...           | refer to tasks below for optional arguments
 * * * * * * * * * * * * * * |/
 * @return {[stream]}
 */
// :TODO: fix issue of multiple spawned instances of nodemon by using event listeners
gulp.task('launch', run.sequence('lint',['pack','serve']));

/* * * * * * * * * * * * * * | Linting with ES-Lint using 'airbnb-react'
 * gulp lint ...             |_
 *           --dir app    -> |# source & diff against 'app' [default]
 *           --dir public -> |# "        ...        " 'app/public'
 *           --dir server -> |# "        ...        " 'app/server'
 * * * * * * * * * * * * * * |/
 * @return {[vinyl-stream]}
 */
gulp.task('lint', function() {
  return gulp.src(ENV_SRC)
    .pipe(run.changed(ENV_DIR))
    .pipe(run.lint());
});

/* * * * * * * * * * * * * * | WebPack tasks; config @ 'gulp_modules/config/web.config.js'
 * gulp pack ...             |_
 *           --env dev    -> |# default value; source-map, hot-reload, and watch
 *           --env dep    -> |# tree-shakes & uglifies to compress for deployment
 * * * * * * * * * * * * * * |/
 * @return {[stream]}
 */
gulp.task('pack', function() {

  // :TODO: bring following to their own tasks
  gulp.src(src.public.index)
    .pipe(gulp.dest(src.dest.root));
  gulp.src(src.public.assets)
    .pipe(gulp.dest(src.dest.assets));

  return gulp.src(src.public.jsx.index)
    .pipe(run.named())
    .pipe(web.pack(ENV_WPT))
    .pipe(gulp.dest(src.dest.root));
});

/* * * * * * * * * * * * * * | Launches application & runs according to arguments;
 * gulp serve ...            | refer to tasks below for optional arguments
 * * * * * * * * * * * * * * |/
 * @return {[nodemon-instance]}
 */
gulp.task('serve', function() {
  return run.nodemon({
    watch: ENV_DIR,
    ignore: src.app.ignore,
    ext: 'js jsx html scss',
    tasks: ['lint']
  });
});
