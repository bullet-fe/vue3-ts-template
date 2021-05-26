class MyPlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.beforeCompile.tapAsync('MyPlugin', (compilation, callback) => {
      // console.log('webpack 构建过程开始！',compilation,process.env.NODE_ENV);
      callback()
    });

    compiler.hooks.emit.tap('RemoveComment', (compilation) => {
      // 遍历构建产物，.assets中包含构建产物的文件名
      Object.keys(compilation.assets).forEach((item) => {
        // .source()是获取构建产物的文本
        let content = compilation.assets[item].source()
        // console.log(content)
      })
    })
  }
}
module.exports = MyPlugin;
