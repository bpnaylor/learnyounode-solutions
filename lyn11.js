var http = require('http');
var fs = require('fs');

var portnumber = process.argv[2];
var filename = process.argv[3];

var server = http.createServer( (req,res) => {
	var src = fs.createReadStream(filename);
	src.pipe(res);
});

server.listen(portnumber);

// solution 2

// require('http').createServer( (req,res) => {
// 	res.writeHead(200, {'content-type': 'text/plain'});
// 	require('fs').createReadStream(process.argv[3]).pipe(res);
// }).listen(Number(process.argv[2]));