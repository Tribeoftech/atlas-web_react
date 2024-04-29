const path = require('path');

module.exports = {
	mode: 'production',
	entry: './task_1/js/dashboard_main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	}
};