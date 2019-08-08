### 约定
Nayo Admin 希望做到的是，高度内聚和低度耦合，尤其在Admin页面开发的时候，如果一个页面引用了其他页面的某个业务处理逻辑，当需要改动该逻辑的时候，往往需要分离这个逻辑，这样就会造成不必要的时间成本。

如果我们能按照Nayo Admin的约定去开发页面，虽然在表面上看来，你需要复制或重写一些其他页面的代码在当前页面，但是，由于这种高度的内聚，我们可以更好地专注于当前的页面；如果你想要进行不同页面的数据通信，请使用Vuex\Session\Cookie\localStore进行管理

Nayo Admin使用的UI是iView，你可以在.vue中使用iView的全部组件

Nayo Admin 需要遵守以下方面的约定：
1. Router（路由）
2. Page（页面）
3. Vuex（状态管理）
4. Lang（多语言）

---
注意，使用路由\状态管理\多语言的时候，如果不注册，会直接使用默认设置

---

**集成的功能**
- $iView

你可以在.vue组件中使用iView对象 window.$iView


- $nayo

Nayo Admin 还将一些工具放在了$nayo对象中，可以在vue组件中通过this.$nayo进行调用，也可以通过window.$nayo调用

- $root

为了在非vue文件中使用相关vue实例特性，nayo把根组件实例绑定在了window下，你可以使用window.$root获取vue根组件实例

**工具列表:**
1. underScore ----> https://underscorejs.org/
```
this.$nayo.utils.underScore
window.$nayo.utils.underScore
```
2. outils ----> https://www.npmjs.com/package/outils
```
this.$nayo.utils.outils
window.$nayo.utils.outils
```
3. cookie ----> https://www.npmjs.com/package/js-cookie
```
this.$nayo.utils.cookie
window.$nayo.utils.cookie
```
4. md5 ----> https://www.npmjs.com/package/md5
```
this.$nayo.utils.md5
window.$nayo.utils.md5
```
5. moment ----> https://www.npmjs.com/package/moment
```
this.$nayo.time.moment
window.$nayo.time.moment
```
6. moment-timezone ----> https://www.npmjs.com/package/moment-timezone
```
this.$nayo.time.momentTz
window.$nayo.time.momentTz
```
7. axios ----> https://www.npmjs.com/package/axios
```
this.$nayo.axios
window.$nayo.axios
```
---

**文档**
- [Vuex Doc](https://vuex.vuejs.org/guide/)
- [Vue-Router Doc](https://router.vuejs.org/installation.html)
- [Vue-i18n Doc](http://kazupon.github.io/vue-i18n/introduction.html)
- [UnderScore Doc](https://underscorejs.org/)
- [Outils Doc](https://www.npmjs.com/package/outils)
- [Js-cookie Doc](https://www.npmjs.com/package/js-cookie)
- [Md5 Doc](https://www.npmjs.com/package/md5)
- [Moment Doc](https://www.npmjs.com/package/moment)
- [Moment-timezone Doc](https://www.npmjs.com/package/moment-timezone)
- [Axios Doc](https://www.npmjs.com/package/axios)