### 路由约定

当我们注册路由的时候，注册的路由数据有一定要求

---
nayo.routerRegister(options)  ---> 注册路由，可以参照demo
```
// options的结构
options = [
    {
        name: "login",
        path: "/login",
        independent: true,
        template: login
    },
    ...
]

// 选项是一个路由表，每一个项目是一个路由元
// 路由表是一个数组
// 路由元是一个对象
// 这个路由表注册后，会存放在Vuex的state中的__router_info__里，可以通过this.$store.state查看
```

---
**路由元属性**
<table>
    <tr>
        <th style="width:130px;text-align: center;">属性名</th>
        <th style="width:100px;text-align: center;">类型</th>
        <th style="width:100px;text-align: center;">必填</th>
        <th style="width:598px;text-align: center;">描述</th>
    </tr>
    <tr>
        <td style="text-align: center;">name</td>
        <td style="text-align: center;">String</td>
        <td style="text-align: center;">true</td>
        <td style="text-align: center;">路由元名称,是唯一的 可以通过this.$route.name访问</td>
    </tr>
    <tr>
        <td style="text-align: center;">path</td>
        <td style="text-align: center;">String</td>
        <td style="text-align: center;">true</td>
        <td style="text-align: center;">路由路径, 像"/index"这样的, 这个和vue-router中的path一样</td>
    </tr>
    <tr>
        <td style="text-align: center;">icon</td>
        <td style="text-align: center;">String</td>
        <td style="text-align: center;">false</td>
        <td style="text-align: center;">如果你想用图标，可以使用icon的名称，如果你使用iView的图标，需要在名称前面加上"ivu-icon-"</td>
    </tr>
    <tr>
        <td style="text-align: center;">template\templates</td>
        <td style="text-align: center;">Object</td>
        <td style="text-align: center;">false</td>
        <td style="text-align: center;">路由匹配到后的视图组件, 如果你自定义了layout, 你可能需要用到这个, 可以查看 https://router.vuejs.org/guide/essentials/named-views.html 获取如何使用templates的方法</td>
    </tr>
    <tr>
        <td style="text-align: center;">active</td>
        <td style="text-align: center;">Boolean</td>
        <td style="text-align: center;">false</td>
        <td style="text-align: center;">当你进入admin, 可以通过设置这个属性设置第一个你想看到的页面，如果你自定义了layout，你需要书写导航的逻辑</td>
    </tr>
    <tr>
        <td style="text-align: center;">independent</td>
        <td style="text-align: center;">Boolean</td>
        <td style="text-align: center;">false</td>
        <td style="text-align: center;">如果路由对应的视图组件需要独立于布局视图，你可以设置这个, 像demo中的"/login"一样, 这个判断是否是独立函数，存放于nayo-admin-core中的"src/entrance.vue"里</td>
    </tr>
    <tr>
        <td style="text-align: center;">children</td>
        <td style="text-align: center;">Array</td>
        <td style="text-align: center;">false</td>
        <td style="text-align: center;">这里是二级子路由，不支持更深层路由</td>
    </tr>
</table>

**注意：你需要准守一下规则**
1. 如果你设置independent为true，icon不会生效
2. 如果你设置children，父级和下级的independent不会生效
3. 如果你设置children，父级的template\templates不会生效
3. 如果你设置children，父级的active不会生效， 但是active会在子路由元中生效

---
**子路由元属性**
<table>
    <tr>
        <th style="width:130px;text-align: center;">属性名</th>
        <th style="width:100px;text-align: center;">类型</th>
        <th style="width:100px;text-align: center;">必填</th>
        <th style="width:598px;text-align: center;">描述</th>
    </tr>
    <tr>
        <td style="text-align: center;">name</td>
        <td style="text-align: center;">String</td>
        <td style="text-align: center;">true</td>
        <td style="text-align: center;">同父路由元</td>
    </tr>
    <tr>
        <td style="text-align: center;">path</td>
        <td style="text-align: center;">String</td>
        <td style="text-align: center;">true</td>
        <td style="text-align: center;">如果父路由元的路径是"/index"，子路由元的路径是"/page"，最后的路由将会是"/index/page"，这里只是将两个路由进行拼接，和vue-router的路径一样</td>
    </tr>
    <tr>
        <td style="text-align: center;">icon</td>
        <td style="text-align: center;">String</td>
        <td style="text-align: center;">false</td>
        <td style="text-align: center;">同父路由元</td>
    </tr>
    <tr>
        <td style="text-align: center;">template\templates</td>
        <td style="text-align: center;">Object</td>
        <td style="text-align: center;">false</td>
        <td style="text-align: center;">同父路由元</td>
    </tr>
    <tr>
        <td style="text-align: center;">active</td>
        <td style="text-align: center;">Boolean</td>
        <td style="text-align: center;">false</td>
        <td style="text-align: center;">同父路由元</td>
    </tr>
</table>

---
**路由导航守卫**

```
// options的结构
options = [
    {
        name: "login",
        path: "/login",
        independent: true,
        template: login
    },
    ...
]
// 你可以通过设置before和after来拦截路由
// before表示，当进入路由的时候
// after表示，当离开路由的时候
// 这两个属性都是数组，会依次执行函数
// 需要注意的是，before中，next不会中断后边函数的执行
options.before = [
    (to, from, next) => {
        ...
    },
    (to, from, next) => {
        ...
    },
    ...
]

options.after = [
    (to, from) => {
        ...
    },
    (to, from) => {
        ...
    },
    ...
]
```

---
**Icon 说明**

如果你要自定义Icon，你可以在入口.vue文件中@import相关文件，然后在icon属性里协商对应的icon名称，注意，这里你自定义的icon是通过class进行表示的

这里有两个网站可以做自定义icon，有兴趣可以研究下

1. https://www.iconfont.cn
2. https://icomoon.io/app/#/select