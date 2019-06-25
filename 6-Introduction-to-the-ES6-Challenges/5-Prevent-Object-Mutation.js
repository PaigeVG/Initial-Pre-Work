// call Object.freeze with an object as its argument to render it immutable. Attempts to change the object will be silently ignored.



function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();