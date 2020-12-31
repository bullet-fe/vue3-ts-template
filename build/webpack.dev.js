"use strict";
const { merge } = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.common");
const webpack = require("webpack");
module.exports = merge(baseConfig, {
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, "../dist"),
        open: true,
        hot: true
    },
    // plugins: [new webpack.HotModuleReplacementPlugin()]
});


