Bitcore P2P-monacocoin
=======

[![NPM Package](https://img.shields.io/npm/v/bitcore-p2p-monacocoin.svg?style=flat-square)](https://www.npmjs.org/package/bitcore-p2p-monacocoin)
[![Build Status](https://img.shields.io/travis/monacocoinpay/bitcore-p2p-monacocoin.svg?branch=master&style=flat-square)](https://travis-ci.org/monacocoinpay/bitcore-p2p-monacocoin)
[![Coverage Status](https://img.shields.io/coveralls/monacocoinpay/bitcore-p2p-monacocoin.svg?style=flat-square)](https://coveralls.io/r/monacocoinpay/bitcore-p2p-monacocoin?branch=master)

`bitcore-p2p-monacocoin` adds monacocoin protocol support for Bitcore-monacocoin.

See [the main bitcore-monacocoin repo](https://github.com/monacocoinpay/bitcore-monacocoin) for more information.

## Getting Started

```sh
npm install bitcore-p2p-monacocoin
```
In order to connect to the monacocoin network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('bitcore-p2p-monacocoin').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [bitcore guide](http://bitcore.io/guide/peer.html) on the usage of the `Peer` class.

## Contributing

See [CONTRIBUTING.md](https://github.com/monacocoinpay/bitcore-monacocoin/blob/master/CONTRIBUTING.md) on the main bitcore-monacocoin repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
