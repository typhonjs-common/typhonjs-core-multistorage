// node-localstorage doesn't provide a module.exports statement, so it's shimmed here.
module.exports = require("node-localstorage").LocalStorage;