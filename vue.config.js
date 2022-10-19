const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //设置css样式主入口文件
  css:{
    loaderOptions:{
      scss:{
        additionalData:`@import "./src/styles/style.scss";`
      }
    }
  }
})
