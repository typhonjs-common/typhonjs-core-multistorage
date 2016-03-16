/**
 * MultiStorage.js (Universal) -- Defers to the browser or node version of MultiStorage depending on the runtime.
 *
 * Note: We use CJS here as ES6 imports are hoisted.
 */

'use strict';

/* eslint-disable */

var MultiStorage;

// Load the appropriate MultiStorage version if running in the browser or in Node.
/* istanbul ignore if */
if (typeof self === 'object' && self.self === self)
{
   /* istanbul ignore next */
   MultiStorage = require('../browser/MultiStorage.js');
}
else if (typeof global === 'object' && global.global === global)
{
   MultiStorage = require('../node/MultiStorage.js');
}

/* istanbul ignore if */
if (typeof MultiStorage === 'undefined')
{
   throw new Error('Unknown runtime.');
}

module.exports = MultiStorage.default ? MultiStorage.default : MultiStorage;