var calculate_sum = function() {
	var sum = 0;
	for (var i = 2; i < process.argv.length; i++) {
		sum = sum + parseInt(process.argv[i]);
	};

	return sum;
};

console.log(calculate_sum());


