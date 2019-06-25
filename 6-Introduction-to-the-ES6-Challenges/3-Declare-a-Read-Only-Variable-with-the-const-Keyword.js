// const has all the features of let, except it can never be reassigned. This lets you explicitly call out variables that shouldn't change, as well as actually prevent them from being reassigned. 

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");