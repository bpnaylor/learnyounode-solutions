var http = require('http');

// solution 1

var d = "";
var sum = 0;

http.get(process.argv[2],callback);

function callback(response) {
	response.setEncoding('utf8');
	response.on("data", function(data) {
		d += data;
		sum += data.length;
	});
	response.on("end", function() {
		console.log(sum);
		console.log(d);
	})
}

// solution 2

// var http = require('http');
// var bl = require('bl');

// http.get(process.argv[2], function(response) {
// 	response.pipe(bl(function(err,data) {
// 		if (err) {
// 			return console.error(err);
// 		}
// 		data = data.toString();
// 		console.log(data.length);
// 		console.log(data);
// 	}));
// });
