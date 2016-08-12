'use strict';

var fs = require('fs');
var koa = require('koa');
var path = require('path');

var router_config = require('./router/router_config');
var app = koa();

// Logging (method, path, response-time):
app.use(require('./router/utils/req_res_log'));

// Sends index.html for valid routes:
// :TODO: server-side rendering with react
app.use(require('./router/utils/route_spa')(router_config.routes));

// Middleware (uncomment json parsing and place api route handler below):
// app.use(require('koa-parse-json')());
app.use(require('koa-static')(router_config.static.root));

module.exports = app;

//# sourceMappingURL=server_config-compiled.js.map