(function () {
    var content = [{"context":[{"title":"readme","link":"/nayo-admin-doc-cn/index.html"}],"content":"<p><img src=\"https://raw.githubusercontent.com/Terencesun/nayo-admin/image/logo.png\" alt=\"nayo\"></p>\n\n        <h2 id=\"后台管理系统前端解决方案\">\n            <a href='#后台管理系统前端解决方案' class='header-anchor'>#</a>\n            <span>后台管理系统前端解决方案</span>\n        </h2>\n    <p><a href=\"https://nayo-project.github.io/nayo-admin-demo/\">演示地址</a></p>\n<hr>\n<p>v1.0.0</p>\n<p>代号：天工</p>\n<p>请使用Vue-Cli3进行构建以下项目</p>\n<p>demo版：<a href=\"https://github.com/nayo-project/nayo-admin\">GitHub</a></p>\n<p>精简版模板：<a href=\"https://github.com/nayo-project/nayo-admin-simple\">GitHub</a></p>\n<p>ps: 精简版与demo版的区别请查阅文档</p>\n<hr>\n<p><img src=\"https://github.com/nayo-project/nayo-admin/image/demo.png\" alt=\"demo\"></p>\n\n        <h3 id=\"1.-简介\">\n            <a href='#1.-简介' class='header-anchor'>#</a>\n            <span>1. 简介</span>\n        </h3>\n    <p>Nayo-Admin是Nayo Project的成员之一，基于Vue\\iView\\Nayo-Admin-Core进行开发的后台管理系统前端解决方案。Nayo-Admin的核心思想是“页面的高内聚和低耦合，以便在合作开发和长期维护中，能使开发者能快速上手和重构页面，从而节省时间成本”。</p>\n\n        <h3 id=\"2.-文档\">\n            <a href='#2.-文档' class='header-anchor'>#</a>\n            <span>2. 文档</span>\n        </h3>\n    <table>\n<thead>\n<tr>\n<th align=\"center\">语言</th>\n<th align=\"center\">地址</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align=\"center\">中文</td>\n<td align=\"center\"><a href=\"https://note.youdao.com/\">Doc</a></td>\n</tr>\n</tbody></table>\n\n        <h3 id=\"3.-Layout(布局)开发计划\">\n            <a href='#3.-Layout(布局)开发计划' class='header-anchor'>#</a>\n            <span>3. Layout(布局)开发计划</span>\n        </h3>\n    <p>由于Nayo Admin是基于Nayo-Admin-Core进行开发的，允许高度自由的Layout(布局)编写。</p>\n<p>Layout(布局)可以通过Vuex状态管理中的state下<strong>router_info</strong>(可以查看&quot;路由约定&quot;)进行编写，你可以写出各种有意思的layout。</p>\n<p>如果你写出了一个有意思的layout，欢迎提交你的layout组件的代码（可参考demo里layout的目录结构），如果合适，你的代码会合并到仓库下的layout分支中，让更多人可以使用。</p>\n\n        <h3 id=\"3.-联系\">\n            <a href='#3.-联系' class='header-anchor'>#</a>\n            <span>3. 联系</span>\n        </h3>\n    <p>Terence.Sun</p>\n<p><a href=\"mailto:terence@segofun.com\">terence@segofun.com</a></p>\n\n        <h3 id=\"5.-协议\">\n            <a href='#5.-协议' class='header-anchor'>#</a>\n            <span>5. 协议</span>\n        </h3>\n    <p>该项目遵循MIT协议，请查看LICENSE</p>\n<p>demo版中的背景图以获取作者授权，作者<a href=\"https://space.bilibili.com/29308962\">@渺渺</a></p>\n\n        <h3 id=\"6.-采用nayo-admin的项目和公司\">\n            <a href='#6.-采用nayo-admin的项目和公司' class='header-anchor'>#</a>\n            <span>6. 采用nayo-admin的项目和公司</span>\n        </h3>\n    <p>如果你或你公司采用了nayo-admin进行后台管理系统前端开发，欢迎提交附带logo或项目地址的issue告知我们，我们会在这里展示该项目~</p>\n<p>展示的更新周期是一周</p>\n"},{"context":[{"title":"简介","link":"/nayo-admin-doc-cn/intro.html"}],"content":"\n        <h3 id=\"简介\">\n            <a href='#简介' class='header-anchor'>#</a>\n            <span>简介</span>\n        </h3>\n    <p>Nayo-Admin是Nayo Project的成员之一，基于Vue\\iView\\Nayo-Admin-Core进行开发的后台管理系统前端解决方案。Nayo-Admin的核心思想是“页面的高内聚和低耦合，以便在合作开发和长期维护中，能使开发者能快速上手和重构页面，从而节省时间成本”。</p>\n\n        <h3 id=\"目录结构\">\n            <a href='#目录结构' class='header-anchor'>#</a>\n            <span>目录结构</span>\n        </h3>\n    <pre class=\"prettyprint\"><code>// demo目录结构\n├─ .gitignore\n├─ README.md\n├─ package.json\n├─ .browserslistrc  浏览器兼容配置\n├─ babel.config.js  balel配置文件\n├─ postcss.config.js  postcss配置文件\n├─ vue.config.js  vue-cli 3配置文件\n└─ src\n   ├─ App.vue  入口组件\n   ├─ main.js  入口文件\n   ├─ assets  静态文件\n   │  ├─ background.jpg\n   │  └─ logo.jpg\n   ├─ configs  配置\n   │  ├─ router.config.js  路由配置\n   │  └─ lang.config.js    语言配置\n   ├─ layout  admin布局视图存放文件夹\n   |  ├─ nayo-layout  nayoAdmin 布局视图例子\n   │  └─ index.js  Layout视图出口\n   ├─ pages  页面\n   |  ├─ home  单独页面的文件夹（具体约定可以查看“页面约定”）\n   |  |  ├─ api  页面api文件夹\n   |  |  ├─ components  页面组件文件夹\n   |  |  ├─ lang  页面语言包文件夹\n   │  │  ├─ home.vue  页面出口组件文件\n   │  │  └─ index.js  页面出口文件\n   │  ├─ ...\n   |  └─ index.js  页面出口\n   ├─ store  状态管理\n   │  ├─ store_core  Vuex配置文件夹\n   │  ├─ combine.js  Vuex配置处理文件\n   │  └─ index.js  Vuex出口\n   └─ utils  工具函数\n      ├─ full-screen.js  全屏\n      └─ index.js  工具函数出口\n\n// 最简版本目录结构\n├─ .gitignore\n├─ README.md\n├─ package.json\n├─ .browserslistrc  浏览器兼容配置\n├─ babel.config.js  balel配置文件\n├─ postcss.config.js  postcss配置文件\n├─ vue.config.js  vue-cli 3配置文件\n└─ src\n   ├─ App.vue  入口组件\n   ├─ main.js  入口文件\n   ├─ assets  静态文件\n   ├─ configs  配置\n   │  ├─ router.config.js  路由配置\n   │  └─ lang.config.js    语言配置\n   ├─ layout  admin布局存放文件夹\n   │  └─ index.js  布局视图出口\n   ├─ pages  页面\n      ├─ home  单独页面的文件夹（具体约定可以查看“页面约定”）\n   |  |  ├─ api  页面api文件夹\n   |  |  ├─ components  页面组件文件夹\n   |  |  ├─ lang  页面语言包文件夹\n   │  │  ├─ home.vue  页面出口组件文件\n   │  │  └─ index.js  页面出口文件\n   |  └─ index.js  页面出口\n   ├─ router  路由\n   │  ├─ index.js  路由出口\n   │  └─ router.config.js  路由配置文件\n   ├─ store  状态管理\n   │  ├─ store_core  Vuex配置文件\n   │  ├─ combine.js  Vuex配置处理文件\n   │  └─ index.js  Vuex出口\n   └─ utils  工具函数\n      └─ index.js  工具函数出口\n</code></pre><p>github地址：</p>\n<p><a href=\"https://github.com/nayo-project/nayo-admin-core\">nayo-admin-core</a></p>\n<p><a href=\"https://github.com/nayo-project/nayo-admin\">nayo admin demo模板</a></p>\n<p><a href=\"https://github.com/nayo-project/nayo-admin-simple\">nayo admin 简化版demo模板</a></p>\n\n        <h3 id=\"Layout(布局)开发计划\">\n            <a href='#Layout(布局)开发计划' class='header-anchor'>#</a>\n            <span>Layout(布局)开发计划</span>\n        </h3>\n    <p>由于Nayo Admin是基于Nayo-Admin-Core进行开发的，允许高度自由的Layout(布局)编写。</p>\n<p>Layout(布局)可以通过Vuex状态管理中的state下<strong>router_info</strong>(可以查看&quot;路由约定&quot;)进行编写，你可以写出各种有意思的layout。</p>\n<p>如果你写出了一个有意思的layout，欢迎提交你的layout组件的代码（可参考demo里layout的目录结构），如果合适，你的代码会合并到仓库下的layout分支中，让更多人可以使用。</p>\n\n        <h3 id=\"联系方式\">\n            <a href='#联系方式' class='header-anchor'>#</a>\n            <span>联系方式</span>\n        </h3>\n    <p>Terence.Sun</p>\n<p><a href=\"mailto:terence@segofun.com\">terence@segofun.com</a></p>\n"},{"context":[{"title":"快速开始","link":"/nayo-admin-doc-cn/quick_start.html"}],"content":"\n        <h3 id=\"快速开始\">\n            <a href='#快速开始' class='header-anchor'>#</a>\n            <span>快速开始</span>\n        </h3>\n    <p>这里有两个版本可以下载</p>\n<ul>\n<li>demo版</li>\n<li>精简版</li>\n</ul>\n<hr>\n<p><strong>demo版</strong></p>\n<p>拥有一个简单的布局视图(nayo-layout)，其中&quot;用户状态&quot;组件需要开发者自行根据业务进行调整</p>\n<p>拥有几个demo页面、路由配置、多语言配置等，开发者可以根据需求删除，然后重新开发页面</p>\n<p><strong>精简版</strong></p>\n<p>没有布局视图，需要自己开发布局视图，同时只有一个简单的欢迎页面和对应的路由配置，适合定制开发</p>\n<hr>\n<p><strong>快速开始</strong></p>\n<pre class=\"prettyprint\"><code>// clone\ngit clone \ngit clone\n\n// install\nnpm install\n\n// 关注main.js是否进行路由注册、状态管理注册、多语言注册，是否全局注册了layout组件，是否在最后使用$mount进行挂载\n// main.js\nimport nayoCore from &quot;nayo-admin-core&quot;;\n\n// 初始化nayo实例\n// App是vue入口组件，需要在App.vue中使用&amp;lt;nayo-admin&amp;gt;&amp;lt;/nayo-admin&amp;gt;使用admin组件\n// configs是一个关于router\\vuex\\i18n配置的选项，格式如下\n// options = {\n//    vuex: {},\n//    router: {},\n//    lang: {}\n// }\n// configs有默认配置，详情请查看https://www.npmjs.com/package/nayo-admin-core#4class\nlet nayo = new nayoCore(App[, configs]);\n\n// 注册路由、状态管理和多语言\n\n// 挂载Vue实例\nnayo.admin.$mount(&quot;#app&quot;);\n\n// 关注App.vue是否使用了&amp;lt;nayo-admin&amp;gt;标签，是否在标签属性layout引用了全局注册的layout组件\n</code></pre>"},{"context":[{"title":"约定","link":"javascript:void(0)"},{"title":"说明","link":"/nayo-admin-doc-cn/rule/index.html"}],"content":"\n        <h3 id=\"约定\">\n            <a href='#约定' class='header-anchor'>#</a>\n            <span>约定</span>\n        </h3>\n    <p>Nayo Admin 希望做到的是，高度内聚和低度耦合，尤其在Admin页面开发的时候，如果一个页面引用了其他页面的某个业务处理逻辑，当需要改动该逻辑的时候，往往需要分离这个逻辑，这样就会造成不必要的时间成本。</p>\n<p>如果我们能按照Nayo Admin的约定去开发页面，虽然在表面上看来，你需要复制或重写一些其他页面的代码在当前页面，但是，由于这种高度的内聚，我们可以更好地专注于当前的页面；如果你想要进行不同页面的数据通信，请使用Vuex\\Session\\Cookie\\localStore进行管理</p>\n<p>Nayo Admin使用的UI是iView，你可以在.vue中使用iView的全部组件</p>\n<p>Nayo Admin 需要遵守以下方面的约定：</p>\n<ol>\n<li>Router（路由）</li>\n<li>Page（页面）</li>\n<li>Vuex（状态管理）</li>\n<li>Lang（多语言）</li>\n</ol>\n<hr>\n<p>注意，使用路由\\状态管理\\多语言的时候，如果不注册，会直接使用默认设置</p>\n<hr>\n<p><strong>集成的功能</strong></p>\n<ul>\n<li>$iView</li>\n</ul>\n<p>你可以在.vue组件中使用iView对象 window.$iView</p>\n<ul>\n<li>$nayo</li>\n</ul>\n<p>Nayo Admin 还将一些工具放在了$nayo对象中，可以在vue组件中通过this.$nayo进行调用，也可以通过window.$nayo调用</p>\n<ul>\n<li>$root</li>\n</ul>\n<p>为了在非vue文件中使用相关vue实例特性，nayo把根组件实例绑定在了window下，你可以使用window.$root获取vue根组件实例</p>\n<p><strong>工具列表:</strong></p>\n<ol>\n<li>underScore ----&gt; <a href=\"https://underscorejs.org/\">https://underscorejs.org/</a><pre class=\"prettyprint\"><code>this.$nayo.utils.underScore\nwindow.$nayo.utils.underScore</code></pre></li>\n<li>outils ----&gt; <a href=\"https://www.npmjs.com/package/outils\">https://www.npmjs.com/package/outils</a><pre class=\"prettyprint\"><code>this.$nayo.utils.outils\nwindow.$nayo.utils.outils</code></pre></li>\n<li>cookie ----&gt; <a href=\"https://www.npmjs.com/package/js-cookie\">https://www.npmjs.com/package/js-cookie</a><pre class=\"prettyprint\"><code>this.$nayo.utils.cookie\nwindow.$nayo.utils.cookie</code></pre></li>\n<li>md5 ----&gt; <a href=\"https://www.npmjs.com/package/md5\">https://www.npmjs.com/package/md5</a><pre class=\"prettyprint\"><code>this.$nayo.utils.md5\nwindow.$nayo.utils.md5</code></pre></li>\n<li>moment ----&gt; <a href=\"https://www.npmjs.com/package/moment\">https://www.npmjs.com/package/moment</a><pre class=\"prettyprint\"><code>this.$nayo.time.moment\nwindow.$nayo.time.moment</code></pre></li>\n<li>moment-timezone ----&gt; <a href=\"https://www.npmjs.com/package/moment-timezone\">https://www.npmjs.com/package/moment-timezone</a><pre class=\"prettyprint\"><code>this.$nayo.time.momentTz\nwindow.$nayo.time.momentTz</code></pre></li>\n<li>axios ----&gt; <a href=\"https://www.npmjs.com/package/axios\">https://www.npmjs.com/package/axios</a><pre class=\"prettyprint\"><code>this.$nayo.axios\nwindow.$nayo.axios</code></pre></li>\n</ol>\n<hr>\n<p><strong>文档</strong></p>\n<ul>\n<li><a href=\"https://vuex.vuejs.org/guide/\">Vuex Doc</a></li>\n<li><a href=\"https://router.vuejs.org/installation.html\">Vue-Router Doc</a></li>\n<li><a href=\"http://kazupon.github.io/vue-i18n/introduction.html\">Vue-i18n Doc</a></li>\n<li><a href=\"https://underscorejs.org/\">UnderScore Doc</a></li>\n<li><a href=\"https://www.npmjs.com/package/outils\">Outils Doc</a></li>\n<li><a href=\"https://www.npmjs.com/package/js-cookie\">Js-cookie Doc</a></li>\n<li><a href=\"https://www.npmjs.com/package/md5\">Md5 Doc</a></li>\n<li><a href=\"https://www.npmjs.com/package/moment\">Moment Doc</a></li>\n<li><a href=\"https://www.npmjs.com/package/moment-timezone\">Moment-timezone Doc</a></li>\n<li><a href=\"https://www.npmjs.com/package/axios\">Axios Doc</a></li>\n</ul>\n"},{"context":[{"title":"约定","link":"javascript:void(0)"},{"title":"页面约定","link":"/nayo-admin-doc-cn/rule/page.html"}],"content":"\n        <h3 id=\"页面约定\">\n            <a href='#页面约定' class='header-anchor'>#</a>\n            <span>页面约定</span>\n        </h3>\n    <p>当你需要为你的Admin新增一个页面的时候，需要遵循以下的页面目录结构和约定</p>\n<pre class=\"prettyprint\"><code>page_name  单独页面的文件夹\n├─ api  页面api文件夹\n|  └─index.js\n├─ components  页面组件文件夹\n|  └─index.js\n├─ lang  页面语言包文件夹\n|  └─index.js\n├─ page_name.vue  页面出口组件文件\n└─ index.js  页面出口文件</code></pre><p><strong>目录由一下几个部分组成：</strong></p>\n<ol>\n<li>页面api文件夹 - api folder</li>\n<li>页面组件文件夹 - components folder</li>\n<li>页面语言包文件夹 - lang folder</li>\n<li>页面出口组件文件 - export .vue file</li>\n<li>页面出口文件index.js - export index.js file</li>\n</ol>\n<hr>\n<p><strong>分别说明</strong></p>\n<hr>\n<ul>\n<li>页面api文件夹</li>\n</ul>\n<p>该文件夹下，需要有一个index.js，作为出口文件</p>\n<p>你的api的地址需要存放在这里，然后统一使用index.js进行导出</p>\n<p>你不应该在这里写任何发送api或者处理api请求的逻辑，这里仅仅是存放该页面api地址的地方</p>\n<hr>\n<ul>\n<li>页面组件文件夹</li>\n</ul>\n<p>该文件夹下，需要有一个index.js，作为出口文件</p>\n<p>你的Vue组件需要存放在这里，然后通过index.js导出</p>\n<p>你不应该在每个组件文件里书写或处理api相关的请求，如果需要api请求，你可以在组件中使用$emit发送api请求事件，然后在页面出口组件文件中捕获事件，发送请求</p>\n<hr>\n<ul>\n<li>页面语言包文件夹</li>\n</ul>\n<p>该文件夹下，需要有一个index.js，作为出口文件</p>\n<p>你的语言包需要存放在这里，格式如下，然后通过index.js导出</p>\n<pre class=\"prettyprint\"><code>lang = {\n    cn: {\n        hello: &quot;你好&quot;\n    },\n    en: {\n        hello: &quot;hello&quot;\n    },\n    ...\n}</code></pre><p>ps: 当你注册语言包后，每个页面对应一个路由，该语言包会以这个路由名称作为命名空间</p>\n<hr>\n<ul>\n<li>页面出口组件文件</li>\n</ul>\n<p>该文件用于整个页面布局和使用组件</p>\n<p>你应该在这个页面处理全部组件的api请求</p>\n<hr>\n<ul>\n<li>页面出口文件</li>\n</ul>\n<p>通过该文件导出页面出口组件文件</p>\n"},{"context":[{"title":"约定","link":"javascript:void(0)"},{"title":"路由约定","link":"/nayo-admin-doc-cn/rule/route.html"}],"content":"\n        <h3 id=\"路由约定\">\n            <a href='#路由约定' class='header-anchor'>#</a>\n            <span>路由约定</span>\n        </h3>\n    <p>当我们注册路由的时候，注册的路由数据有一定要求</p>\n<hr>\n<p>nayo.routerRegister(options)  ---&gt; 注册路由，可以参照demo</p>\n<pre class=\"prettyprint\"><code>// options的结构\noptions = [\n    {\n        name: &quot;login&quot;,\n        path: &quot;/login&quot;,\n        independent: true,\n        template: login\n    },\n    ...\n]\n\n// 选项是一个路由表，每一个项目是一个路由元\n// 路由表是一个数组\n// 路由元是一个对象\n// 这个路由表注册后，会存放在Vuex的state中的__router_info__里，可以通过this.$store.state查看</code></pre><hr>\n<p><strong>路由元属性</strong></p>\n<table>\n    <tr>\n        <th style=\"width:130px;text-align: center;\">属性名</th>\n        <th style=\"width:100px;text-align: center;\">类型</th>\n        <th style=\"width:100px;text-align: center;\">必填</th>\n        <th style=\"width:598px;text-align: center;\">描述</th>\n    </tr>\n    <tr>\n        <td style=\"text-align: center;\">name</td>\n        <td style=\"text-align: center;\">String</td>\n        <td style=\"text-align: center;\">true</td>\n        <td style=\"text-align: center;\">路由元名称,是唯一的 可以通过this.$route.name访问</td>\n    </tr>\n    <tr>\n        <td style=\"text-align: center;\">path</td>\n        <td style=\"text-align: center;\">String</td>\n        <td style=\"text-align: center;\">true</td>\n        <td style=\"text-align: center;\">路由路径, 像\"/index\"这样的, 这个和vue-router中的path一样</td>\n    </tr>\n    <tr>\n        <td style=\"text-align: center;\">icon</td>\n        <td style=\"text-align: center;\">String</td>\n        <td style=\"text-align: center;\">false</td>\n        <td style=\"text-align: center;\">如果你想用图标，可以使用icon的名称，如果你使用iView的图标，需要在名称前面加上\"ivu-icon-\"</td>\n    </tr>\n    <tr>\n        <td style=\"text-align: center;\">template\\templates</td>\n        <td style=\"text-align: center;\">Object</td>\n        <td style=\"text-align: center;\">false</td>\n        <td style=\"text-align: center;\">路由匹配到后的视图组件, 如果你自定义了layout, 你可能需要用到这个, 可以查看 https://router.vuejs.org/guide/essentials/named-views.html 获取如何使用templates的方法</td>\n    </tr>\n    <tr>\n        <td style=\"text-align: center;\">active</td>\n        <td style=\"text-align: center;\">Boolean</td>\n        <td style=\"text-align: center;\">false</td>\n        <td style=\"text-align: center;\">当你进入admin, 可以通过设置这个属性设置第一个你想看到的页面，如果你自定义了layout，你需要书写导航的逻辑</td>\n    </tr>\n    <tr>\n        <td style=\"text-align: center;\">independent</td>\n        <td style=\"text-align: center;\">Boolean</td>\n        <td style=\"text-align: center;\">false</td>\n        <td style=\"text-align: center;\">如果路由对应的视图组件需要独立于布局视图，你可以设置这个, 像demo中的\"/login\"一样, 这个判断是否是独立函数，存放于nayo-admin-core中的\"src/entrance.vue\"里</td>\n    </tr>\n    <tr>\n        <td style=\"text-align: center;\">children</td>\n        <td style=\"text-align: center;\">Array</td>\n        <td style=\"text-align: center;\">false</td>\n        <td style=\"text-align: center;\">这里是二级子路由，不支持更深层路由</td>\n    </tr>\n</table>\n\n<p><strong>注意：你需要准守一下规则</strong></p>\n<ol>\n<li>如果你设置independent为true，icon不会生效</li>\n<li>如果你设置children，父级和下级的independent不会生效</li>\n<li>如果你设置children，父级的template\\templates不会生效</li>\n<li>如果你设置children，父级的active不会生效， 但是active会在子路由元中生效</li>\n</ol>\n<hr>\n<p><strong>子路由元属性</strong></p>\n<table>\n    <tr>\n        <th style=\"width:130px;text-align: center;\">属性名</th>\n        <th style=\"width:100px;text-align: center;\">类型</th>\n        <th style=\"width:100px;text-align: center;\">必填</th>\n        <th style=\"width:598px;text-align: center;\">描述</th>\n    </tr>\n    <tr>\n        <td style=\"text-align: center;\">name</td>\n        <td style=\"text-align: center;\">String</td>\n        <td style=\"text-align: center;\">true</td>\n        <td style=\"text-align: center;\">同父路由元</td>\n    </tr>\n    <tr>\n        <td style=\"text-align: center;\">path</td>\n        <td style=\"text-align: center;\">String</td>\n        <td style=\"text-align: center;\">true</td>\n        <td style=\"text-align: center;\">如果父路由元的路径是\"/index\"，子路由元的路径是\"/page\"，最后的路由将会是\"/index/page\"，这里只是将两个路由进行拼接，和vue-router的路径一样</td>\n    </tr>\n    <tr>\n        <td style=\"text-align: center;\">icon</td>\n        <td style=\"text-align: center;\">String</td>\n        <td style=\"text-align: center;\">false</td>\n        <td style=\"text-align: center;\">同父路由元</td>\n    </tr>\n    <tr>\n        <td style=\"text-align: center;\">template\\templates</td>\n        <td style=\"text-align: center;\">Object</td>\n        <td style=\"text-align: center;\">false</td>\n        <td style=\"text-align: center;\">同父路由元</td>\n    </tr>\n    <tr>\n        <td style=\"text-align: center;\">active</td>\n        <td style=\"text-align: center;\">Boolean</td>\n        <td style=\"text-align: center;\">false</td>\n        <td style=\"text-align: center;\">同父路由元</td>\n    </tr>\n</table>\n\n<hr>\n<p><strong>路由导航守卫</strong></p>\n<pre class=\"prettyprint\"><code>// options的结构\noptions = [\n    {\n        name: &quot;login&quot;,\n        path: &quot;/login&quot;,\n        independent: true,\n        template: login\n    },\n    ...\n]\n// 你可以通过设置before和after来拦截路由\n// before表示，当进入路由的时候\n// after表示，当离开路由的时候\n// 这两个属性都是数组，会依次执行函数\n// 需要注意的是，before中，next不会中断后边函数的执行\noptions.before = [\n    (to, from, next) =&amp;gt; {\n        ...\n    },\n    (to, from, next) =&amp;gt; {\n        ...\n    },\n    ...\n]\n\noptions.after = [\n    (to, from) =&amp;gt; {\n        ...\n    },\n    (to, from) =&amp;gt; {\n        ...\n    },\n    ...\n]</code></pre><hr>\n<p><strong>Icon 说明</strong></p>\n<p>如果你要自定义Icon，你可以在入口.vue文件中@import相关文件，然后在icon属性里协商对应的icon名称，注意，这里你自定义的icon是通过class进行表示的</p>\n<p>这里有两个网站可以做自定义icon，有兴趣可以研究下</p>\n<ol>\n<li><a href=\"https://www.iconfont.cn\">https://www.iconfont.cn</a></li>\n<li><a href=\"https://icomoon.io/app/#/select\">https://icomoon.io/app/#/select</a></li>\n</ol>\n"},{"context":[{"title":"约定","link":"javascript:void(0)"},{"title":"状态管理约定","link":"/nayo-admin-doc-cn/rule/state.html"}],"content":"\n        <h3 id=\"状态管理约定\">\n            <a href='#状态管理约定' class='header-anchor'>#</a>\n            <span>状态管理约定</span>\n        </h3>\n    <hr>\n<p>Nayo-Admin的状态管理是通过Vuex进行的</p>\n<p>我们在使用的时候，需要通过storeRegister进行注册，不注册会使用默认</p>\n<p>当我们注册路由过后，state中会存在<strong>router_info</strong>，存储着路由配置的原始信息</p>\n<hr>\n<p>nayo.storeRegister(options)   ---&gt; 注册vuex</p>\n<pre class=\"prettyprint\"><code>// options结构\noptions = {\n    state: {...},\n    actions: {...},\n    mutations: {...},\n    modules: {...}\n}\n\n// options里面的属性与vuex的核心概念是一致的\n// https://vuex.vuejs.org/guide/state.html</code></pre>"},{"context":[{"title":"约定","link":"javascript:void(0)"},{"title":"多语言约定","link":"/nayo-admin-doc-cn/rule/lang.html"}],"content":"\n        <h3 id=\"多语言约定\">\n            <a href='#多语言约定' class='header-anchor'>#</a>\n            <span>多语言约定</span>\n        </h3>\n    <hr>\n<p>Nayo-Admin的多语言是基于i18n的</p>\n<p>在使用多语言的时候，需要注册，如果不注册，会使用空的设置，不影响使用</p>\n<hr>\n<ul>\n<li>nayo.langRegister(options)    ---&gt; 注册Lang<br><code>`</code><br>// options结构<br>options = {<br>  page_1: {<pre class=\"prettyprint\"><code>  en: {\n      hello: &quot;hello&quot;\n  },\n  cn: {\n      hello: &quot;你好&quot;\n  },\n  ...</code></pre>  },<br>  page_2: {...}<br>}</li>\n</ul>\n<p>// 可以使用 this.$i18n etc... <a href=\"http://kazupon.github.io/vue-i18n/introduction.html\">http://kazupon.github.io/vue-i18n/introduction.html</a><br><code>`</code></p>\n"},{"context":[{"title":"权限控制","link":"/nayo-admin-doc-cn/auth.html"}],"content":"\n        <h3 id=\"权限控制\">\n            <a href='#权限控制' class='header-anchor'>#</a>\n            <span>权限控制</span>\n        </h3>\n    <p>因为权限控制会根据不同场景有不同的表现，这里就不做单独设计了，大家可以自定义</p>\n<p>在Nayo-Admin demo中未存在权限控制的功能，但是，你可以通过注册路由的时候，写入路由导航守卫before和after进行拦截或者根据状态管理中的<strong>router_info</strong>进行相关设置</p>\n"},{"context":[{"title":"Mock数据模拟建议","link":"/nayo-admin-doc-cn/mock.html"}],"content":"\n        <h3 id=\"Mock数据模拟建议\">\n            <a href='#Mock数据模拟建议' class='header-anchor'>#</a>\n            <span>Mock数据模拟建议</span>\n        </h3>\n    <p>给大家安利一下easy-mock</p>\n<p><a href=\"https://easy-mock.com\">https://easy-mock.com</a></p>\n<p>可以通过这个模拟数据接口进行开发</p>\n"}];

    var escapeHtml = function (html) {
        let str = html;
        str = str.replace(/&/g, '&amp;');  
        str = str.replace(/</g, '&lt;');  
        str = str.replace(/>/g, '&gt;');
        str = str.replace(/"/g, '&quot;');
        str = str.replace(/'/g, '&#039;');  
        return str;
    }

    var clearHtml = function(html) {
        let str = html;
        str = str.replace(/&amp;/g, ''); 
        str = str.replace(/&lt;/g, ''); 
        str = str.replace(/&gt;/g, '');
        str = str.replace(/&quot;/g, '');
        str = str.replace(/&#039;/g, '');
        return str;
    }

    var randStr = function () {
        return Math.random().toString(36).substr(2);
    };

    var findTitle = function (ele) {
        var findPrevs = function (ele) {
            var children = $(ele).parent().children();
            var prevs = [];
            var findIt = false;
            children = Array.prototype.slice.call(children);
            children.forEach(function (subEle) {
                if ($(subEle).is($(ele))) {
                    findIt = true;
                }
                if (findIt === false && $(subEle).text() != "") {
                    prevs.push(subEle);
                }
            });
            return prevs;
        };

        var findH = function (eles) {
            var _eles = Array.prototype.slice.call(eles);
            _eles.reverse();
            var title = "";
            var id = "";
            _eles.forEach(function (item) {
                if (!title) {
                    if (item.nodeName[0] === "H") {
                        title = $(item).text();
                        id = $(item).attr("id");
                    }
                }
            });
            return {
                text: title,
                id: id
            };
        };
        var prevs = findPrevs(ele);
        if (prevs.length) {
            return findH(prevs);
        }
    };

    window.searchData = function (keyword) {
        var searchResult = [];
        content.forEach(function (item, index) {
            var tempHtml = "<div id='" + randStr() + "'></div>";
            var tempEle = $(tempHtml);
            var findArray = [];
            tempEle.html(clearHtml(item.content));
            findArray = tempEle.find(":contains('" + keyword + "')");
            findArray = Array.prototype.slice.call(findArray);
            if (findArray.length) {
                findArray.forEach(function (ele) {
                    var findContent = $(ele).text();
                    findContent = findContent[0] === "<" ? $(findContent).text() : findContent;
                    findContent = escapeHtml(findContent);
                    findContent = findContent.replace(new RegExp(keyword, 'g'), "<b>" + keyword + "</b>");
                    var hObj = findTitle(ele);
                    if (hObj) {
                        searchResult.push({
                            context: item.context,
                            title: hObj.text,
                            hid: hObj.id,
                            findContent: findContent
                        });
                    }
                });
            }
        });
        return searchResult;
    };
})();