let http = require("http");
let url  = require("url");

let user = require("./myfirstmodule")
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let q= url.parse(req.url, true).query;
    let text = q.name + " - " + q.email
    res.write(text);
    res.end();
    console.log("Server receive request")
}).listen(8080);
