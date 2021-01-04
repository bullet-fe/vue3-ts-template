"use strict";
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require("vue-loader");
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        main: './src/main.ts'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
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
            {
                test: /\.(eot|ttf|svg)$/,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [/\.vue$/] }
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            BASE_URL: '"/"'
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'vue3-ts-template'
        })
    ],
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src')
        },
        extensions: ['.js', '.ts']
    },

}
