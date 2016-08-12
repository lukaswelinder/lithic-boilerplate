'use strict';

const req_res_log = function *(next){
  let start = new Date;
  yield next;
  let ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms + 'ms');
  this.set('X-Response-Time', ms + 'ms');
};

module.exports = req_res_log;