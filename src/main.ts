
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import elementPlus from 'element-plus'//引入element组件库
import 'element-plus/dist/index.css'//引入element组件库
import './assets/main.css'
import './assets/main.less'

import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/dark/css-vars.css'//暗黑模式主题切换
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



// import 'element-plus/lib/theme-chalk/index.css'
// import 'element-plus/lib/theme-chalk/el-icon.css'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(createPinia())
app.use(router)
app.use(elementPlus)
app.mount('#app')
