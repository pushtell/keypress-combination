# Keypress combination

[![NPM Version](https://badge.fury.io/js/keypress-combination.svg)](https://www.npmjs.com/package/keypress-combination)
[![Circle CI](https://circleci.com/gh/pushtell/keypress-combination.svg?style=shield)](https://circleci.com/gh/pushtell/keypress-combination)
[![Coverage Status](https://coveralls.io/repos/pushtell/keypress-combination/badge.svg?branch=master&service=github)](https://coveralls.io/github/pushtell/keypress-combination?branch=master)
[![Dependency Status](https://david-dm.org/pushtell/keypress-combination.svg)](https://david-dm.org/pushtell/keypress-combination)
[![NPM Downloads](https://img.shields.io/npm/dm/keypress-combination.svg?style=flat)](https://www.npmjs.com/package/keypress-combination)

Attach listeners to keypress combinations like CTRL-1. Lightweight and well documented.

```js
// Keycode for CTRL is 17, keycode for 1 is 49
emitter.addListener(17, 49, function() {
  console.log("Pressed CTRL-1");
});
```

See the demo at [jsfiddle.net/pushtell/164prhaz](https://jsfiddle.net/pushtell/164prhaz/).

Please [★ on GitHub](https://github.com/pushtell/keypress-combination)!

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<h1>Table of Contents</h1>

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
  - [`KeypressCombinationEmitter`](#keypresscombinationemitter)
    - [`constructor()`](#constructor)
    - [`.addListener(keyCode, [keyCode, ...] callback)`](#addlistenerkeycode-keycode--callback)
  - [`Subscription`](#subscription)
    - [`.remove()`](#remove)
- [Keycodes](#keycodes)
- [Tests](#tests)
  - [Browser Coverage](#browser-coverage)
  - [Running Tests](#running-tests)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```bash
npm install keypress-combination
```

## Usage

Try it [on JSFiddle](https://jsfiddle.net/pushtell/164prhaz/)

```js

var KeypressCombinationEmitter = require("keypress-combination");

var emitter = new KeypressCombinationEmitter();

// CTRL Keycode: 17
// 1 Keycode: 49
var subscription = emitter.addListener(17, 49, function() {
  console.log("Pressed CTRL-1");
});

// Remove the callback when no longer needed.
subscription.remove();

```

## API Reference

### `KeypressCombinationEmitter`

Emitter responsible for coordinating combination keypress events.

#### `constructor()`

Creates a new emitter.

* **Parameters:**
  * No parameters.

#### `.addListener(keyCode, [keyCode, ...] callback)`

Add an event listener

* **Return Type:** [&lt;Subscription&gt;](#subscription)
* **Parameters:**
  * `keyCode` - Character keycode. See the [keycodes section](#keycodes) for more information.
    * **Required**
    * **Type:** `number`
    * **Example:** `49`
  * `callback` - Callback function.
    * **Required**
    * **Type:** `function`
    * **Example:** `function() { console.log("Press") }`

### `Subscription`

#### `.remove()`

* **Return Type:** No return value
* **Parameters:**
  * No parameters.

## Keycodes

Note that keycodes are [not fully standardized across browsers](http://www.javascripter.net/faq/keycodes.htm).

Key | Code
--- | ----
Backspace | 8
Tab | 9
Enter | 13
Shift | 16
Ctrl | 17
Alt | 18
Pause/Break | 19
Caps Lock | 20
Escape | 27
(space) | 32
Page Up | 33
Page Down | 34
End | 35
Home | 36
Left Arrow | 37
Up Arrow | 38
Right Arrow | 39
Down Arrow | 40
Insert | 45
Delete | 46
0 | 48
1 | 49
2 | 50
3 | 51
4 | 52
5 | 53
6 | 54
7 | 55
8 | 56
9 | 57
A | 65
B | 66
C | 67
D | 68
E | 69
F | 70
G | 71
H | 72
I | 73
J | 74
K | 75
L | 76
M | 77
N | 78
O | 79
P | 80
Q | 81
R | 82
S | 83
T | 84
U | 85
V | 86
W | 87
X | 88
Y | 89
Z | 90
Left Window Key | 91
Right Window Key | 92
Select Key | 93
Numpad 0 | 96
Numpad 1 | 97
Numpad 2 | 98
Numpad 3 | 99
Numpad 4 | 100
Numpad 5 | 101
Numpad 6 | 102
Numpad 7 | 103
Numpad 8 | 104
Numpad 9 | 105
Multiply | 106
Add | 107
Subtract | 109
Decimal Point | 110
Divide | 111
F1 | 112
F2 | 113
F3 | 114
F4 | 115
F5 | 116
F6 | 117
F7 | 118
F8 | 119
F9 | 120
F10 | 121
F11 | 122
F12 | 123
Num Lock | 144
Scroll Lock | 145
Semi-Colon | 186
Equal Sign | 187
Comma | 188
Dash | 189
Period | 190
Forward Slash | 191
Grave Accent | 192
Open Bracket | 219
Back Slash | 220
Close Braket | 221
Single Quote | 222

## Tests

### Browser Coverage

[Karma](http://karma-runner.github.io/0.13/index.html) tests are performed on [Browserstack](https://www.browserstack.com/) in the following browsers:

* IE 9, Windows 7
* IE 10, Windows 7
* IE 11, Windows 7
* Opera (latest version), Windows 7
* Firefox (latest version), Windows 7
* Chrome (latest version), Windows 7
* Safari (latest version), OSX Yosemite
* Mobile Safari (latest version), iPhone 6, iOS 8.3

Please [let us know](https://github.com/pushtell/keypress-combination/issues/new) if a different configuration should be included here.

### Running Tests

Locally:

```bash

npm test

```

On [Browserstack](https://www.browserstack.com/):

```bash

BROWSERSTACK_USERNAME=YOUR_USERNAME BROWSERSTACK_ACCESS_KEY=YOUR_ACCESS_KEY npm test

```
