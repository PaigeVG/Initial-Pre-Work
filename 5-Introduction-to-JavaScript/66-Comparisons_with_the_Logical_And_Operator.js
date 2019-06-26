// && is the logical and operator, and evaluates to true if both its operands are truthy.

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes"
  }
  return "No";
}

// Change this value to test
testLogicalAnd(10);