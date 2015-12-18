/**
 * Provides short or long term storage via Window.localStorage or Window.sessionStorage.
 */
export default class MultiStorage
{
   get mainKey() { return this._params.mainKey; }
   get serializer() { return this._params.serializer; }
   get storageType() { return this._params.storageType; }

   constructor(mainKey = 'multistorage', session = false, serializer = JSON)
   {
      this._params =
      {
         mainKey: mainKey,
         storageType: session ? 'sessionStorage' : 'localStorage',
         serializer: serializer
      };

      if (!s_STORAGE_AVAILABLE(this.storageType))
      {
         throw new Error(`Storage type '${this.mainKey} not available.`);
      }

      this._params.storage = window[this._params.storageType];
   }

   clear()
   {
      const storage = this._params.storage;
      storage.removeItem(this.mainKey);
      return Promise.resolve(true);
   }

   delete(key)
   {
      const mainKey = this.mainKey;
      const serializer = this.serializer;
      const storage = this._params.storage;

      let storeJSON = storage.getItem(mainKey);
      if (typeof storeJSON === 'string')
      {
         const store = serializer.parse(storeJSON);
         delete store[key];
         storage[mainKey] = serializer.stringify(store);
      }
      return Promise.resolve(true);
   }

   get(key)
   {
      const mainKey = this.mainKey;
      const serializer = this.serializer;
      const storage = this._params.storage;

      let returnValue = undefined;

      let storeJSON = storage.getItem(mainKey);
      if (typeof storeJSON === 'string')
      {
         const store = serializer.parse(storeJSON);
         returnValue = store[key];
      }

      return Promise.resolve(returnValue);
   }

   getStore()
   {
      const mainKey = this.mainKey;
      const serializer = this.serializer;
      const storage = this._params.storage;

      let returnValue = undefined;

      let storeJSON = storage.getItem(mainKey);
      if (typeof storeJSON === 'string')
      {
         returnValue = serializer.parse(storeJSON);
      }

      return Promise.resolve(returnValue);
   }

   set(key, value)
   {
      const mainKey = this.mainKey;
      const serializer = this.serializer;
      const storage = this._params.storage;

      let storeJSON = storage.getItem(mainKey);
      let store = typeof storeJSON === 'string' ? serializer.parse(storeJSON) : {};

      store[key] = value;

      storage.setItem(mainKey, serializer.stringify(store));

      return Promise.resolve(true);
   }

   setStore(store)
   {
      const mainKey = this.mainKey;
      const serializer = this.serializer;
      const storage = this._params.storage;

      storage.setItem(mainKey, serializer.stringify(store));

      return Promise.resolve(true);
   }
}

// Private internal methods -----------------------------------------------------------------------------------------

const s_STORAGE_AVAILABLE = (type) =>
{
   try
   {
      const storage = window[type], x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
   }
   catch(err)
   {
      return false;
   }
};