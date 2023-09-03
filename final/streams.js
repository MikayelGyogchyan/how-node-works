const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // solution 1
  // fs.readFile('test-file.txt', 'utf8', (err, data) => {
  //   if (err) console.log(err);;
  //   res.end(data);
  // })

  // Solution 2
  // const readable = fs.createReadStream('test-file.txt');
  // readable.on('data', (chunk) => {
  //   res.end(chunk);
  // })
  // readable.on('end', () => {
  //   res.end()
  // })
  // readable.on('error', (err) => {
  //   console.log(err);
  //   res.statusCode = 500; 
  //   res.end("File not found");
  // })

  // Solution 3
  const readable = fs.createReadStream('test-file.txt');
  readable.pipe(res);
  // readableSource.pipe(writeableDest)
})

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening...');
})
/*
The Solution 3, so the pipe is the easiest way of consuming and writing streams.
*/