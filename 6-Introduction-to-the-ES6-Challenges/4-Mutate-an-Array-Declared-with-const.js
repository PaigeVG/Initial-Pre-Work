// const only prevents reassignment, not any change to its value. Mutable values assigned to const can still be changed!

const s = [5, 7, 2];
function editInPlace(threeElemArray) {
  "use strict";
  threeElemArray[0] = 2;
  threeElemArray[1] = 5;
  threeElemArray[2] = 7;
}
editInPlace(s);