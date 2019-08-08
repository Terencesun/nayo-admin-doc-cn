### 简介
Nayo-Admin是Nayo Project的成员之一，基于Vue\iView\Nayo-Admin-Core进行开发的后台管理系统前端解决方案。Nayo-Admin的核心思想是“页面的高内聚和低耦合，以便在合作开发和长期维护中，能使开发者能快速上手和重构页面，从而节省时间成本”。

### 目录结构
```
// demo目录结构
├─ .gitignore
├─ README.md
├─ package.json
├─ .browserslistrc  浏览器兼容配置
├─ babel.config.js  balel配置文件
├─ postcss.config.js  postcss配置文件
├─ vue.config.js  vue-cli 3配置文件
└─ src
   ├─ App.vue  入口组件
   ├─ main.js  入口文件
   ├─ assets  静态文件
   │  ├─ background.jpg
   │  └─ logo.jpg
   ├─ configs  配置
   │  ├─ router.config.js  路由配置
   │  └─ lang.config.js    语言配置
   ├─ layout  admin布局视图存放文件夹
   |  ├─ nayo-layout  nayoAdmin 布局视图例子
   │  └─ index.js  Layout视图出口
   ├─ pages  页面
   |  ├─ home  单独页面的文件夹（具体约定可以查看“页面约定”）
   |  |  ├─ api  页面api文件夹
   |  |  ├─ components  页面组件文件夹
   |  |  ├─ lang  页面语言包文件夹
   │  │  ├─ home.vue  页面出口组件文件
   │  │  └─ index.js  页面出口文件
   │  ├─ ...
   |  └─ index.js  页面出口
   ├─ store  状态管理
   │  ├─ store_core  Vuex配置文件夹
   │  ├─ combine.js  Vuex配置处理文件
   │  └─ index.js  Vuex出口
   └─ utils  工具函数
      ├─ full-screen.js  全屏
      └─ index.js  工具函数出口

// 最简版本目录结构
├─ .gitignore
├─ README.md
├─ package.json
├─ .browserslistrc  浏览器兼容配置
├─ babel.config.js  balel配置文件
├─ postcss.config.js  postcss配置文件
├─ vue.config.js  vue-cli 3配置文件
└─ src
   ├─ App.vue  入口组件
   ├─ main.js  入口文件
   ├─ assets  静态文件
   ├─ configs  配置
   │  ├─ router.config.js  路由配置
   │  └─ lang.config.js    语言配置
   ├─ layout  admin布局存放文件夹
   │  └─ index.js  布局视图出口
   ├─ pages  页面
      ├─ home  单独页面的文件夹（具体约定可以查看“页面约定”）
   |  |  ├─ api  页面api文件夹
   |  |  ├─ components  页面组件文件夹
   |  |  ├─ lang  页面语言包文件夹
   │  │  ├─ home.vue  页面出口组件文件
   │  │  └─ index.js  页面出口文件
   |  └─ index.js  页面出口
   ├─ router  路由
   │  ├─ index.js  路由出口
   │  └─ router.config.js  路由配置文件
   ├─ store  状态管理
   │  ├─ store_core  Vuex配置文件
   │  ├─ combine.js  Vuex配置处理文件
   │  └─ index.js  Vuex出口
   └─ utils  工具函数
      └─ index.js  工具函数出口

```

github地址：

[nayo-admin-core](https://github.com/nayo-project/nayo-admin-core)

[nayo admin demo模板](https://github.com/nayo-project/nayo-admin)

[nayo admin 简化版demo模板](https://github.com/nayo-project/nayo-admin-simple)

### Layout(布局)开发计划
由于Nayo Admin是基于Nayo-Admin-Core进行开发的，允许高度自由的Layout(布局)编写。

Layout(布局)可以通过Vuex状态管理中的state下__router_info__(可以查看"路由约定")进行编写，你可以写出各种有意思的layout。

如果你写出了一个有意思的layout，欢迎提交你的layout组件的代码（可参考demo里layout的目录结构），如果合适，你的代码会合并到仓库下的layout分支中，让更多人可以使用。

### 联系方式
Terence.Sun

terence@segofun.com