//create upper case
var http = require('http');

var uc = require ('/home/pi/node_modules/upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!!\n"));
  res.write(uc.upperCase("Here is an update"));
  res.end();
}).listen(8080);



