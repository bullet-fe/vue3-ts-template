# vue3-ts-template

基于vue3，TypeScript，Webpack5的开发环境模版

特点：
1. 基于webpack5自定义项目结构
2. 基于vue3开发，引入vue全家桶
3. 使用ts编写文件，增强类型




## 搭建步骤

搭建基本vue项目结构，确定需要那些loader和编译配置


安装webpack依赖，搭建运行项目结构
依赖: webpack,webpack-cli,webpack-dev-server,webpack-merge

安装cross-env区分环境

安装webpack运行插件，配置运行规则
html-webpack-plugin,clean-webpack-plugin,copy-webpack-plugin

搭建vue项目基本结构目录

安装loader来处理文件的转换

vue系列：vue-loader,vue-style-loader,vue-template-compiler,
转换文件系列：url-loader,image-webpack-loader,file-loader,ts-loader
转换代码系列:typescript,babel-loader,mini-css-extract-plugin

## 文件结构
build 存放打包配置相关的内容
src 存放项目依赖的代码
pubilc 存放静态资源和模版文件

### 安装依赖

``

### 安装loader和plugins