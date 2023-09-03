// console.log(arguments);
// console.log(require('module').wrapper);

// module.exports
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(2, 5)); // 7

// exports
// const calc2 = require("./test-module-2"); // we get an object containing all that properties 
const { add, multiply, divide } = require("./test-module-2")
console.log(add(2, 5)); // 7

// cashing
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
/*
Hello from the module  // we have this 1 time because of cashing
Log this beautiful text
Log this beautiful text
Log this beautiful text
*/
