"use strict";
const merge = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.common");
const webpack = require("webpack");
module.exports = merge(baseConfig, {
    mode: "production"
});