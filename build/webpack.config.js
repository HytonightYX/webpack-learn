const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development', // 开发模式
	entry: {
		main: path.resolve(__dirname, '../src/main.js'),
		header: path.resolve(__dirname, '../src/header.js')
	},
	output: {
		filename: '[name].[hash:8].js',      // 打包后的文件名称
		path: path.resolve(__dirname, '../dist')  // 打包后的目录
	},
	plugins: [
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname,'../public/index.html')
		})
	]
}
