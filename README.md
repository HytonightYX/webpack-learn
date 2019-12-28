# [掘金] 2020年了,再不会webpack敲得代码就不香了(近万字实战)

> 作者：黄小虫
> 链接：https://juejin.im/post/5de87444518825124c50cd36
> 来源：掘金
> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



## 前言

2020年即将到来,在众多前端的招聘要求里,`webpack`、`工程化`这些字眼频率越来越高。日常开发者中，我们常常在用诸如`vue-cli`、`create-react-app`的脚手架来构建我们的项目。但是如果你想在团队脱颖而出(鹤立鸡群)、拿到更好的offer(还房贷)，那么你必须去深刻的认识下我们经常打交道的`webpack`



#### 本文环境

```
webpack 4.41.2
node: 10.15.3
```

## 重要记录
```
node-gyp 报错
gyp: No Xcode or CLT version detected!

>>> https://github.com/nodejs/node-gyp/issues/1927
```


```
我们所用到的mini-css-extract-plugin会将所有的css样式合
并为一个css文件。如果你想拆分为一一对应的多个css文件,我们
需要使用到extract-text-webpack-plugin，而目前
mini-css-extract-plugin还不支持此功能。我们需要安装@next
版本的extract-text-webpack-plugin

```
