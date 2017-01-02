const path = require('path');

module.exports = {

	entry: ['./src/app'],

	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		sourceMapFilename: 'bundle.map'
	},

	resolve: {
		extensions: ['', '.ts', '.tsx', '.js']
	},

	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loaders: [
					'babel-loader?presets[]=es2015&plugins[]=transform-runtime',
					'awesome-typescript-loader'
				],
				exclude: /node_modules/
			}
		]
	},

	devtool: 'inline-source-map',

	watch: true

};
