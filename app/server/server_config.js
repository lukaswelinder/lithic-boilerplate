'use strict';

const fs = require('fs');
const koa = require('koa');
const path = require('path');

const router_config = require('./router/router_config');
const app = koa();

// Logging (method, path, response-time):
app.use(require('./router/utils/req_res_log'));

// Sends index.html for valid routes:
// :TODO: server-side rendering with react
app.use(require('./router/utils/route_spa')(router_config.routes));

// Middleware (uncomment json parsing and place api route handler below):
// app.use(require('koa-parse-json')());
app.use(require('koa-static')(router_config.static.root));



module.exports = app;