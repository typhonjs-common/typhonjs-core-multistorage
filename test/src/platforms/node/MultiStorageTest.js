/* eslint-disable */

var assert = require('power-assert');

var MultiStorage = require('../../../../dist/platforms/universal/cjs/multistorage.js').default;

var currentTime = new Date();

/**
 * These tests confirm the API of MultiStorage / Node.
 *
 * @test {MultiMap}
 */
describe('MultiStorage Test', function()
{
   it('localstorage set / get (file)', (done) =>
   {
      var storage = new MultiStorage();

      storage.clear();

      storage.set('date', currentTime);

      storage.get('date').then(function(value)
      {
         assert(currentTime.getTime() === new Date(value).getTime());
         done();
      })
      .catch(function(err)
      {
         done(err);
      });
   });

   it('localstorage get (file)', (done) =>
   {
      var storage = new MultiStorage();

      storage.get('date').then(function(value)
      {
         assert(currentTime.getTime() === new Date(value).getTime());

         // Clear storage for third test.
         storage.clear();

         done();
      })
      .catch(function(err)
      {
         done(err);
      });
   });

   it('localstorage get cleared (file)', (done) =>
   {
      var storage = new MultiStorage();

      storage.get('date').then(function(value)
      {
         assert(value === undefined);
         done();
      })
      .catch(function(err)
      {
         done(err);
      });
   });

   it('localstorage set / get (memory)', (done) =>
   {
      var storage = new MultiStorage("memory", true);

      currentTime = new Date();

      storage.set('date', currentTime);
      storage.get('date').then(function(value)
      {
         assert(currentTime.getTime() === new Date(value).getTime());
         done();
      })
      .catch(function(err)
      {
         done(err);
      });
   });

   it('localstorage get (memory)', (done) =>
   {
      var storage = new MultiStorage("memory", true);

      storage.get('date').then(function(value)
      {
         assert(value === undefined);
         done();
      })
      .catch(function(err)
      {
         done(err);
      });
   });
});