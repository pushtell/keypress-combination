

function Subscription(emitter, func, key){
  this.emitter = emitter;
  this.func = func;
  this.key = key;
}

Subscription.prototype.remove = function() {
  let listeners = this.emitter.listeners[this.key];
  if(!listeners || listeners.length === 0) {
    return;
  }
  let index = listeners.indexOf(this.func);
  if (index !== -1) {
    listeners.splice(index, 1);
  }
  return;
};

function KeypressCombinationEmitter() {
  this.map = {};
  this.listeners = {};
  window.addEventListener('keydown', (e) => {
    this.map[e.keyCode ? e.keyCode : e.which] = true;
    const codes = Object.keys(this.map);
    codes.sort();
    const key = codes.toString();
    if(this.listeners[key]) {
      for(let i = 0; i < this.listeners[key].length; i++) {
        this.listeners[key][i]();
      }
    }
  });
  window.addEventListener('keyup', (e) => {
    delete this.map[e.keyCode ? e.keyCode : e.which];
  });
}

KeypressCombinationEmitter.prototype.addListener = function() {
  const codes = [];
  for(let i = 0; i < arguments.length; i++) {
    if(typeof arguments[i] === "number") {
      codes.push(arguments[i]);
    } else if(typeof arguments[i] === "function") {
      codes.sort();
      const key = codes.toString();
      this.listeners[key] = this.listeners[key] || [];
      this.listeners[key].push(arguments[i]);
      return new Subscription(this, arguments[i], key);
    }
  }
};

export default KeypressCombinationEmitter;