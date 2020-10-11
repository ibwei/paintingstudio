#### 前言
> ##### 随着前端三大框架的盛行，越来越多的前后端分离项目在服务器上跑了起来，随之而来，开发者也慢慢发现了这种开发模式所带来的弊端，其中之一就是首屏加载速度特别慢，因为虽然虚拟DOM 在更新视图方便比传统方式更加出色，但是首次加载静态资源时，我们的浏览器就需要花费更久的时间来处理这些Js了。

#### 起因
从建立创建虚拟 dom 到render成真实的dom结构，肯定比传统方式肯定要慢一些。为此，加快首屏渲染速度，社区也推出了相应的服务端渲染方案，如基于 vue 的nuxt 和基于 react 的 next.js，并且有了一定的成效，可以说是开发层面目前能带来改善首屏加载的最佳方案了。抛开开发层面，为了解决这个首屏渲染与应用加载问题，为什么我们不让内存和带宽都很吃紧的服务器解放出来，把我们的静态资源丢在 OSS 上呢？今天我就来说一下这个解决方案的具体步骤。

#### 什么是 OSS?
阿里云对象存储是这样介绍的
> ##### OSS,对象存储。海量、安全、低成本、高可靠的云存储服务，提供99.9999999999%的数据可靠性。使用RESTful API 可以在互联网任何位置存储和访问，容量和处理能力弹性扩展，多种存储类型供选择全面优化存储成本。
意思就是提供一个类似云盘的东西给你，而且访问的速度很快，你可以在里面储存你想要的任意文件和资源，同时提供了一套 API 给你，可以在项目的代码里面使用。

目前市场上比较知名我大概知道这几家
- 七牛云
- 腾讯云
- 阿里云
该选谁呢？他们价格不一致，提供的免费额度也不一致，具体选择什么，还要看自己的需要，我这里选择七牛云讲解。
为什么选择七牛云? <b>因为免费>..< </b>。
10G免费空间，10G免费流量，对于搭建自己的博客网站已经绰绰有余了。

#### 七牛云对象存储
本章内容是将如何使用对象存储的API在前端项目如何使用，至于如何开通七牛云对象存储这些基础内容不在本章介绍范围内，如有需要去此链接查看：[一个非常详细的开通七牛云 oss 教程的传送门](https://blog.csdn.net/wangxy_job/article/details/106669881)

开通好了，我们就拿到了一些关键的信息，如AccessKey、SecretKey、存储空间名、访问地址、存储区域。
有了这些，我们再来看一下七牛云对象存储的提供[Node.js版本的开发接口](https://developer.qiniu.com/kodo/sdk/1289/nodejs)。

![](https://user-gold-cdn.xitu.io/2020/7/12/1733f1ace4ec471e?w=2848&h=1570&f=png&s=358187)

我们这里主要是要用到文件上传功能，因此着重介绍上传文件的 API.
看一个最简单粗暴的用例，上传本地文件到远程，以表单方式

```javascript
var localFile = "/Users/jemy/Documents/qiniu.mp4"; // 需要上传的路径
var formUploader = new qiniu.form_up.FormUploader(config); //config 是配置参数，后面会给示例
var putExtra = new qiniu.form_up.PutExtra();
var key='test.mp4'; // 上传后在 oss 中的文件名
// 文件上传
formUploader.putFile(uploadToken, key, localFile, putExtra, function(respErr,
  respBody, respInfo) {
  if (respErr) {
    throw respErr;
  }
  if (respInfo.statusCode == 200) {
    console.log(respBody);
  } else {
    console.log(respInfo.statusCode);
    console.log(respBody);
  }
});
```

因此我们只要逐步遍历我们的需要上传的文件夹就好了。
直接给用例，看似很长，其实没多少逻辑，就是遍历需要上传的文件夹。
以一个 Nuxt 项目为例，需要上传的是客户端的静态资源，本地路径为.nuxt/dist/client。
文件结构如下：

![](https://user-gold-cdn.xitu.io/2020/7/12/1733f230cb6fe56b?w=720&h=1416&f=png&s=162303)
因此，为了与打包的 publicpath 保持一致，上传路径为 img 时，应该改为 img/+文件名
```javascript
const qiniu = require('qiniu');//需要安装我们的七牛云 nodejs 的sdk
const fs = require('fs'); // 操作文件
const path = require('path'); // 读取路径
// 定义工作目录
const PUBLIC_PATH = path.join(__dirname, '/');

// 开始配置用户凭证
var accessKey = 'your accessKey';
var secretKey = 'your secretKey';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

var options = {
  scope: 'paintingstudio', //对象存储名
};
var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken = putPolicy.uploadToken(mac);

var config = new qiniu.conf.Config();
// 空间对应的机房
config.zone = qiniu.zone.Zone_z2;
// 是否使用https域名
config.useHttpsDomain = true;
// 上传是否使用cdn加速
config.useCdnDomain = true;

/**
 * 遍历文件夹递归上传
 * @param {path} src 本地路径
 * @param {string} dist oos文件夹名
 * @param {boolean} isDir 是否为文件夹下文件
 */
async function addFileToOSSSync(src, dist, isDir) {
  let docs = fs.readdirSync(src);
  docs.forEach(function (doc) {
    let _src = src + '/' + doc,
      _dist = dist + '/' + doc;
    let st = fs.statSync(_src);
    // 判断是否为文件
    if (st.isFile() && dist !== 'LICENSES`') {
      putOSS(_src, !isDir ? doc : `img/${doc}`); //如果是文件夹下文件，文件名为 img/文件名
    }
    // 如果是目录则递归调用自身
    else if (st.isDirectory()) {
      addFileToOSSSync(_src, _dist, true);
    }
  });
}
/**
 *单个文件上传至oss
 */
async function putOSS(src, dist) {
  try {
    var localFile = src;
    var formUploader = new qiniu.form_up.FormUploader(config);
    var putExtra = new qiniu.form_up.PutExtra();
    var key = dist;
    // 文件上传
    await formUploader.putFile(uploadToken, key, localFile, putExtra, function (
      respErr,
      respBody,
      respInfo
    ) {
      if (respErr) {
        throw respErr;
      }
      if (respInfo.statusCode === 200) {
        console.log(key + '上传oss成功');
      } else {
        console.log(respInfo.statusCode);
        console.log(respBody);
      }
    });
  } catch (e) {
    console.log('上传失败'.e);
  }
}
/**
 *上传文件启动
 */
async function upFile() {
  try {
    let src = PUBLIC_PATH + '.nuxt/dist/client'; //需要上传的路径
    let docs = fs.readdirSync(src);
    await addFileToOSSSync(src, docs);
  } catch (err) {
    console.log('上传oss失败', err);
  }
}
upFile(); //开始上传
```
使用 node 命令或者在每次build 之后上传都可，看项目需要。

![](https://user-gold-cdn.xitu.io/2020/7/12/1733f25f740ded7e?w=1540&h=574&f=png&s=81471)

我这里选择每次 build 之后上传。
对了，别忘了将你的打包资源路径换成你的 OSS的域名。
![](https://user-gold-cdn.xitu.io/2020/7/12/1733f26a3e10acd6?w=974&h=312&f=png&s=26399)
那就配置好了，现在我们开始运行一下。
![](https://user-gold-cdn.xitu.io/2020/7/12/1733f28a76424029?w=2558&h=1526&f=png&s=404760)
它开始上传了!
我们来看一下加载速度。
大家自行体验吧，[一个多图网站](http://pinxianhs.com)


