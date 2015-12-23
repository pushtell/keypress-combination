import assert from "assert";
import KeypressCombinationEmitter from "../src/index";

// See http://stackoverflow.com/questions/596481/simulate-javascript-key-events

const simulateKeypress = function() {
  for(let i = 0; i < arguments.length; i++) {
    let code = arguments[i];
    var downEvent = document.createEvent('KeyboardEvent');
    Object.defineProperty(downEvent, 'keyCode', {
      get : function() {
        return this.keyCodeVal;
      }
    });
    Object.defineProperty(downEvent, 'which', {
      get : function() {
        return this.keyCodeVal;
      }
    });
    if (downEvent.initKeyboardEvent) {
      downEvent.initKeyboardEvent("keydown", true, true, document.defaultView, false, false, false, false, code, code);
    } else {
      downEvent.initKeyEvent("keydown", true, true, document.defaultView, false, false, false, false, code, 0);
    }
    downEvent.keyCodeVal = code;
    if (downEvent.keyCode !== code) {
      throw new Error("keyCode mismatch " + downEvent.keyCode + "(" + downEvent.which + ")");
    }
    document.dispatchEvent(downEvent);
    setTimeout(() => {
      var upEvent = document.createEvent('KeyboardEvent');
      Object.defineProperty(upEvent, 'keyCode', {
        get : function() {
          return this.keyCodeVal;
        }
      });
      Object.defineProperty(upEvent, 'which', {
        get : function() {
          return this.keyCodeVal;
        }
      });
      if (upEvent.initKeyboardEvent) {
        upEvent.initKeyboardEvent("keyup", true, true, document.defaultView, false, false, false, false, code, code);
      } else {
        upEvent.initKeyEvent("keyup", true, true, document.defaultView, false, false, false, false, code, 0);
      }
      upEvent.keyCodeVal = code;
      if (upEvent.keyCode !== code) {
        throw new Error("keyCode mismatch " + upEvent.keyCode + "(" + upEvent.which + ")");
      }
      document.dispatchEvent(upEvent);
    }, 100);
  }
};

describe("Keypress Combination", function() {
  this.timeout(30000);
  it("should callback after keypress.", function(done){
    const emitter = new KeypressCombinationEmitter();
    let count = 0;
    let subscription = emitter.addListener(17, 49, () => {
      count += 1;
    });
    simulateKeypress(17, 49);
    assert.equal(count, 1);
    setTimeout(done, 250);
  });
  it("should remove callback after keypress.", function (done){
    const emitter = new KeypressCombinationEmitter();
    let count = 0;
    let subscription = emitter.addListener(17, 49, () => {
      count += 1;
    });
    simulateKeypress(17, 49);
    subscription.remove();
    simulateKeypress(17, 49);
    assert.equal(count, 1);
    setTimeout(done, 250);
  });
});

