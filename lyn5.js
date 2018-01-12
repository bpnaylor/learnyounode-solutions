var fs = require('fs');

var directory_path = process.argv[2];
var filter_type = process.argv[3];

fs.readdir(directory_path, function(err, list) {
	if (err) throw err;
	list.forEach(function(file) {
		if (file.indexOf("." + filter_type) != -1) {
			console.log(file);
		}
	});
});