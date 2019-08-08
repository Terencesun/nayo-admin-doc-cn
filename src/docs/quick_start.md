### 快速开始

这里有两个版本可以下载
- demo版
- 精简版

---
**demo版**

拥有一个简单的布局视图(nayo-layout)，其中"用户状态"组件需要开发者自行根据业务进行调整

拥有几个demo页面、路由配置、多语言配置等，开发者可以根据需求删除，然后重新开发页面

**精简版**

没有布局视图，需要自己开发布局视图，同时只有一个简单的欢迎页面和对应的路由配置，适合定制开发

---

**快速开始**
```
// clone
git clone 
git clone

// install
npm install

// 关注main.js是否进行路由注册、状态管理注册、多语言注册，是否全局注册了layout组件，是否在最后使用$mount进行挂载
// main.js
import nayoCore from "nayo-admin-core";

// 初始化nayo实例
// App是vue入口组件，需要在App.vue中使用<nayo-admin></nayo-admin>使用admin组件
// configs是一个关于router\vuex\i18n配置的选项，格式如下
// options = {
//    vuex: {},
//    router: {},
//    lang: {}
// }
// configs有默认配置，详情请查看https://www.npmjs.com/package/nayo-admin-core#4class
let nayo = new nayoCore(App[, configs]);

// 注册路由、状态管理和多语言

// 挂载Vue实例
nayo.admin.$mount("#app");

// 关注App.vue是否使用了<nayo-admin>标签，是否在标签属性layout引用了全局注册的layout组件

```