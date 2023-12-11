var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    fs.writeFileSync("Rupali.txt", "I m Rupali.");
    res.write('<h1 style="color: red">Hello World</h1>');
    console.log(req.url);
    console.log(req.method);
  })
  .listen(5000);

// http
//   .createServer((req, res) => {
//     if (req.url == "/a") {
//       res.write('<h1 style="color: red">Hello World...</h1>');
//     }
//     if (req.url == "/b") {
//       fs.writeFileSync("india.txt", "Hello India");
//     }
//     res.end();
//   })
//   .listen(8080);
