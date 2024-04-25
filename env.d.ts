/// <reference types="vite/client" />

//解决 无法找到模块“xxx.vue”的声明文件 xxx隐式拥有 “any“ 类型。的问题
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
  }