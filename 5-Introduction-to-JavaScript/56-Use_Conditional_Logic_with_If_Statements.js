// Conditionals allow you to create a branching program. If statements are one type of conditional, and will only execute the code inside their block if their condition evaluates to true.

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) { 
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

// Change this value to test
trueOrFalse(true);