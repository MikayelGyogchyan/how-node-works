// const fs = require('fs');

// setTimeout(() => console.log("Timeout 1 finished"), 0);
// setImmediate(() => console.log("Immediate 1 finished"));

// fs.readFile('test-file.txt', () => {
//   console.log('I/O finished');
// })

// console.log('Hello from the top-level code');



///////////////////////////////////////////////////////



// const fs = require('fs');

// setTimeout(() => console.log("Timeout 2 finished"), 0);
// setImmediate(() => console.log("Immediate 2 finished"));


// fs.readFile('test-file.txt', () => {
//   console.log('I/O finished');
//   console.log('------------');

//   setTimeout(() => console.log("Timeout 2 finished"), 0);
//   setTimeout(() => console.log("Timeout 3 finished"), 3000);
//   setImmediate(() => console.log("Immediate 2 finished"));
// })

// console.log('Hello from the top-level code');

/*
------- THESE 4 ARE THE OUTPUTS THAT ARE NOT RUNNING IN THE EVENT LOOP
Hello from the top-level code
Timeout 2 finished
Immediate 2 finished
I/O finished
------- BUT THESE 3 ARE COMING FROM EVENT LOOP
Immediate 2 finished
Timeout 2 finished
Timeout 3 finished
*/




///////////////////////////////////////////////////////



// const fs = require('fs');

// setTimeout(() => console.log("Timeout 2 finished"), 0);
// setImmediate(() => console.log("Immediate 2 finished"));


// fs.readFile('test-file.txt', () => {
//   console.log('I/O finished');
//   console.log('------------');

//   setTimeout(() => console.log("Timeout 2 finished"), 0);
//   setTimeout(() => console.log("Timeout 3 finished"), 3000);
//   setImmediate(() => console.log("Immediate 2 finished"));

//   process.nextTick(() => console.log("Procss.nextTick"))
// })

// console.log('Hello from the top-level code');

/*
Hello from the top-level code
Timeout 2 finished
Immediate 2 finished
I/O finished
------------
Procss.nextTick       // executed first. nextTick is part of microtasks queue 
Immediate 2 finished
Timeout 2 finished
Timeout 3 finished
*/




///////////////////////////////////////////////////////



// const fs = require('fs');
// const crypto = require('crypto');

// const start = Date.now();

// setTimeout(() => console.log("Timeout 2 finished"), 0);
// setImmediate(() => console.log("Immediate 2 finished"));


// fs.readFile('test-file.txt', () => {
//   console.log('I/O finished');
//   console.log('------------');

//   setTimeout(() => console.log("Timeout 2 finished"), 0);
//   setTimeout(() => console.log("Timeout 3 finished"), 3000);
//   setImmediate(() => console.log("Immediate 2 finished"));

//   process.nextTick(() => console.log("Procss.nextTick"))

//   crypto.pbkdf2('password', 'salt', 100000, 1024,'sha512', () => {
//     console.log(Date.now() - start, 'Password encrypted'); // 1173 Password encrypted // around 1 sec to encrypt this password
//   })
// })

// console.log('Hello from the top-level code');

/*
Hello from the top-level code
Timeout 2 finished
Immediate 2 finished
I/O finished
------------
Procss.nextTick
Immediate 2 finished
Timeout 2 finished
1173 Password encrypted
Timeout 3 finished
*/



///////////////////////////////////////////////////////




// const fs = require('fs');
// const crypto = require('crypto');

// const start = Date.now();

// setTimeout(() => console.log("Timeout 2 finished"), 0);
// setImmediate(() => console.log("Immediate 2 finished"));


// fs.readFile('test-file.txt', () => {
//   console.log('I/O finished');
//   console.log('------------');

//   setTimeout(() => console.log("Timeout 2 finished"), 0);
//   setTimeout(() => console.log("Timeout 3 finished"), 3000);
//   setImmediate(() => console.log("Immediate 2 finished"));

//   process.nextTick(() => console.log("Procss.nextTick"))

//   crypto.pbkdf2('password', 'salt', 100000, 1024,'sha512', () => {
//     console.log(Date.now() - start, 'Password encrypted'); 
//   })
  
//   crypto.pbkdf2('password', 'salt', 100000, 1024,'sha512', () => {
//     console.log(Date.now() - start, 'Password encrypted'); 
//   })
  
//   crypto.pbkdf2('password', 'salt', 100000, 1024,'sha512', () => {
//     console.log(Date.now() - start, 'Password encrypted'); 
//   })
  
//   crypto.pbkdf2('password', 'salt', 100000, 1024,'sha512', () => {
//     console.log(Date.now() - start, 'Password encrypted'); 
//   })
// })

// console.log('Hello from the top-level code');

/*
There are 4 threads doing the work at the same time
They all tak aprox the same time

1738 Password encrypted
1773 Password encrypted
1804 Password encrypted
1817 Password encrypted 
*/



///////////////////////////////////////////////////////




// const fs = require("fs");
// const crypto = require("crypto");

// const start = Date.now();
// process.env.UV_THREADPOOL_SIZE = 1; // ADDED

// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("Immediate 1 finished"));

// fs.readFile("test-file.txt", () => {
//   console.log("I/O finished");
//   console.log("----------------");

//   setTimeout(() => console.log("Timer 2 finished"), 0);
//   setTimeout(() => console.log("Timer 3 finished"), 3000);
//   setImmediate(() => console.log("Immediate 2 finished"));

//   process.nextTick(() => console.log("Process.nextTick"));

//   crypto.pbkdf2('password', 'salt', 100000, 1024,'sha512', () => {
//     console.log(Date.now() - start, 'Password encrypted'); 
//   })
  
//   crypto.pbkdf2('password', 'salt', 100000, 1024,'sha512', () => {
//     console.log(Date.now() - start, 'Password encrypted'); 
//   })
  
//   crypto.pbkdf2('password', 'salt', 100000, 1024,'sha512', () => {
//     console.log(Date.now() - start, 'Password encrypted'); 
//   })
  
//   crypto.pbkdf2('password', 'salt', 100000, 1024,'sha512', () => {
//     console.log(Date.now() - start, 'Password encrypted'); 
//   })

// console.log("Hello from the top-level code");

/*
output:
-- crypto --
Now we have only 1 thread

1168 Password encrypted
2364 Password encrypted
3530 Password encrypted
4713 Password encrypted


-- ALL --
Hello from the top-level code
Timer 1 finished
Immediate 1 finished
I/O finished
----------------
1168 Password encrypted
2364 Password encrypted
3530 Password encrypted
4713 Password encrypted
Process.nextTick
Immediate 2 finished
Timer 2 finished
Timer 3 finished
*/



///////////////////////////////////////////////////////



// using the sync version of the same function
// crypto.pbkdf2Sync in sync 
// there is no difference how many threads we have. 
// This is executed synchronously. 
// code blocking

const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4; // ADDED to 4

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log("----------------");

  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finished"));

  process.nextTick(() => console.log("Process.nextTick"));

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");
});

console.log("Hello from the top-level code");

/*
1190 Password encrypted
2363 Password encrypted
3518 Password encrypted
4724 Password encrypted


Now these 4 will no longer run in the Event loop.
They will no longer be uffloaded in the thread pool.
Even if now we have 4 THREADPOOLs
They happen in a synchronous way, one after the other.


all output:

Hello from the top-level code
Timer 1 finished
Immediate 1 finished
I/O finished
----------------
1190 Password encrypted
2363 Password encrypted
3518 Password encrypted
4724 Password encrypted
Process.nextTick
Immediate 2 finished
Timer 2 finished
Timer 3 finished
*/
