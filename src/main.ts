
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import elementPlus from 'element-plus'//引入element组件库
import 'element-plus/dist/index.css'//引入element组件库
import './assets/main.css'
import './assets/main.less'
import '@/assets/font.css'
import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/dark/css-vars.css'//暗黑模式主题切换
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/assets/rgbaster.js'
import { vue_next_focus } from 'vue-next-focus'
import * as echarts from 'echarts';
import 'echarts-gl';
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
// app.use(presetUno())
app.use(createPinia())
app.use(router)
app.use(elementPlus)
app.use(vue_next_focus)
app.mount('#app')
