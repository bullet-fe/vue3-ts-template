"use strict";
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const commonConfig = require("./webpack.common.js");

// 区分不同环境
console.log(process.env.NODE_ENV)

const prodConfig = {
    mode: 'production',
    output: {
        path: __dirname + "/dist",
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{ from: "public" }],
        }),
        new MiniCssExtractPlugin(),
        new BundleAnalyzerPlugin()
    ],
};

module.exports = merge(commonConfig, prodConfig);