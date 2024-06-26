/*
 * @Author: ffffhx 17862926305@163.com
 * @Date: 2024-04-19 12:56:09
 * @LastEditors: ffffhx 17862926305@163.com
 * @LastEditTime: 2024-05-13 18:35:36
 * @FilePath: \HarBigCake\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import elementPlus from 'element-plus'//引入element组件库
import 'element-plus/dist/index.css'//引入element组件库
// import './assets/main.css'
import './assets/main.less'
import '@/assets/font.css'
import '@/assets/home.less'
import App from './App.vue'

const pinia = createPinia()
import router from './router'
import 'element-plus/theme-chalk/dark/css-vars.css'//暗黑模式主题切换
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/assets/rgbaster.js'
import { vue_next_focus } from 'vue-next-focus'
import * as echarts from 'echarts';
import 'echarts-gl';
import '@/input.css';
import '@/output.css';

// import 'virtual:uno.css'
// import { presetUno } from 'unocss'
// import Vue from 'vue' // 添加这一行

// Vue.prototype.$echarts = echarts //可以全局使用 不用每次使用需要在页面导入
// import * as echarts from 'echarts';
const app = createApp(App)
app.config.globalProperties.$echarts = echarts
//文件全部再
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
// app.use(presetUno())
app.use(pinia)

app.use(elementPlus)
app.use(vue_next_focus)

app.mount('#app')
