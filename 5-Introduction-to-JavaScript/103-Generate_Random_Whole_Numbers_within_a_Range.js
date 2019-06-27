// generate random whole numbers in a range by taking the size of the range (max - min + 1) multiplying by a fraction between 0 and 1 (Math.random() * .... ).  and taking the floor of that to chop off the decimal portion (Math.floor(...). Finally, add the offset (... + min).

// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

// Change these values to test your function
var myRandom = randomRange(5, 15);