'use strict';
const path = require('path')

module.exports = {
    doc: {
        name: "Nayo Admin 中文文档",
        description: "Nayo Admin 中文文档",
        version: "1.0.0",
        dir: "./docs",
        outDir: "./../build",
        staticDir: "./../static"
    }, 
    theme: {
        dir: "", 
        title: "",
        headHtml: "",
        footHtml: "",
        isMinify: true,
        rootPath: "/"
    },
    nav: {
        tree: "./tree"
    }
}