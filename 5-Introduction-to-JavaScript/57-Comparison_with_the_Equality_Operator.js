/*
Comparison operators return boolean values. Equality, == , is one such operator and compares two values, returning true if they are equivalent and false otherwise. 

JavaScript will use type coercion to compare two values with different data types. This has made a lot of people very angry and been widely regarded as a bad move.
*/

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);