'use strict';

/* eslint-disable no-console */

import MultiStorage from 'src/platforms/browser/Multistorage.js';

const storage = new MultiStorage();

storage.set('test', 1);
storage.set('date', new Date());

storage.get('test').then((value) => { console.log(`Test: ${value}`); });
storage.get('date').then((value) => { console.log(`Date: ${value}`); });

storage.getStore().then((value) => { console.log(`Storage: ${JSON.stringify(value)}`); });
