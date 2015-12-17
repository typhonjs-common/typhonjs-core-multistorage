var System = System || global.System;

var pathPlatform = System.map['pathPlatform'];
var fullPath = 'src/' + pathPlatform + '/MultiStorage.js';

console.log('MultiStorage - pathPlatform: ' +pathPlatform);
console.log('MultiStorage - fullPath: ' +fullPath);

if (typeof pathPlatform !== 'string')
{
   throw new Error(`MultiStorage error: could not locate SystemJS mapped 'pathPlatform'.`)
}

var MultiStorage = require(fullPath);

//var MultiStorage = System.import('./' +pathPlatform + '/MultiStorage.js');

module.exports = MultiStorage;