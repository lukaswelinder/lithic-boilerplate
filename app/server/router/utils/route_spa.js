'use strict';

module.exports = function(routes) {
  return function *(next){
    if(this.method === 'GET' && routes[this.path])
      this.path = '/';
    yield next;
  }
};