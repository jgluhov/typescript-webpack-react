const path = require('path');
const TextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {

	entry: ['./src/app'],

	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		sourceMapFilename: 'bundle.map'
	},

	resolve: {
		extensions: ['', '.ts', '.tsx', '.js', '.css']
	},

	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: TextWebpackPlugin.extract('style', 'css?sourceMap')
			},
			{
				test: /\.(eot|woff2?|ttf|svg)/,
				loader: 'file-loader?name=assets/fonts/[name].[hash].[ext]'
			}
		]
	},

	plugins: [
		new TextWebpackPlugin('css/bundle.css')
	],

	devtool: 'inline-source-map',

	watch: true

};
