var fs = require('fs');

module.exports = function (directory, filter, callback) {
	fs.readdir (directory, function(err, list) {
		if (err) return callback(err);

		var l = [];

		list.forEach(function(file) {
			if (file.indexOf('.' + filter) != -1) {
				l.push(file);
			}
		});

		return callback(null,l);
	});
}
