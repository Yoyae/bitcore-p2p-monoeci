'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on bitcore-p2p-monoeci Module {0}'
};

module.exports = require('bitcore-lib-monoeci').errors.extend(spec);
