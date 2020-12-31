"use strict";
const path = require("path");
console.log('123')
const entryInfo = path.resolve(__dirname, "../src/main.ts");
const outputInfo = {
    // webpack出口配置
    path: path.resolve(__dirname, "../dist"), // 绝对路径
    filename: "[name].[hash].js" // 输出文件的文件名
};
const baseInfo = {
    entry: entryInfo,
    output: outputInfo,
};
module.exports = baseInfo;
