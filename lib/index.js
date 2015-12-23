'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function Subscription(emitter, func, key) {
  this.emitter = emitter;
  this.func = func;
  this.key = key;
}

Subscription.prototype.remove = function () {
  var listeners = this.emitter.listeners[this.key];
  if (!listeners || listeners.length === 0) {
    return;
  }
  var index = listeners.indexOf(this.func);
  if (index !== -1) {
    listeners.splice(index, 1);
  }
  return;
};

function KeypressCombinationEmitter() {
  var _this = this;

  this.map = {};
  this.listeners = {};
  window.addEventListener('keydown', function (e) {
    _this.map[e.keyCode ? e.keyCode : e.which] = true;
    var codes = Object.keys(_this.map);
    codes.sort();
    var key = codes.toString();
    if (_this.listeners[key]) {
      for (var i = 0; i < _this.listeners[key].length; i++) {
        _this.listeners[key][i]();
      }
    }
  });
  window.addEventListener('keyup', function (e) {
    delete _this.map[e.keyCode ? e.keyCode : e.which];
  });
}

KeypressCombinationEmitter.prototype.addListener = function () {
  var codes = [];
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      codes.push(arguments[i]);
    } else if (typeof arguments[i] === "function") {
      codes.sort();
      var key = codes.toString();
      this.listeners[key] = this.listeners[key] || [];
      this.listeners[key].push(arguments[i]);
      return new Subscription(this, arguments[i], key);
    }
  }
};

exports.default = KeypressCombinationEmitter;
module.exports = exports['default'];