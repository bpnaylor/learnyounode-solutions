var http = require('http');
var results = [];
var count = 0;

function httpGet(index) {
	http.get(process.argv[2 + index], callback);
}

function callback(response) {
	var d = "";

	response.setEncoding('utf8');
	response.on("data", function(data) {
		d += data;
	});

	response.on("end", function(end) {
		results[index] = d;
		count++;

		if (count == 3) {
			results.forEach(function(result) {
				console.log(result);
			});
		}
	});
}

for (var i = 0; i < 3; i++) {
	httpGet(i);
}

function httpGet(index) {
	http.get(process.argv[2 + index], function(response) {
		var d = "";

		response.setEncoding('utf8');
		response.on("data", function(data) {
			d += data;
		});
		response.on("end", function() {
			results[index] = d;
			count++;

			if (count === 3) {
				results.forEach(function(result) {
					console.log(result);
				});
			}
		});

	});
}