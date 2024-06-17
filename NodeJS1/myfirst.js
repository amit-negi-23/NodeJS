let http = require("http");
let user = require("./myfirstmodule")
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Today is "+ user.myDateTime())
    res.end();
    console.log("Server started")
}).listen(8080);

console.log(user.myDateTime())
