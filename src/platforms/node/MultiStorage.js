import LocalStorage from './LocalStorage.js';

'use strict';

/**
 * Provides long or short term storage via node-localstorage or an in memory Map.
 */
export default class MultiStorage
{
   /**
    * Gets the main key.
    * @returns {*}
    */
   get mainKey() { return this._params.mainKey; }

   /**
    * Gets the serializer.
    * @returns {*}
    */
   get serializer() { return this._params.serializer; }

   /**
    * Get storage type.
    * @returns {*}
    */
   get storageType() { return this._params.storageType; }

   /**
    * Initializes MultiStorage. First parameter may be an optional object literal hash. When using an object hash
    * an additional parameter `filePath` may specify a file path for local storage. By default the `mainKey` is
    * used for the `filePath`.
    *
    * @param {string}   mainKey - Main key to store items for this MultiStorage instance.
    * @param {boolean}  session - Boolean to indicate session (short term) storage; default is long term (localStorage).
    * @param {Object}   serializer - Instance that conforms to JSON serialization.
    */
   constructor(mainKey = 'multistorage', session = false, serializer = JSON)
   {
      if (typeof mainKey === 'object')
      {
         const options = {};

         options.mainKey = mainKey.mainKey || 'multistorage';
         options.session = mainKey.session || false;
         options.serializer = mainKey.serializer;
         options.filePath = mainKey.filePath || `./${mainKey.mainKey}`;

         this._params =
         {
            filePath: options.filePath,
            mainKey: options.mainKey,
            storageType: options.session ? 'sessionStorage' : 'localStorage',
            serializer: options.serializer,
            storage: session ? new InMemoryStorage() : new LocalStorage(options.filePath)
         };
      }
      else
      {
         this._params =
         {
            filePath: `./${mainKey}`,
            mainKey,
            storageType: session ? 'sessionStorage' : 'localStorage',
            serializer,
            storage: session ? new InMemoryStorage() : new LocalStorage(`./${mainKey}`)
         };
      }

      if (!s_STORAGE_AVAILABLE(this._params.storage))
      {
         throw new Error(`Storage type '${this.storageType} not available.`);
      }
   }

   /**
    * Clears all entries associated with `mainKey`.
    *
    * @returns {Promise.<boolean>}
    */
   clear()
   {
      const storage = this._params.storage;
      storage.removeItem(this.mainKey);
      return Promise.resolve(true);
   }

   /**
    * Deletes entry filed under `key` in `mainKey` hash.
    *
    * @param {string}   key - Key to delete.
    * @returns {Promise.<boolean>}
    */
   delete(key)
   {
      const mainKey = this.mainKey;
      const serializer = this.serializer;
      const storage = this._params.storage;

      const storeJSON = storage.getItem(mainKey);
      if (typeof storeJSON === 'string')
      {
         const store = serializer.parse(storeJSON);
         delete store[key];
         storage.setItem(mainKey, serializer.stringify(store));
      }
      return Promise.resolve(true);
   }

   /**
    * Returns the value associated with `key` in `mainKey` hash.
    *
    * @param {string}   key - Key to retrieve a value for.
    * @returns {Promise.<undefined>}
    */
   get(key)
   {
      const mainKey = this.mainKey;
      const serializer = this.serializer;
      const storage = this._params.storage;

      let returnValue = undefined;

      const storeJSON = storage.getItem(mainKey);
      if (typeof storeJSON === 'string')
      {
         const store = serializer.parse(storeJSON);
         returnValue = store[key];
      }

      return Promise.resolve(returnValue);
   }

   /**
    * Returns the entire JSON object stored by `mainKey`.
    *
    * @returns {Promise.<undefined>}
    */
   getStore()
   {
      const mainKey = this.mainKey;
      const serializer = this.serializer;
      const storage = this._params.storage;

      let returnValue = undefined;

      const storeJSON = storage.getItem(mainKey);
      if (typeof storeJSON === 'string')
      {
         returnValue = serializer.parse(storeJSON);
      }

      return Promise.resolve(returnValue);
   }

   /**
    * Sets a value by the give key in the `mainKey` hash.
    *
    * @param {string}   key - Key for indexed storage.
    * @param {*}        value - Any valid value to serialize.
    * @returns {Promise.<boolean>}
    */
   set(key, value)
   {
      const mainKey = this.mainKey;
      const serializer = this.serializer;
      const storage = this._params.storage;

      const storeJSON = storage.getItem(mainKey);
      const store = typeof storeJSON === 'string' ? serializer.parse(storeJSON) : {};
      serializer.stringify(value);
      store[key] = value;

      try
      {
         const jsonObject = serializer.stringify(store);
         storage.setItem(mainKey, jsonObject);
         return Promise.resolve(true);
      }
      catch (err)
      {
         return Promise.resolve(false);
      }
   }

   /**
    * Sets an entire object to be serialized under `mainKey`.
    *
    * @param {*}  store - entire object store.
    * @returns {Promise.<boolean>}
    */
   setStore(store)
   {
      const mainKey = this.mainKey;
      const serializer = this.serializer;
      const storage = this._params.storage;

      try
      {
         const jsonObject = serializer.stringify(store);
         storage.setItem(mainKey, jsonObject);
         return Promise.resolve(true);
      }
      catch (err)
      {
         return Promise.resolve(false);
      }
   }
}

/**
 * Provides a session / in memory shim for storage on Node.
 */
class InMemoryStorage
{
   constructor() { this._storage = new Map(); }
   clear() { this._storage.clear(); }
   getItem(key) { return this._storage.get(key); }
   removeItem(key) { this._storage.delete(key); }
   setItem(key, value) { this._storage.set(key, value); }
}

// Private internal methods -----------------------------------------------------------------------------------------

/**
 * Tests if the storage mechanism is available.
 *
 * @param {Object}   storage - Storage instance.
 * @returns {boolean}
 */
const s_STORAGE_AVAILABLE = (storage) =>
{
   try
   {
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
   }
   catch(err)
   {
      return false;
   }
};