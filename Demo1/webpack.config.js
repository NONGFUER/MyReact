var path = require('path');
var webpack = require('webpack');
var config = {
	entry: './main.js',
	output: {
		path: './',
		filename: 'index.js'
	},
	devServer: {
		inline: true,
		port: 7777
	},
	module: {
		loader: [ {
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015','react']
			}
		}]
	}
}
module.exports = config;