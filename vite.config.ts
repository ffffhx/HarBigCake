import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // UnoCSS(),
  ],
  css: {  
    preprocessorOptions: {  
      less: {  
        // Less 配置项  
        javascriptEnabled: true, // 允许在 Less 中使用 JavaScript 表达式  
        modifyVars: {  
          // 覆盖 Ant Design Vue 的主题变量或其他全局 Less 变量  
          'primary-color': '#1DA57A',  
          'link-color': '#1DA57A',  
          // ...其他变量  
        },  
      },  
    },  
  },  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
