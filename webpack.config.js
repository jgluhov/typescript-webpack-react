const path = require('path');

module.exports = {

	entry: ['./src/app.ts'],

	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},

	resolve: {
		extensions: ['', '.ts', '.tsx', '.js']
	},

	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			}
		]
	}

};
