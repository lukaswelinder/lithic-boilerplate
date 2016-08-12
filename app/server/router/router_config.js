'use strict';

const path = require('path');


const router_config = (function() {

  let static_root = path.join(__dirname, '../../public/dist');
  let static_index = path.join(static_root, '/index.html');

  return {
    static: {
      root: static_root,
      index: static_index,
      maxage: 2000
    },
    routes: {
      "/": true,
      "/about": true
    }
  };

})();

module.exports = router_config;