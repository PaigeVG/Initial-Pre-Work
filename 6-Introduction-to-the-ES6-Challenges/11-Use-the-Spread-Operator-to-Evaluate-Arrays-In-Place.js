// Q: Why does Math.max.apply(null, someArray) work? If Math.max expects comma-seperated args, why would changing the calling context do anything?

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = []; // change this line
})();
console.log(arr2);

Math.max.apply()