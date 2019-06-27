/* 
Q: Why does Math.max.apply(null, someArray) work? If Math.max expects comma-seperated args, why would changing the calling context do anything?

The spread operator will expand arrays and other expressions into places like function parameters and literals.
*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);

Math.max.apply()