'use strict';

/**
 * Provides short or long term storage via Window.localStorage or Window.sessionStorage.
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
    * Initializes MultiStorage. First parameter may be an optional object literal hash.
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

         this._params =
         {
            mainKey: options.mainKey,
            storageType: options.session ? 'sessionStorage' : 'localStorage',
            serializer: options.serializer
         };
      }
      else
      {
         this._params =
         {
            mainKey,
            storageType: session ? 'sessionStorage' : 'localStorage',
            serializer
         };
      }

      if (!s_STORAGE_AVAILABLE(this.storageType))
      {
         throw new Error(`Storage type '${this.storageType} not available.`);
      }

      this._params.storage = window[this._params.storageType];
   }

   /**
    * Clears all entries associated with `mainKey`.
    *
    * @returns {Promise.<boolean>}
    */
   clear()
   {
      return Promise.resolve(this.clearSync());
   }

   /**
    * Clears all entries associated with `mainKey`.
    *
    * @returns {boolean}
    */
   clearSync()
   {
      const storage = this._params.storage;
      storage.removeItem(this.mainKey);
      return true;
   }

   /**
    * Deletes entry filed under `key` in `mainKey` hash.
    *
    * @param {string}   key - Key to delete.
    * @returns {Promise.<boolean>}
    */
   delete(key)
   {
      return Promise.resolve(this.deleteSync(key));
   }

   /**
    * Deletes entry filed under `key` in `mainKey` hash.
    *
    * @param {string}   key - Key to delete.
    * @returns {boolean}
    */
   deleteSync(key)
   {
      const mainKey = this.mainKey;
      const serializer = this.serializer;
      const storage = this._params.storage;

      const storeJSON = storage.getItem(mainKey);
      if (typeof storeJSON === 'string')
      {
         const store = serializer.parse(storeJSON);
         delete store[key];
         storage[mainKey] = serializer.stringify(store);
      }
      return true;
   }

   /**
    * Returns the value associated with `key` in `mainKey` hash.
    *
    * @param {string}   key - Key to retrieve a value for.
    * @returns {Promise.<*>}
    */
   get(key)
   {
      return Promise.resolve(this.getSync(key));
   }

   /**
    * Returns the value associated with `key` in `mainKey` hash.
    *
    * @param {string}   key - Key to retrieve a value for.
    * @returns {*}
    */
   getSync(key)
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

      return returnValue;
   }

   /**
    * Returns the entire JSON object stored by `mainKey`.
    *
    * @returns {Promise.<undefined>}
    */
   getStore()
   {
      return Promise.resolve(this.getStoreSync());
   }

   /**
    * Returns the entire JSON object stored by `mainKey`.
    *
    * @returns {*}
    */
   getStoreSync()
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

      return returnValue;
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
      return Promise.resolve(this.setSync(key, value));
   }

   /**
    * Sets a value by the give key in the `mainKey` hash.
    *
    * @param {string}   key - Key for indexed storage.
    * @param {*}        value - Any valid value to serialize.
    * @returns {boolean}
    */
   setSync(key, value)
   {
      const mainKey = this.mainKey;
      const serializer = this.serializer;
      const storage = this._params.storage;

      const storeJSON = storage.getItem(mainKey);
      const store = typeof storeJSON === 'string' ? serializer.parse(storeJSON) : {};

      store[key] = value;

      storage.setItem(mainKey, serializer.stringify(store));

      return true;
   }

   /**
    * Sets an entire object to be serialized under `mainKey`.
    *
    * @param {*}  store - entire object store.
    * @returns {Promise.<boolean>}
    */
   setStore(store)
   {
      return Promise.resolve(this.setStoreSync(store));
   }

   /**
    * Sets an entire object to be serialized under `mainKey`.
    *
    * @param {*}  store - entire object store.
    * @returns {boolean}
    */
   setStoreSync(store)
   {
      const mainKey = this.mainKey;
      const serializer = this.serializer;
      const storage = this._params.storage;

      storage.setItem(mainKey, serializer.stringify(store));

      return true;
   }
}

// Private internal methods -----------------------------------------------------------------------------------------

/**
 * Tests if the storage mechanism is available.
 *
 * @param {string}   type - Storage type.
 * @returns {boolean}
 */
const s_STORAGE_AVAILABLE = (type) =>
{
   try
   {
      const storage = window[type], x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
   }
   catch (err)
   {
      return false;
   }
};