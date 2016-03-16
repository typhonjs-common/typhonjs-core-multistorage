import { assert }                from 'chai';
import jspm                      from 'jspm';

import instrumentIstanbulSystem  from 'typhonjs-istanbul-instrument-jspm';

// Set the package path to the local root where config.js is located.
jspm.setPackagePath(process.cwd());

// Create SystemJS Loader
const System = new jspm.Loader();

// Replaces System.translate with version that provides Istanbul instrumentation.
instrumentIstanbulSystem(System);

let currentTime = new Date();

/**
 * These tests confirm the API of MultiStorage / Node.
 *
 * @test {MultiMap}
 */
describe('MultiStorage Test (Node)', () =>
{
   let MultiStorage;

   before(() =>
   {
      return System.import('src/platforms/node/MultiStorage.js').then((module) =>
      {
         MultiStorage = module['default'];
      });
   });

   it('localstorage set / get (file)', (done) =>
   {
      const storage = new MultiStorage();

      storage.clear();

      storage.set('date', currentTime);

      storage.get('date').then((value) =>
      {
         assert(currentTime.getTime() === new Date(value).getTime());
         done();
      })
      .catch((err) =>
      {
         done(err);
      });
   });

   it('localstorage get (file)', (done) =>
   {
      const storage = new MultiStorage();

      storage.get('date').then((value) =>
      {
         assert(currentTime.getTime() === new Date(value).getTime());

         // Clear storage for third test.
         storage.clear();

         done();
      })
      .catch((err) =>
      {
         done(err);
      });
   });

   it('localstorage get cleared (file)', (done) =>
   {
      const storage = new MultiStorage();

      storage.get('date').then((value) =>
      {
         assert(value === undefined);
         done();
      })
      .catch((err) =>
      {
         done(err);
      });
   });

   it('localstorage set / get (memory)', (done) =>
   {
      const storage = new MultiStorage("memory", true);

      currentTime = new Date();

      storage.set('date', currentTime);
      storage.get('date').then((value) =>
      {
         assert(currentTime.getTime() === new Date(value).getTime());
         done();
      })
      .catch((err) =>
      {
         done(err);
      });
   });

   it('localstorage get (memory)', (done) =>
   {
      const storage = new MultiStorage("memory", true);

      storage.get('date').then((value) =>
      {
         assert(value === undefined);
         done();
      })
      .catch((err) =>
      {
         done(err);
      });
   });
});