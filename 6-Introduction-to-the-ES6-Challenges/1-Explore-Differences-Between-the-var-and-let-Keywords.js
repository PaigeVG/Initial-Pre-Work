// let is like var but better in basically every way. let only allows you to declare a variable once. strict mode disallows common errors and unsafe code.

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();