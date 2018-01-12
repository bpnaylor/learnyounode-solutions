var filteredls = require('./filteredls');

filteredls(process.argv[2], process.argv[3], function(err, list) {
	if (err) throw err;

	list.forEach(function(file) {
		console.log(file);
	});
});
