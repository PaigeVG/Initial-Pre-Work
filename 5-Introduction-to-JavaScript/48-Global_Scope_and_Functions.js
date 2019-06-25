// Variables declared without var get dumped into the global scope automatically, so don't do that.  

var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;  
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}