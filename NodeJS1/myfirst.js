let http = require("http");
let user = require("./myfirstmodule")
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url)
    res.end();
    console.log("Server receive request")
}).listen(8080);
