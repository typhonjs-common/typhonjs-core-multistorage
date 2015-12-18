/**
 * MultiStorage.js (Universal) -- Defers to the browser or node version of MultiStorage depending on the runtime.
 *
 * Note: We use CJS here as ES6 imports are hoisted.
 */

'use strict';

/* eslint-disable */

var MultiStorage;

// Load the appropriate MultiStorage version if running in the browser or in Node.
if (typeof self === 'object' && self.self === self)
{
   MultiStorage = require('../browser/MultiStorage.js');
}
else if (typeof global === 'object' && global.global === global)
{
   MultiStorage = require('../node/MultiStorage.js');
}
else
{
   throw new Error('Unknown runtime.');
}

module.exports = MultiStorage;