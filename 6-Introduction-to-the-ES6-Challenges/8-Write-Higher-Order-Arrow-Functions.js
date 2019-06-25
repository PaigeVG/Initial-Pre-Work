/*
 Use arrow functions to succinctly process collections using higher-order functions.
 
 JavaScript integers and floats are actually all of type number.

 Compute n - Math.floor(n) to see if a number has a decimal portion or not.
 */

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  const squaredIntegers = arr.filter((n) => (n > 0) && (n - Math.floor(n) == 0))
                             .map(n => n**2);
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);