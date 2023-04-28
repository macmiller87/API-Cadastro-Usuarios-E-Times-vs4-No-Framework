const http = require("node:http");
const handler = require("./controller/Controller");

const app = http.createServer(handler)
    .listen(8080, () => console.log("listening at pot 8080"));
    
module.exports = app;