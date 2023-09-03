// const EventEmitter = require('events');

// const myEmitter = new EventEmitter()

// myEmitter.on('newSale', () => {
//     console.log('There was a new sale!')
// })

// myEmitter.on('newSale', () => {
//   console.log('Costumer name: Jonas');
// })

// myEmitter.emit('newSale')

/*
There was a new sale!
Costumer name: Jonas
*/



//////////////////////////



// const EventEmitter = require('events');

// const myEmitter = new EventEmitter()

// myEmitter.on('newSale', () => {
//     console.log('There was a new sale!')
// })

// myEmitter.on('newSale', () => {
//   console.log('Costumer name: Jonas');
// })

// myEmitter.on('newSale', (stock) => {
//   console.log(`There are now ${stock} items left in stock!`);
// })

// myEmitter.emit('newSale', 9)

/*
There was a new sale!
Costumer name: Jonas
There are now 9 items left in stock!
*/



//////////////////////////





// const EventEmitter = require('events');


// class Sales extends EventEmitter{
//   constructor(){
//     super();
//   }
// }
// /*
// EventEmitter is a class, which we import from events into our Sales class,
// is the new class that we are creating, and that inherits everything from the 
// EventEmitter class.
// Extending the EventEmitter class is exactly how the different node modules 
// like HTTP, file system and many other Node core modules Implement events 
// internal. So all of them actually inherit from the EventEmitter class.
// */
// const myEmitter = new Sales()

// myEmitter.on('newSale', () => {
//     console.log('There was a new sale!')
// })

// myEmitter.on('newSale', () => {
//   console.log('Costumer name: Jonas');
// })

// myEmitter.on('newSale', (stock) => {
//   console.log(`There are now ${stock} items left in stock!`);
// })

// myEmitter.emit('newSale', 9)
/*
There was a new sale!
Costumer name: Jonas
There are now 9 items left in stock!
*/




////////////////////////////////




const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: Jonas");
});

myEmitter.on("newSale", stock => {
  console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9);

////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  console.log(req.url);
  res.end("Request received");
});
server.on("request", (req, res) => {
  console.log("Another request 😀");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
/*
There was a new sale!
Costumer name: Jonas
There are now 9 items left in stock.
Waiting for requests...

--- when we open http://127.0.0.1:8000/ we also see
Request received!
/
Another request 😀
Request received!
/favicon.ico
*/



