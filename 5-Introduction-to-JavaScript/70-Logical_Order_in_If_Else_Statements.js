// Conditionals evaluate in order. In a chain of if and else if, the first true condition will be evaluated and the others will not be checked downstream.

function orderMyLogic(val) {
  if (val < 5) {
  return "Less than 5";
  }
  else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);