!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {

!function(){var t=$__System;if("undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var s=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");t.set("@@cjs-helpers",t.newModule({getPathVars:function(t){var n,o=t.lastIndexOf("!");n=-1!=o?t.substr(0,o):t;var e=n.split("/");return e.pop(),e=e.join("/"),"file:///"==n.substr(0,8)?(n=n.substr(7),e=e.substr(7),isWindows&&(n=n.substr(1),e=e.substr(1))):s&&n.substr(0,s.length)===s&&(n=n.substr(s.length),e=e.substr(s.length)),{filename:n,dirname:e}}}))}();
$__System.register('2', ['3', '4', '5'], function (_export) {
   var _createClass, _classCallCheck, _Promise, MultiStorage, s_STORAGE_AVAILABLE;

   return {
      setters: [function (_) {
         _createClass = _['default'];
      }, function (_2) {
         _classCallCheck = _2['default'];
      }, function (_3) {
         _Promise = _3['default'];
      }],
      execute: function () {
         'use strict';

         /**
          * Provides short or long term storage via Window.localStorage or Window.sessionStorage.
          */

         MultiStorage = (function () {
            _createClass(MultiStorage, [{
               key: 'mainKey',

               /**
                * Gets the main key.
                * @returns {*}
                */
               get: function get() {
                  return this._params.mainKey;
               }

               /**
                * Gets the serializer.
                * @returns {*}
                */
            }, {
               key: 'serializer',
               get: function get() {
                  return this._params.serializer;
               }

               /**
                * Get storage type.
                * @returns {*}
                */
            }, {
               key: 'storageType',
               get: function get() {
                  return this._params.storageType;
               }

               /**
                * Initializes MultiStorage. First parameter may be an optional object literal hash.
                *
                * @param {string}   mainKey - Main key to store items for this MultiStorage instance.
                * @param {boolean}  session - Boolean to indicate session (short term) storage; default is long term (localStorage).
                * @param {Object}   serializer - Instance that conforms to JSON serialization.
                */
            }]);

            function MultiStorage() {
               var mainKey = arguments.length <= 0 || arguments[0] === undefined ? 'multistorage' : arguments[0];
               var session = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
               var serializer = arguments.length <= 2 || arguments[2] === undefined ? JSON : arguments[2];

               _classCallCheck(this, MultiStorage);

               if (typeof mainKey === 'object') {
                  var options = {};

                  options.mainKey = mainKey.mainKey || 'multistorage';
                  options.session = mainKey.session || false;
                  options.serializer = mainKey.serializer;

                  this._params = {
                     mainKey: options.mainKey,
                     storageType: options.session ? 'sessionStorage' : 'localStorage',
                     serializer: options.serializer
                  };
               } else {
                  this._params = {
                     mainKey: mainKey,
                     storageType: session ? 'sessionStorage' : 'localStorage',
                     serializer: serializer
                  };
               }

               if (!s_STORAGE_AVAILABLE(this.storageType)) {
                  throw new Error('Storage type \'' + this.storageType + ' not available.');
               }

               this._params.storage = window[this._params.storageType];
            }

            // Private internal methods -----------------------------------------------------------------------------------------

            /**
             * Tests if the storage mechanism is available.
             *
             * @param {string}   type - Storage type.
             * @returns {boolean}
             */

            /**
             * Clears all entries associated with `mainKey`.
             *
             * @returns {Promise.<boolean>}
             */

            _createClass(MultiStorage, [{
               key: 'clear',
               value: function clear() {
                  var storage = this._params.storage;
                  storage.removeItem(this.mainKey);
                  return _Promise.resolve(true);
               }

               /**
                * Deletes entry filed under `key` in `mainKey` hash.
                *
                * @param {string}   key - Key to delete.
                * @returns {Promise.<boolean>}
                */
            }, {
               key: 'delete',
               value: function _delete(key) {
                  var mainKey = this.mainKey;
                  var serializer = this.serializer;
                  var storage = this._params.storage;

                  var storeJSON = storage.getItem(mainKey);
                  if (typeof storeJSON === 'string') {
                     var store = serializer.parse(storeJSON);
                     delete store[key];
                     storage[mainKey] = serializer.stringify(store);
                  }
                  return _Promise.resolve(true);
               }

               /**
                * Returns the value associated with `key` in `mainKey` hash.
                *
                * @param {string}   key - Key to retrieve a value for.
                * @returns {Promise.<undefined>}
                */
            }, {
               key: 'get',
               value: function get(key) {
                  var mainKey = this.mainKey;
                  var serializer = this.serializer;
                  var storage = this._params.storage;

                  var returnValue = undefined;

                  var storeJSON = storage.getItem(mainKey);
                  if (typeof storeJSON === 'string') {
                     var store = serializer.parse(storeJSON);
                     returnValue = store[key];
                  }

                  return _Promise.resolve(returnValue);
               }

               /**
                * Returns the entire JSON object stored by `mainKey`.
                *
                * @returns {Promise.<undefined>}
                */
            }, {
               key: 'getStore',
               value: function getStore() {
                  var mainKey = this.mainKey;
                  var serializer = this.serializer;
                  var storage = this._params.storage;

                  var returnValue = undefined;

                  var storeJSON = storage.getItem(mainKey);
                  if (typeof storeJSON === 'string') {
                     returnValue = serializer.parse(storeJSON);
                  }

                  return _Promise.resolve(returnValue);
               }

               /**
                * Sets a value by the give key in the `mainKey` hash.
                *
                * @param {string}   key - Key for indexed storage.
                * @param {*}        value - Any valid value to serialize.
                * @returns {Promise.<boolean>}
                */
            }, {
               key: 'set',
               value: function set(key, value) {
                  var mainKey = this.mainKey;
                  var serializer = this.serializer;
                  var storage = this._params.storage;

                  var storeJSON = storage.getItem(mainKey);
                  var store = typeof storeJSON === 'string' ? serializer.parse(storeJSON) : {};

                  store[key] = value;

                  storage.setItem(mainKey, serializer.stringify(store));

                  return _Promise.resolve(true);
               }

               /**
                * Sets an entire object to be serialized under `mainKey`.
                *
                * @param {*}  store - entire object store.
                * @returns {Promise.<boolean>}
                */
            }, {
               key: 'setStore',
               value: function setStore(store) {
                  var mainKey = this.mainKey;
                  var serializer = this.serializer;
                  var storage = this._params.storage;

                  storage.setItem(mainKey, serializer.stringify(store));

                  return _Promise.resolve(true);
               }
            }]);

            return MultiStorage;
         })();

         _export('default', MultiStorage);

         s_STORAGE_AVAILABLE = function s_STORAGE_AVAILABLE(type) {
            try {
               var storage = window[type],
                   x = '__storage_test__';
               storage.setItem(x, x);
               storage.removeItem(x);
               return true;
            } catch (err) {
               return false;
            }
         };
      }
   };
});

$__System.registerDynamic("6", ["7"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('7');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8", ["6"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('6'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3", ["8"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _Object$defineProperty = $__require('8')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9", ["7", "a", "b", "c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var getDesc = $__require('7').getDesc,
      isObject = $__require('a'),
      anObject = $__require('b');
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
      try {
        set = $__require('c')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e", ["b", "f", "10"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = $__require('b'),
      aFunction = $__require('f'),
      SPECIES = $__require('10')('species');
  module.exports = function(O, D) {
    var C = anObject(O).constructor,
        S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("11", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("12", ["13"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('13').document && document.documentElement;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("14", ["a", "13"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('a'),
      document = $__require('13').document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("15", ["c", "11", "12", "14", "13", "16", "17"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var ctx = $__require('c'),
        invoke = $__require('11'),
        html = $__require('12'),
        cel = $__require('14'),
        global = $__require('13'),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function() {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function(event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i)
          args.push(arguments[i++]);
        queue[++counter] = function() {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if ($__require('16')(process) == 'process') {
        defer = function(id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel;
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function(id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function(id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })($__require('17'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("18", ["13", "15", "16", "17"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var global = $__require('13'),
        macrotask = $__require('15').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('16')(process) == 'process',
        head,
        last,
        notify;
    var flush = function() {
      var parent,
          domain,
          fn;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        fn = head.fn;
        if (domain)
          domain.enter();
        fn();
        if (domain)
          domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent)
        parent.enter();
    };
    if (isNode) {
      notify = function() {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, {characterData: true});
      notify = function() {
        node.data = toggle = -toggle;
      };
    } else if (Promise && Promise.resolve) {
      notify = function() {
        Promise.resolve().then(flush);
      };
    } else {
      notify = function() {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last)
        last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })($__require('17'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("19", ["10"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ITERATOR = $__require('10')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function() {
        safe = true;
      };
      arr[ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1a", ["7", "1b", "13", "c", "1c", "1d", "a", "b", "f", "1e", "1f", "9", "d", "10", "e", "18", "20", "21", "22", "23", "24", "19", "17"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var $ = $__require('7'),
        LIBRARY = $__require('1b'),
        global = $__require('13'),
        ctx = $__require('c'),
        classof = $__require('1c'),
        $export = $__require('1d'),
        isObject = $__require('a'),
        anObject = $__require('b'),
        aFunction = $__require('f'),
        strictNew = $__require('1e'),
        forOf = $__require('1f'),
        setProto = $__require('9').set,
        same = $__require('d'),
        SPECIES = $__require('10')('species'),
        speciesConstructor = $__require('e'),
        asap = $__require('18'),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        Wrapper;
    var testResolve = function(sub) {
      var test = new P(function() {});
      if (sub)
        test.constructor = Object;
      return P.resolve(test) === test;
    };
    var USE_NATIVE = function() {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
        if (!(P2.resolve(5).then(function() {}) instanceof P2)) {
          works = false;
        }
        if (works && $__require('20')) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', {get: function() {
              thenableThenGotten = true;
            }}));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var sameConstructor = function(a, b) {
      if (LIBRARY && a === P && b === Wrapper)
        return true;
      return same(a, b);
    };
    var getConstructor = function(C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function(it) {
      var then;
      return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
    };
    var PromiseCapability = function(C) {
      var resolve,
          reject;
      this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined)
          throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve), this.reject = aFunction(reject);
    };
    var perform = function(exec) {
      try {
        exec();
      } catch (e) {
        return {error: e};
      }
    };
    var notify = function(record, isReject) {
      if (record.n)
        return;
      record.n = true;
      var chain = record.c;
      asap(function() {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function(reaction) {
          var handler = ok ? reaction.ok : reaction.fail,
              resolve = reaction.resolve,
              reject = reaction.reject,
              result,
              then;
          try {
            if (handler) {
              if (!ok)
                record.h = true;
              result = handler === true ? value : handler(value);
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else
                resolve(result);
            } else
              reject(value);
          } catch (e) {
            reject(e);
          }
        };
        while (chain.length > i)
          run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject)
          setTimeout(function() {
            var promise = record.p,
                handler,
                console;
            if (isUnhandled(promise)) {
              if (isNode) {
                process.emit('unhandledRejection', value, promise);
              } else if (handler = global.onunhandledrejection) {
                handler({
                  promise: promise,
                  reason: value
                });
              } else if ((console = global.console) && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            }
            record.a = undefined;
          }, 1);
      });
    };
    var isUnhandled = function(promise) {
      var record = promise._d,
          chain = record.a || record.c,
          i = 0,
          reaction;
      if (record.h)
        return false;
      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise))
          return false;
      }
      return true;
    };
    var $reject = function(value) {
      var record = this;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function(value) {
      var record = this,
          then;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      try {
        if (record.p === value)
          throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          asap(function() {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!USE_NATIVE) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = this._d = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      $__require('21')(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var reaction = new PromiseCapability(speciesConstructor(this, P)),
              promise = reaction.promise,
              record = this._d;
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          record.c.push(reaction);
          if (record.a)
            record.a.push(reaction);
          if (record.s)
            notify(record, false);
          return promise;
        },
        'catch': function(onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
    $__require('22')(P, PROMISE);
    $__require('23')(PROMISE);
    Wrapper = $__require('24')[PROMISE];
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {reject: function reject(r) {
        var capability = new PromiseCapability(this),
            $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }});
    $export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {resolve: function resolve(x) {
        if (x instanceof P && sameConstructor(x.constructor, this))
          return x;
        var capability = new PromiseCapability(this),
            $$resolve = capability.resolve;
        $$resolve(x);
        return capability.promise;
      }});
    $export($export.S + $export.F * !(USE_NATIVE && $__require('19')(function(iter) {
      P.all(iter)['catch'](function() {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            resolve = capability.resolve,
            reject = capability.reject,
            values = [];
        var abrupt = perform(function() {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining)
            $.each.call(values, function(promise, index) {
              var alreadyCalled = false;
              C.resolve(promise).then(function(value) {
                if (alreadyCalled)
                  return;
                alreadyCalled = true;
                results[index] = value;
                --remaining || resolve(results);
              }, reject);
            });
          else
            resolve(results);
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            reject = capability.reject;
        var abrupt = perform(function() {
          forOf(iterable, false, function(promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      }
    });
  })($__require('17'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("25", ["26", "27", "28", "1a", "24"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('26');
  $__require('27');
  $__require('28');
  $__require('1a');
  module.exports = $__require('24').Promise;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5", ["25"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('25'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("26", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("29", ["2a", "2b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = $__require('2a'),
      defined = $__require('2b');
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("27", ["29", "2c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $at = $__require('29')(true);
  $__require('2c')(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2d", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function() {};
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2e", ["16"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = $__require('16');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2f", ["2e", "2b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var IObject = $__require('2e'),
      defined = $__require('2b');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("30", ["2d", "31", "32", "2f", "2c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var addToUnscopables = $__require('2d'),
      step = $__require('31'),
      Iterators = $__require('32'),
      toIObject = $__require('2f');
  module.exports = $__require('2c')(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("28", ["30", "32"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('30');
  var Iterators = $__require('32');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2b", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1b", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = true;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("33", ["7", "34", "22", "35", "10"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('7'),
      descriptor = $__require('34'),
      setToStringTag = $__require('22'),
      IteratorPrototype = {};
  $__require('35')(IteratorPrototype, $__require('10')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2c", ["1b", "1d", "36", "35", "37", "32", "33", "22", "7", "10"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var LIBRARY = $__require('1b'),
      $export = $__require('1d'),
      redefine = $__require('36'),
      hide = $__require('35'),
      has = $__require('37'),
      Iterators = $__require('32'),
      $iterCreate = $__require('33'),
      setToStringTag = $__require('22'),
      getProto = $__require('7').getProto,
      ITERATOR = $__require('10')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine(proto, key, methods[key]);
        }
      else
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("31", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("23", ["24", "7", "20", "10"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('24'),
      $ = $__require('7'),
      DESCRIPTORS = $__require('20'),
      SPECIES = $__require('10')('species');
  module.exports = function(KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES])
      $.setDesc(C, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("38", ["7", "35", "21", "c", "1e", "2b", "1f", "2c", "31", "39", "37", "a", "23", "20"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('7'),
      hide = $__require('35'),
      redefineAll = $__require('21'),
      ctx = $__require('c'),
      strictNew = $__require('1e'),
      defined = $__require('2b'),
      forOf = $__require('1f'),
      $iterDefine = $__require('2c'),
      step = $__require('31'),
      ID = $__require('39')('id'),
      $has = $__require('37'),
      isObject = $__require('a'),
      setSpecies = $__require('23'),
      DESCRIPTORS = $__require('20'),
      isExtensible = Object.isExtensible || isObject,
      SIZE = DESCRIPTORS ? '_s' : 'size',
      id = 0;
  var fastKey = function(it, create) {
    if (!isObject(it))
      return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!$has(it, ID)) {
      if (!isExtensible(it))
        return 'F';
      if (!create)
        return 'E';
      hide(it, ID, ++id);
    }
    return 'O' + it[ID];
  };
  var getEntry = function(that, key) {
    var index = fastKey(key),
        entry;
    if (index !== 'F')
      return that._i[index];
    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key)
        return entry;
    }
  };
  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function(that, iterable) {
        strictNew(that, C, NAME);
        that._i = $.create(null);
        that._f = undefined;
        that._l = undefined;
        that[SIZE] = 0;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        clear: function clear() {
          for (var that = this,
              data = that._i,
              entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p)
              entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        'delete': function(key) {
          var that = this,
              entry = getEntry(that, key);
          if (entry) {
            var next = entry.n,
                prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev)
              prev.n = next;
            if (next)
              next.p = prev;
            if (that._f == entry)
              that._f = next;
            if (that._l == entry)
              that._l = prev;
            that[SIZE]--;
          }
          return !!entry;
        },
        forEach: function forEach(callbackfn) {
          var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
              entry;
          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this);
            while (entry && entry.r)
              entry = entry.p;
          }
        },
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      if (DESCRIPTORS)
        $.setDesc(C.prototype, 'size', {get: function() {
            return defined(this[SIZE]);
          }});
      return C;
    },
    def: function(that, key, value) {
      var entry = getEntry(that, key),
          prev,
          index;
      if (entry) {
        entry.v = value;
      } else {
        that._l = entry = {
          i: index = fastKey(key, true),
          k: key,
          v: value,
          p: prev = that._l,
          n: undefined,
          r: false
        };
        if (!that._f)
          that._f = entry;
        if (prev)
          prev.n = entry;
        that[SIZE]++;
        if (index !== 'F')
          that._i[index] = entry;
      }
      return that;
    },
    getEntry: getEntry,
    setStrong: function(C, NAME, IS_MAP) {
      $iterDefine(C, NAME, function(iterated, kind) {
        this._t = iterated;
        this._k = kind;
        this._l = undefined;
      }, function() {
        var that = this,
            kind = that._k,
            entry = that._l;
        while (entry && entry.r)
          entry = entry.p;
        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          that._t = undefined;
          return step(1);
        }
        if (kind == 'keys')
          return step(0, entry.k);
        if (kind == 'values')
          return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
      setSpecies(NAME);
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("34", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("35", ["7", "34", "20"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('7'),
      createDesc = $__require('34');
  module.exports = $__require('20') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("36", ["35"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('35');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("21", ["36"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var redefine = $__require('36');
  module.exports = function(target, src) {
    for (var key in src)
      redefine(target, key, src[key]);
    return target;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1e", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("37", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("22", ["7", "37", "10"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var def = $__require('7').setDesc,
      has = $__require('37'),
      TAG = $__require('10')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3a", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("20", ["3a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = !$__require('3a')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3b", ["7", "13", "1d", "3a", "35", "21", "1f", "1e", "a", "22", "20"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('7'),
      global = $__require('13'),
      $export = $__require('1d'),
      fails = $__require('3a'),
      hide = $__require('35'),
      redefineAll = $__require('21'),
      forOf = $__require('1f'),
      strictNew = $__require('1e'),
      isObject = $__require('a'),
      setToStringTag = $__require('22'),
      DESCRIPTORS = $__require('20');
  module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = global[NAME],
        C = Base,
        ADDER = IS_MAP ? 'set' : 'add',
        proto = C && C.prototype,
        O = {};
    if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function() {
      new C().entries().next();
    }))) {
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      redefineAll(C.prototype, methods);
    } else {
      C = wrapper(function(target, iterable) {
        strictNew(target, C, NAME);
        target._c = new Base;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, target[ADDER], target);
      });
      $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','), function(KEY) {
        var IS_ADDER = KEY == 'add' || KEY == 'set';
        if (KEY in proto && !(IS_WEAK && KEY == 'clear'))
          hide(C.prototype, KEY, function(a, b) {
            if (!IS_ADDER && IS_WEAK && !isObject(a))
              return KEY == 'get' ? undefined : false;
            var result = this._c[KEY](a === 0 ? 0 : a, b);
            return IS_ADDER ? this : result;
          });
      });
      if ('size' in proto)
        $.setDesc(C.prototype, 'size', {get: function() {
            return this._c.size;
          }});
    }
    setToStringTag(C, NAME);
    O[NAME] = C;
    $export($export.G + $export.W + $export.F, O);
    if (!IS_WEAK)
      common.setStrong(C, NAME, IS_MAP);
    return C;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3c", ["38", "3b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var strong = $__require('38');
  $__require('3b')('Map', function(get) {
    return function Map() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    get: function get(key) {
      var entry = strong.getEntry(this, key);
      return entry && entry.v;
    },
    set: function set(key, value) {
      return strong.def(this, key === 0 ? 0 : key, value);
    }
  }, strong, true);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1d", ["13", "24", "c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = $__require('13'),
      core = $__require('24'),
      ctx = $__require('c'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("f", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c", ["f"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var aFunction = $__require('f');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3d", ["b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = $__require('b');
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3e", ["32", "10"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Iterators = $__require('32'),
      ITERATOR = $__require('10')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b", ["a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('a');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2a", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3f", ["2a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = $__require('2a'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("32", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {};
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("40", ["1c", "10", "32", "24"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var classof = $__require('1c'),
      ITERATOR = $__require('10')('iterator'),
      Iterators = $__require('32');
  module.exports = $__require('24').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1f", ["c", "3d", "3e", "b", "3f", "40"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ctx = $__require('c'),
      call = $__require('3d'),
      isArrayIter = $__require('3e'),
      anObject = $__require('b'),
      toLength = $__require('3f'),
      getIterFn = $__require('40');
  module.exports = function(iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function')
      throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn))
      for (length = toLength(iterable.length); length > index; index++) {
        entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      }
    else
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        call(iterator, f, step.value, entries);
      }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("16", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("41", ["13"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = $__require('13'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("39", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("13", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("10", ["41", "39", "13"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var store = $__require('41')('wks'),
      uid = $__require('39'),
      Symbol = $__require('13').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1c", ["16", "10"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = $__require('16'),
      TAG = $__require('10')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("42", ["1f", "1c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var forOf = $__require('1f'),
      classof = $__require('1c');
  module.exports = function(NAME) {
    return function toJSON() {
      if (classof(this) != NAME)
        throw TypeError(NAME + "#toJSON isn't generic");
      var arr = [];
      forOf(this, false, arr.push, arr);
      return arr;
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("43", ["1d", "42"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('1d');
  $export($export.P, 'Map', {toJSON: $__require('42')('Map')});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("24", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("44", ["26", "27", "28", "3c", "43", "24"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('26');
  $__require('27');
  $__require('28');
  $__require('3c');
  $__require('43');
  module.exports = $__require('24').Map;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("45", ["44"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('44'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("46", ["17"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    function normalizeArray(parts, allowAboveRoot) {
      var up = 0;
      for (var i = parts.length - 1; i >= 0; i--) {
        var last = parts[i];
        if (last === '.') {
          parts.splice(i, 1);
        } else if (last === '..') {
          parts.splice(i, 1);
          up++;
        } else if (up) {
          parts.splice(i, 1);
          up--;
        }
      }
      if (allowAboveRoot) {
        for (; up--; up) {
          parts.unshift('..');
        }
      }
      return parts;
    }
    var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
    var splitPath = function(filename) {
      return splitPathRe.exec(filename).slice(1);
    };
    exports.resolve = function() {
      var resolvedPath = '',
          resolvedAbsolute = false;
      for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path = (i >= 0) ? arguments[i] : process.cwd();
        if (typeof path !== 'string') {
          throw new TypeError('Arguments to path.resolve must be strings');
        } else if (!path) {
          continue;
        }
        resolvedPath = path + '/' + resolvedPath;
        resolvedAbsolute = path.charAt(0) === '/';
      }
      resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
        return !!p;
      }), !resolvedAbsolute).join('/');
      return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
    };
    exports.normalize = function(path) {
      var isAbsolute = exports.isAbsolute(path),
          trailingSlash = substr(path, -1) === '/';
      path = normalizeArray(filter(path.split('/'), function(p) {
        return !!p;
      }), !isAbsolute).join('/');
      if (!path && !isAbsolute) {
        path = '.';
      }
      if (path && trailingSlash) {
        path += '/';
      }
      return (isAbsolute ? '/' : '') + path;
    };
    exports.isAbsolute = function(path) {
      return path.charAt(0) === '/';
    };
    exports.join = function() {
      var paths = Array.prototype.slice.call(arguments, 0);
      return exports.normalize(filter(paths, function(p, index) {
        if (typeof p !== 'string') {
          throw new TypeError('Arguments to path.join must be strings');
        }
        return p;
      }).join('/'));
    };
    exports.relative = function(from, to) {
      from = exports.resolve(from).substr(1);
      to = exports.resolve(to).substr(1);
      function trim(arr) {
        var start = 0;
        for (; start < arr.length; start++) {
          if (arr[start] !== '')
            break;
        }
        var end = arr.length - 1;
        for (; end >= 0; end--) {
          if (arr[end] !== '')
            break;
        }
        if (start > end)
          return [];
        return arr.slice(start, end - start + 1);
      }
      var fromParts = trim(from.split('/'));
      var toParts = trim(to.split('/'));
      var length = Math.min(fromParts.length, toParts.length);
      var samePartsLength = length;
      for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
          samePartsLength = i;
          break;
        }
      }
      var outputParts = [];
      for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
      }
      outputParts = outputParts.concat(toParts.slice(samePartsLength));
      return outputParts.join('/');
    };
    exports.sep = '/';
    exports.delimiter = ':';
    exports.dirname = function(path) {
      var result = splitPath(path),
          root = result[0],
          dir = result[1];
      if (!root && !dir) {
        return '.';
      }
      if (dir) {
        dir = dir.substr(0, dir.length - 1);
      }
      return root + dir;
    };
    exports.basename = function(path, ext) {
      var f = splitPath(path)[2];
      if (ext && f.substr(-1 * ext.length) === ext) {
        f = f.substr(0, f.length - ext.length);
      }
      return f;
    };
    exports.extname = function(path) {
      return splitPath(path)[3];
    };
    function filter(xs, f) {
      if (xs.filter)
        return xs.filter(f);
      var res = [];
      for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs))
          res.push(xs[i]);
      }
      return res;
    }
    var substr = 'ab'.substr(-1) === 'b' ? function(str, start, len) {
      return str.substr(start, len);
    } : function(str, start, len) {
      if (start < 0)
        start = str.length + start;
      return str.substr(start, len);
    };
    ;
  })($__require('17'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("47", ["46"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('46');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("48", ["47"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('path') : $__require('47');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("49", ["48"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('48');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4a", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  if ($__System._nodeRequire) {
    module.exports = $__System._nodeRequire('fs');
  } else {
    exports.readFileSync = function(address) {
      var output;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', address, false);
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState == 4) {
          var status = xhr.status;
          if ((status > 399 && status < 600) || status == 400) {
            throw 'File read error on ' + address;
          } else
            output = xhr.responseText;
        }
      };
      xhr.send(null);
      return output;
    };
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4b", ["4a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('4a');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4c", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  }
  module.exports = EventEmitter;
  EventEmitter.EventEmitter = EventEmitter;
  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;
  EventEmitter.defaultMaxListeners = 10;
  EventEmitter.prototype.setMaxListeners = function(n) {
    if (!isNumber(n) || n < 0 || isNaN(n))
      throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
  };
  EventEmitter.prototype.emit = function(type) {
    var er,
        handler,
        len,
        args,
        i,
        listeners;
    if (!this._events)
      this._events = {};
    if (type === 'error') {
      if (!this._events.error || (isObject(this._events.error) && !this._events.error.length)) {
        er = arguments[1];
        if (er instanceof Error) {
          throw er;
        }
        throw TypeError('Uncaught, unspecified "error" event.');
      }
    }
    handler = this._events[type];
    if (isUndefined(handler))
      return false;
    if (isFunction(handler)) {
      switch (arguments.length) {
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        default:
          len = arguments.length;
          args = new Array(len - 1);
          for (i = 1; i < len; i++)
            args[i - 1] = arguments[i];
          handler.apply(this, args);
      }
    } else if (isObject(handler)) {
      len = arguments.length;
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      listeners = handler.slice();
      len = listeners.length;
      for (i = 0; i < len; i++)
        listeners[i].apply(this, args);
    }
    return true;
  };
  EventEmitter.prototype.addListener = function(type, listener) {
    var m;
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    if (!this._events)
      this._events = {};
    if (this._events.newListener)
      this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
    if (!this._events[type])
      this._events[type] = listener;
    else if (isObject(this._events[type]))
      this._events[type].push(listener);
    else
      this._events[type] = [this._events[type], listener];
    if (isObject(this._events[type]) && !this._events[type].warned) {
      var m;
      if (!isUndefined(this._maxListeners)) {
        m = this._maxListeners;
      } else {
        m = EventEmitter.defaultMaxListeners;
      }
      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
        if (typeof console.trace === 'function') {
          console.trace();
        }
      }
    }
    return this;
  };
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  EventEmitter.prototype.once = function(type, listener) {
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    var fired = false;
    function g() {
      this.removeListener(type, g);
      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }
    g.listener = listener;
    this.on(type, g);
    return this;
  };
  EventEmitter.prototype.removeListener = function(type, listener) {
    var list,
        position,
        length,
        i;
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    if (!this._events || !this._events[type])
      return this;
    list = this._events[type];
    length = list.length;
    position = -1;
    if (list === listener || (isFunction(list.listener) && list.listener === listener)) {
      delete this._events[type];
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
    } else if (isObject(list)) {
      for (i = length; i-- > 0; ) {
        if (list[i] === listener || (list[i].listener && list[i].listener === listener)) {
          position = i;
          break;
        }
      }
      if (position < 0)
        return this;
      if (list.length === 1) {
        list.length = 0;
        delete this._events[type];
      } else {
        list.splice(position, 1);
      }
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
    }
    return this;
  };
  EventEmitter.prototype.removeAllListeners = function(type) {
    var key,
        listeners;
    if (!this._events)
      return this;
    if (!this._events.removeListener) {
      if (arguments.length === 0)
        this._events = {};
      else if (this._events[type])
        delete this._events[type];
      return this;
    }
    if (arguments.length === 0) {
      for (key in this._events) {
        if (key === 'removeListener')
          continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners('removeListener');
      this._events = {};
      return this;
    }
    listeners = this._events[type];
    if (isFunction(listeners)) {
      this.removeListener(type, listeners);
    } else {
      while (listeners.length)
        this.removeListener(type, listeners[listeners.length - 1]);
    }
    delete this._events[type];
    return this;
  };
  EventEmitter.prototype.listeners = function(type) {
    var ret;
    if (!this._events || !this._events[type])
      ret = [];
    else if (isFunction(this._events[type]))
      ret = [this._events[type]];
    else
      ret = this._events[type].slice();
    return ret;
  };
  EventEmitter.listenerCount = function(emitter, type) {
    var ret;
    if (!emitter._events || !emitter._events[type])
      ret = 0;
    else if (isFunction(emitter._events[type]))
      ret = 1;
    else
      ret = emitter._events[type].length;
    return ret;
  };
  function isFunction(arg) {
    return typeof arg === 'function';
  }
  function isNumber(arg) {
    return typeof arg === 'number';
  }
  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }
  function isUndefined(arg) {
    return arg === void 0;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4d", ["4c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('4c');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4e", ["4d"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('events') : $__require('4d');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4f", ["4e"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('4e');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("50", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("51", ["50"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('50');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("52", ["51"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__System._nodeRequire ? process : $__require('51');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("17", ["52"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('52');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("53", ["49", "4b", "4f", "17"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    (function() {
      var JSONStorage,
          LocalStorage,
          QUOTA_EXCEEDED_ERR,
          StorageEvent,
          events,
          fs,
          path,
          _emptyDirectory,
          _rm,
          __extends = function(child, parent) {
            for (var key in parent) {
              if (__hasProp.call(parent, key))
                child[key] = parent[key];
            }
            function ctor() {
              this.constructor = child;
            }
            ctor.prototype = parent.prototype;
            child.prototype = new ctor();
            child.__super__ = parent.prototype;
            return child;
          },
          __hasProp = {}.hasOwnProperty;
      path = $__require('49');
      fs = $__require('4b');
      events = $__require('4f');
      _emptyDirectory = function(target) {
        var p,
            _i,
            _len,
            _ref,
            _results;
        _ref = fs.readdirSync(target);
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          p = _ref[_i];
          _results.push(_rm(path.join(target, p)));
        }
        return _results;
      };
      _rm = function(target) {
        if (fs.statSync(target).isDirectory()) {
          _emptyDirectory(target);
          return fs.rmdirSync(target);
        } else {
          return fs.unlinkSync(target);
        }
      };
      QUOTA_EXCEEDED_ERR = (function(_super) {
        __extends(QUOTA_EXCEEDED_ERR, _super);
        function QUOTA_EXCEEDED_ERR(_at_message) {
          this.message = _at_message != null ? _at_message : 'Unknown error.';
          if (Error.captureStackTrace != null) {
            Error.captureStackTrace(this, this.constructor);
          }
          this.name = this.constructor.name;
        }
        QUOTA_EXCEEDED_ERR.prototype.toString = function() {
          return this.name + ": " + this.message;
        };
        return QUOTA_EXCEEDED_ERR;
      })(Error);
      StorageEvent = (function() {
        function StorageEvent(_at_key, _at_oldValue, _at_newValue, _at_url, _at_storageArea) {
          this.key = _at_key;
          this.oldValue = _at_oldValue;
          this.newValue = _at_newValue;
          this.url = _at_url;
          this.storageArea = _at_storageArea != null ? _at_storageArea : 'localStorage';
        }
        return StorageEvent;
      })();
      LocalStorage = (function(_super) {
        var MetaKey,
            createMap;
        __extends(LocalStorage, _super);
        function LocalStorage(_at_location, _at_quota) {
          this.location = _at_location;
          this.quota = _at_quota != null ? _at_quota : 5 * 1024 * 1024;
          if (!(this instanceof LocalStorage)) {
            return new LocalStorage(this.location, this.quota);
          }
          this.length = 0;
          this.bytesInUse = 0;
          this.keys = [];
          this.metaKeyMap = createMap();
          this.eventUrl = "pid:" + process.pid;
          this._init();
          this.QUOTA_EXCEEDED_ERR = QUOTA_EXCEEDED_ERR;
        }
        MetaKey = (function() {
          function MetaKey(_at_key, _at_index) {
            this.key = _at_key;
            this.index = _at_index;
            if (!(this instanceof MetaKey)) {
              return new MetaKey(this.key, this.index);
            }
          }
          return MetaKey;
        })();
        createMap = function() {
          var Map;
          Map = function() {};
          Map.prototype = Object.create(null);
          return new Map();
        };
        LocalStorage.prototype._init = function() {
          var index,
              k,
              stat,
              _MetaKey,
              _decodedKey,
              _i,
              _keys,
              _len;
          try {
            stat = fs.statSync(this.location);
            if ((stat != null) && !stat.isDirectory()) {
              throw new Error("A file exists at the location '" + this.location + "' when trying to create/open localStorage");
            }
            this.bytesInUse = 0;
            this.length = 0;
            _keys = fs.readdirSync(this.location);
            for (index = _i = 0, _len = _keys.length; _i < _len; index = ++_i) {
              k = _keys[index];
              _decodedKey = decodeURIComponent(k);
              this.keys.push(_decodedKey);
              _MetaKey = new MetaKey(k, index);
              this.metaKeyMap[_decodedKey] = _MetaKey;
              stat = this.getStat(k);
              if ((stat != null ? stat.size : void 0) != null) {
                _MetaKey.size = stat.size;
                this.bytesInUse += stat.size;
              }
            }
            this.length = _keys.length;
          } catch (_error) {
            fs.mkdirSync(this.location);
          }
        };
        LocalStorage.prototype.setItem = function(key, value) {
          var encodedKey,
              evnt,
              existsBeforeSet,
              filename,
              hasListeners,
              metaKey,
              oldLength,
              oldValue,
              valueString,
              valueStringLength;
          hasListeners = events.EventEmitter.listenerCount(this, 'storage');
          oldValue = null;
          if (hasListeners) {
            oldValue = this.getItem(key);
          }
          key = key.toString();
          encodedKey = encodeURIComponent(key);
          filename = path.join(this.location, encodedKey);
          valueString = value.toString();
          valueStringLength = valueString.length;
          metaKey = this.metaKeyMap[key];
          existsBeforeSet = !!metaKey;
          if (existsBeforeSet) {
            oldLength = metaKey.size;
          } else {
            oldLength = 0;
          }
          if (this.bytesInUse - oldLength + valueStringLength > this.quota) {
            throw new QUOTA_EXCEEDED_ERR();
          }
          fs.writeFileSync(filename, valueString, 'utf8');
          if (!existsBeforeSet) {
            metaKey = new MetaKey(encodedKey, (this.keys.push(key)) - 1);
            metaKey.size = valueStringLength;
            this.metaKeyMap[key] = metaKey;
            this.length += 1;
            this.bytesInUse += valueStringLength;
          }
          if (hasListeners) {
            evnt = new StorageEvent(key, oldValue, value, this.eventUrl);
            return this.emit('storage', evnt);
          }
        };
        LocalStorage.prototype.getItem = function(key) {
          var filename,
              metaKey;
          key = key.toString();
          metaKey = this.metaKeyMap[key];
          if (!!metaKey) {
            filename = path.join(this.location, metaKey.key);
            return fs.readFileSync(filename, 'utf8');
          } else {
            return null;
          }
        };
        LocalStorage.prototype.getStat = function(key) {
          var filename;
          key = key.toString();
          filename = path.join(this.location, encodeURIComponent(key));
          try {
            return fs.statSync(filename);
          } catch (_error) {
            return null;
          }
        };
        LocalStorage.prototype.removeItem = function(key) {
          var evnt,
              filename,
              hasListeners,
              k,
              meta,
              metaKey,
              oldValue,
              v,
              _ref;
          key = key.toString();
          metaKey = this.metaKeyMap[key];
          if (!!metaKey) {
            hasListeners = events.EventEmitter.listenerCount(this, 'storage');
            oldValue = null;
            if (hasListeners) {
              oldValue = this.getItem(key);
            }
            delete this.metaKeyMap[key];
            this.length -= 1;
            this.bytesInUse -= metaKey.size;
            filename = path.join(this.location, metaKey.key);
            this.keys.splice(metaKey.index, 1);
            _ref = this.metaKeyMap;
            for (k in _ref) {
              v = _ref[k];
              meta = this.metaKeyMap[k];
              if (meta.index > metaKey.index) {
                meta.index -= 1;
              }
            }
            _rm(filename);
            if (hasListeners) {
              evnt = new StorageEvent(key, oldValue, null, this.eventUrl);
              return this.emit('storage', evnt);
            }
          }
        };
        LocalStorage.prototype.key = function(n) {
          return this.keys[n];
        };
        LocalStorage.prototype.clear = function() {
          var evnt;
          _emptyDirectory(this.location);
          this.metaKeyMap = createMap();
          this.keys = [];
          this.length = 0;
          this.bytesInUse = 0;
          if (events.EventEmitter.listenerCount(this, 'storage')) {
            evnt = new StorageEvent(null, null, null, this.eventUrl);
            return this.emit('storage', evnt);
          }
        };
        LocalStorage.prototype.getBytesInUse = function() {
          return this.bytesInUse;
        };
        LocalStorage.prototype._deleteLocation = function() {
          _rm(this.location);
          this.metaKeyMap = {};
          this.keys = [];
          this.length = 0;
          return this.bytesInUse = 0;
        };
        return LocalStorage;
      })(events.EventEmitter);
      JSONStorage = (function(_super) {
        __extends(JSONStorage, _super);
        function JSONStorage() {
          return JSONStorage.__super__.constructor.apply(this, arguments);
        }
        JSONStorage.prototype.setItem = function(key, value) {
          var newValue;
          newValue = JSON.stringify(value);
          return JSONStorage.__super__.setItem.call(this, key, newValue);
        };
        JSONStorage.prototype.getItem = function(key) {
          return JSON.parse(JSONStorage.__super__.getItem.call(this, key));
        };
        return JSONStorage;
      })(LocalStorage);
      exports.LocalStorage = LocalStorage;
      exports.JSONStorage = JSONStorage;
      exports.QUOTA_EXCEEDED_ERR = QUOTA_EXCEEDED_ERR;
    }).call(this);
  })($__require('17'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("54", ["53"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('53');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("55", ["54"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('54').LocalStorage;
  global.define = __define;
  return module.exports;
});

$__System.register('56', ['3', '4', '5', '45', '55'], function (_export) {
   var _createClass, _classCallCheck, _Promise, _Map, LocalStorage, MultiStorage, InMemoryStorage, s_STORAGE_AVAILABLE;

   return {
      setters: [function (_) {
         _createClass = _['default'];
      }, function (_2) {
         _classCallCheck = _2['default'];
      }, function (_3) {
         _Promise = _3['default'];
      }, function (_4) {
         _Map = _4['default'];
      }, function (_5) {
         LocalStorage = _5['default'];
      }],
      execute: function () {
         'use strict';

         'use strict';

         /**
          * Provides long or short term storage via node-localstorage or an in memory Map.
          */

         MultiStorage = (function () {
            _createClass(MultiStorage, [{
               key: 'mainKey',

               /**
                * Gets the main key.
                * @returns {*}
                */
               get: function get() {
                  return this._params.mainKey;
               }

               /**
                * Gets the serializer.
                * @returns {*}
                */
            }, {
               key: 'serializer',
               get: function get() {
                  return this._params.serializer;
               }

               /**
                * Get storage type.
                * @returns {*}
                */
            }, {
               key: 'storageType',
               get: function get() {
                  return this._params.storageType;
               }

               /**
                * Initializes MultiStorage. First parameter may be an optional object literal hash. When using an object hash
                * an additional parameter `filePath` may specify a file path for local storage. By default the `mainKey` is
                * used for the `filePath`.
                *
                * @param {string}   mainKey - Main key to store items for this MultiStorage instance.
                * @param {boolean}  session - Boolean to indicate session (short term) storage; default is long term (localStorage).
                * @param {Object}   serializer - Instance that conforms to JSON serialization.
                */
            }]);

            function MultiStorage() {
               var mainKey = arguments.length <= 0 || arguments[0] === undefined ? 'multistorage' : arguments[0];
               var session = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
               var serializer = arguments.length <= 2 || arguments[2] === undefined ? JSON : arguments[2];

               _classCallCheck(this, MultiStorage);

               if (typeof mainKey === 'object') {
                  var options = {};

                  options.mainKey = mainKey.mainKey || 'multistorage';
                  options.session = mainKey.session || false;
                  options.serializer = mainKey.serializer;
                  options.filePath = mainKey.filePath || './' + mainKey.mainKey;

                  this._params = {
                     filePath: options.filePath,
                     mainKey: options.mainKey,
                     storageType: options.session ? 'sessionStorage' : 'localStorage',
                     serializer: options.serializer,
                     storage: session ? new InMemoryStorage() : new LocalStorage(options.filePath)
                  };
               } else {
                  this._params = {
                     filePath: './' + mainKey,
                     mainKey: mainKey,
                     storageType: session ? 'sessionStorage' : 'localStorage',
                     serializer: serializer,
                     storage: session ? new InMemoryStorage() : new LocalStorage('./' + mainKey)
                  };
               }

               if (!s_STORAGE_AVAILABLE(this._params.storage)) {
                  throw new Error('Storage type \'' + this.storageType + ' not available.');
               }
            }

            /**
             * Provides a session / in memory shim for storage on Node.
             */

            /**
             * Clears all entries associated with `mainKey`.
             *
             * @returns {Promise.<boolean>}
             */

            _createClass(MultiStorage, [{
               key: 'clear',
               value: function clear() {
                  var storage = this._params.storage;
                  storage.removeItem(this.mainKey);
                  return _Promise.resolve(true);
               }

               /**
                * Deletes entry filed under `key` in `mainKey` hash.
                *
                * @param {string}   key - Key to delete.
                * @returns {Promise.<boolean>}
                */
            }, {
               key: 'delete',
               value: function _delete(key) {
                  var mainKey = this.mainKey;
                  var serializer = this.serializer;
                  var storage = this._params.storage;

                  var storeJSON = storage.getItem(mainKey);
                  if (typeof storeJSON === 'string') {
                     var store = serializer.parse(storeJSON);
                     delete store[key];
                     storage.setItem(mainKey, serializer.stringify(store));
                  }
                  return _Promise.resolve(true);
               }

               /**
                * Returns the value associated with `key` in `mainKey` hash.
                *
                * @param {string}   key - Key to retrieve a value for.
                * @returns {Promise.<undefined>}
                */
            }, {
               key: 'get',
               value: function get(key) {
                  var mainKey = this.mainKey;
                  var serializer = this.serializer;
                  var storage = this._params.storage;

                  var returnValue = undefined;

                  var storeJSON = storage.getItem(mainKey);
                  if (typeof storeJSON === 'string') {
                     var store = serializer.parse(storeJSON);
                     returnValue = store[key];
                  }

                  return _Promise.resolve(returnValue);
               }

               /**
                * Returns the entire JSON object stored by `mainKey`.
                *
                * @returns {Promise.<undefined>}
                */
            }, {
               key: 'getStore',
               value: function getStore() {
                  var mainKey = this.mainKey;
                  var serializer = this.serializer;
                  var storage = this._params.storage;

                  var returnValue = undefined;

                  var storeJSON = storage.getItem(mainKey);
                  if (typeof storeJSON === 'string') {
                     returnValue = serializer.parse(storeJSON);
                  }

                  return _Promise.resolve(returnValue);
               }

               /**
                * Sets a value by the give key in the `mainKey` hash.
                *
                * @param {string}   key - Key for indexed storage.
                * @param {*}        value - Any valid value to serialize.
                * @returns {Promise.<boolean>}
                */
            }, {
               key: 'set',
               value: function set(key, value) {
                  var mainKey = this.mainKey;
                  var serializer = this.serializer;
                  var storage = this._params.storage;

                  var storeJSON = storage.getItem(mainKey);
                  var store = typeof storeJSON === 'string' ? serializer.parse(storeJSON) : {};
                  serializer.stringify(value);
                  store[key] = value;

                  try {
                     var jsonObject = serializer.stringify(store);
                     storage.setItem(mainKey, jsonObject);
                     return _Promise.resolve(true);
                  } catch (err) {
                     return _Promise.resolve(false);
                  }
               }

               /**
                * Sets an entire object to be serialized under `mainKey`.
                *
                * @param {*}  store - entire object store.
                * @returns {Promise.<boolean>}
                */
            }, {
               key: 'setStore',
               value: function setStore(store) {
                  var mainKey = this.mainKey;
                  var serializer = this.serializer;
                  var storage = this._params.storage;

                  try {
                     var jsonObject = serializer.stringify(store);
                     storage.setItem(mainKey, jsonObject);
                     return _Promise.resolve(true);
                  } catch (err) {
                     return _Promise.resolve(false);
                  }
               }
            }]);

            return MultiStorage;
         })();

         _export('default', MultiStorage);

         InMemoryStorage = (function () {
            function InMemoryStorage() {
               _classCallCheck(this, InMemoryStorage);

               this._storage = new _Map();
            }

            // Private internal methods -----------------------------------------------------------------------------------------

            /**
             * Tests if the storage mechanism is available.
             *
             * @param {Object}   storage - Storage instance.
             * @returns {boolean}
             */

            _createClass(InMemoryStorage, [{
               key: 'clear',
               value: function clear() {
                  this._storage.clear();
               }
            }, {
               key: 'getItem',
               value: function getItem(key) {
                  return this._storage.get(key);
               }
            }, {
               key: 'removeItem',
               value: function removeItem(key) {
                  this._storage['delete'](key);
               }
            }, {
               key: 'setItem',
               value: function setItem(key, value) {
                  this._storage.set(key, value);
               }
            }]);

            return InMemoryStorage;
         })();

         s_STORAGE_AVAILABLE = function s_STORAGE_AVAILABLE(storage) {
            try {
               var x = '__storage_test__';
               storage.setItem(x, x);
               storage.removeItem(x);
               return true;
            } catch (err) {
               return false;
            }
         };
      }
   };
});

$__System.registerDynamic("1", ["2", "56"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var MultiStorage;
  if (typeof self === 'object' && self.self === self) {
    MultiStorage = $__require('2');
  } else if (typeof global === 'object' && global.global === global) {
    MultiStorage = $__require('56');
  } else {
    throw new Error('Unknown runtime.');
  }
  module.exports = MultiStorage;
  global.define = __define;
  return module.exports;
});

})
(function(factory) {
  module.exports = factory();
});