// === is a stricter form of comparison that does NOT type coerce, and so does not elicit any more sassy Douglas Adams quotes from me. Giving it two values with different data types will always result in false.

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);