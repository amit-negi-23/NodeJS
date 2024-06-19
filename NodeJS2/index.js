const http = require("http");
const fs = require("fs");

http.createServer(function(req, res){
    fs.readFile('homepage.html', function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
    
    console.log("Server listening on port 8080")
}).listen(8080);


fs.appendFile('notes.txt', 'Note1: Learning NodeJs', function(err){
    if(err) throw  err;
    console.log('Saved');
});