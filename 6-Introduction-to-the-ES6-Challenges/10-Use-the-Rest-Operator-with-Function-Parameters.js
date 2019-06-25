// To create a function that accepts an arbitrary number of args, use the rest operator. Read: "the rest of them" operator. ...args will store all passed argument in an array called args.

const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6