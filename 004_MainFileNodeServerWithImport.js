let http = require("http");

let reqResHandler = require("./004_ReqResHandler.js");

http.createServer(reqResHandler).listen(7070);
