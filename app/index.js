'use strict';

const server_config = require("./server/server_config");
const PORT = process.env.PORT || 8080;


process.on('unhandledRejection', function(e) {
  console.error('UNHANDLED:',e.message);
  console.log(e.stack);
});

server_config.listen(PORT);
