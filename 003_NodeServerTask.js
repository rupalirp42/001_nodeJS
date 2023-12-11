let http = require("http");
let fs = require("fs");

http
  .createServer((req, res) => {
    let myUrl = req.url;
    let myMethod = req.method;
    let userName = "";

    if (myUrl == "/") {
      res.write("<html>");
      res.write("<head>");
      res.write("<title>My Form</title>");
      res.write("</head>");
      res.write("<body>");
      res.write("<form action='/message' method='POST'>");
      res.write('<h1 style="color: red">My First Form through backend.</h1>');
      res.write('<input type="text" name="message">');
      res.write('<button type="submit">Submit</button>');
      res.write("</form>");
      res.write("</body>");
      res.write("</html>");
      return res.end();
    }

    if (myUrl == "/message" && myMethod == "POST") {
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      return req.on("end", () => {
        let parsedBody = Buffer.concat(body).toString();
        let mainBody = parsedBody.split("=");

        // fs.writeFileSync("003_output.txt", mainBody[1]);
        console.log(mainBody[1]);
        userName = mainBody[1];
        res.writeHead(302, { Location: `/success?name=${userName}` });
        return res.end();
      });
    }

    if (myUrl.startsWith("/success")) {
      const urlParams = new URLSearchParams(req.url.split("?")[1]);
      const userName = urlParams.get("name");

      
      res.write("<html>");
      res.write("<head>");
      res.write("<title>Success</title>");
      res.write("</head>");
      res.write("<body>");
      res.write(`<h1>Your Name is ${userName}</h1>`);
      res.write("<a href='/'>Go Back</a>");
      res.write("</body>");
      res.write("</html>");
      return res.end();
    }
  })
  .listen(8080);
