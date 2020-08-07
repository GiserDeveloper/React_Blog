const withCSS = require('@zeit/next-css')
const cssLoaderGetLocalIdent = require("css-loader/lib/getLocalIdent.js");
module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
    //如果用户自定义了 getLocalIdent 方法，它在编译 cssmodules 时，便会用用户定义的方法，否则使用自带的方法。
    //通过自定义 getLocalIdent， 正则判断 node_modules，也就是当前样式如果是来自于 node_modules 中文件的话，返回它本身的名称，就是不改动它
    //而它是我们的源码的话，我执行 css-loader 本身的 getLocalIdent 方法。这样就既使我们自己的代码能被 cssmodules，而三方库的代码不被 cssmodules 影响。
    getLocalIdent: (context, localIdentName, localName, options) => {
        let hz = context.resourcePath.replace(context.rootContext, "");
        if (/node_modules/.test(hz)) {
          return localName;
        } else {
          return cssLoaderGetLocalIdent(
            context,
            localIdentName,
            localName,
            options
          );
        }
      }
  }
})