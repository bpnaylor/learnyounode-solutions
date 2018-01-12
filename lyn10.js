var net = require('net');
var strftime = require('strftime');
var date = new Date();

var server = net.createServer(function(socket) {
	socket.end(strftime('%Y-%m-%d %H:%M', date) + "\n");
});

server.listen(process.argv[2]);
