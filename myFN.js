var http = require('http');
// ./ location means file is in the same folder
var dt = require ('./myMod');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});   
    res.write('The current date & time are :' + dt.myDateTime());
    res.end('');//end 
}).listen(8080);

//console to print
console.log('Server running at http://127.0.0.1:8080/')