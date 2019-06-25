// Queues are a data structure that act just like real life lines, or as the british call them... well... queues! Data can be popped off the front or added to the back. Otherwise, there's no "cutting in line".

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));