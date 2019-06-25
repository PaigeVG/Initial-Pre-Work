// function bodies AND parameter list both create their own local scope.

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "delicious potato stew"
  
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
// Now remove the console log line to pass the test
