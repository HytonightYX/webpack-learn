const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
let indexLess = new ExtractTextWebpackPlugin('index.less')
let indexCss = new ExtractTextWebpackPlugin('index.css')

require('@babel/polyfill')

module.exports = {
	mode: 'development',
	module: {
		rules: [
			{
				test:/\.js$/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['@babel/preset-env']
					}
				},
				exclude:/node_modules/
			},
			{
				test: /\.less$/,
				use: indexLess.extract({
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'less-loader'
					],
				})
			},
			{
				test: /\.(jpe?g|png|gif)$/i, //图片文件
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240,
							fallback: {
								loader: 'file-loader',
								options: {
									name: 'img/[name].[hash:8].[ext]'
								}
							}
						}
					}
				]
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240,
							fallback: {
								loader: 'file-loader',
								options: {
									name: 'media/[name].[hash:8].[ext]'
								}
							}
						}
					}
				]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240,
							fallback: {
								loader: 'file-loader',
								options: {
									name: 'fonts/[name].[hash:8].[ext]'
								}
							}
						}
					}
				]
			},
		]
	},
	entry: {
		main: ["@babel/polyfill", path.resolve(__dirname,'../src/main.js')],
	},
	output: {
		filename: '[name].[hash:8].js',      // 打包后的文件名称
		path: path.resolve(__dirname, '../dist')  // 打包后的目录
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
			filename: 'index.html',
			chunks: ['main'] // 与入口文件对应的模块名
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/header.html'),
			filename: 'header.html',
			chunks: ['header'] // 与入口文件对应的模块名
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
			chunkFilename: '[id].css'
		}),
		new ExtractTextWebpackPlugin('index.less'),
		new ExtractTextWebpackPlugin('index.css')
	]
}
