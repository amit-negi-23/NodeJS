let url = require("url");
let adr = 'http://localhost:8080/default.htm?year=2017&month=february';


let q = url.parse(adr, true);

let qdata = q.query;
console.log(qdata);