// Generated by CoffeeScript 1.3.1
var __hasProp = {}.hasOwnProperty;

define(['underscore', 'chaplin/lib/subscriber'], function(_, Subscriber) {
  'use strict';

  var ChaplinController;
  return ChaplinController = (function() {

    ChaplinController.name = 'ChaplinController';

    _(ChaplinController.prototype).extend(Subscriber);

    ChaplinController.prototype.view = null;

    ChaplinController.prototype.currentId = null;

    function ChaplinController() {
      this.initialize.apply(this, arguments);
    }

    ChaplinController.prototype.initialize = function() {};

    ChaplinController.prototype.disposed = false;

    ChaplinController.prototype.dispose = function() {
      /*console.debug 'Controller#dispose', this, 'disposed?', @disposed
      */

      var obj, prop, properties, _i, _len;
      if (this.disposed) {
        return;
      }
      for (prop in this) {
        if (!__hasProp.call(this, prop)) continue;
        obj = this[prop];
        if (obj && typeof obj.dispose === 'function') {
          obj.dispose();
          delete this[prop];
        }
      }
      this.unsubscribeAllEvents();
      properties = ['currentId'];
      for (_i = 0, _len = properties.length; _i < _len; _i++) {
        prop = properties[_i];
        delete this[prop];
      }
      this.disposed = true;
      return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
    };

    return ChaplinController;

  })();
});
