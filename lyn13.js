var http = require('http');
var url = require('url');
var port = process.argv[2];

http.createServer( (req,res) => {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	var json = new Object();
	var date = new Date(url.parse(req.url, true).query.iso);

	if (url.parse(req.url, true).pathname == '/api/parsetime') {
		json.hour = date.getHours();
		json.minute = date.getMinutes();
		json.second = date.getSeconds();
		res.end(JSON.stringify(json));
	}
	
	if (url.parse(req.url, true).pathname == '/api/unixtime') {
		json.unixtime = date.getTime();
		res.end(JSON.stringify(json));
	}


}).listen(port);

