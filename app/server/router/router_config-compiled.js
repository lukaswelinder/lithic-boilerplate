'use strict';

var path = require('path');

var router_config = function () {

  var static_root = path.join(__dirname, '../../public/dist');
  var static_index = path.join(static_root, '/index.html');

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
}();

module.exports = router_config;

//# sourceMappingURL=router_config-compiled.js.map