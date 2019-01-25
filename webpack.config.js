const path = require('path')

module.exports = {
	entry: './src/client/app.js',
	output: {
		path: path.join(__dirname,'dist/'),
		filename: 'src.js'
		
	},
	module: {
		rules: [
		{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		},
		{
			test: /\.s?css$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}
		]
	},
	//devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.resolve(__dirname,'dist/'),
		watchContentBase: true,
		compress: true
	}

}
