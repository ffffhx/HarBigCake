
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import elementPlus from 'element-plus'//引入element组件库
import 'element-plus/dist/index.css'//引入element组件库
import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/dark/css-vars.css'//暗黑模式主题切换
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(elementPlus)
app.mount('#app')
