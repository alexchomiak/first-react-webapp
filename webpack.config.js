const path = require('path')

module.exports = {
	entry: './src/client/app.js',
	output: {
		path: path.join(__dirname,'dist/scripts/'),
		filename: 'src.js'
		
	},
	module: {
		rules: [
		{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		}
		]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname,'dist')
	}

}
