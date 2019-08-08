### 多语言约定

---

Nayo-Admin的多语言是基于i18n的

在使用多语言的时候，需要注册，如果不注册，会使用空的设置，不影响使用

---

- nayo.langRegister(options)    ---> 注册Lang
```
// options结构
options = {
    page_1: {
        en: {
            hello: "hello"
        },
        cn: {
            hello: "你好"
        },
        ...
    },
    page_2: {...}
}

// 可以使用 this.$i18n etc... http://kazupon.github.io/vue-i18n/introduction.html
```