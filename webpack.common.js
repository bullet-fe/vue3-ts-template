"use strict";
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require("vue-loader");
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        // 项目入口
        main: './src/main.ts'
    },
    module: {
        rules: [
            // 编译vue单文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 转化js的babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            // 处理图片
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'img/',
                        limit: 5000,
                        esModule: false
                    }
                }
            },
            // 处理字体文件
            {
                test: /\.(eot|ttf|svg)$/,
                use: {
                    loader: 'file-loader'
                }
            },
            // 处理typeScript文件
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [/\.vue$/] }
            },
        ]
    },
    plugins: [
        // 基础路径URL
        new webpack.DefinePlugin({
            BASE_URL: '"/"'
        }),
        // vue plugin
        new VueLoaderPlugin(),
        // 模版文件
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'vue3-ts-template'
        })
    ],
    resolve: {
        // 定义路径
        alias: {
            '@': path.join(__dirname, 'src')
        },
        // 入口文件后缀配置
        extensions: ['.js', '.ts']
    },

}
