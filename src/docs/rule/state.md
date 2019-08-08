### 状态管理约定

---

Nayo-Admin的状态管理是通过Vuex进行的

我们在使用的时候，需要通过storeRegister进行注册，不注册会使用默认

当我们注册路由过后，state中会存在__router_info__，存储着路由配置的原始信息

---
nayo.storeRegister(options)   ---> 注册vuex

```
// options结构
options = {
    state: {...},
    actions: {...},
    mutations: {...},
    modules: {...}
}

// options里面的属性与vuex的核心概念是一致的
// https://vuex.vuejs.org/guide/state.html
```