// 保留你原有所有导入代码
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 新增：导入路由实例（替换原来在main.js里直接创建路由的逻辑）
import router from './router/index.js'

// 保留你原有所有代码（如创建app实例、全局配置等）
const app = createApp(App)

// 保留：挂载路由（仅修改router的来源，从导入而来，不是本地创建）
app.use(router)

// 保留你原有所有其他配置（如全局组件、指令等，无变动）
// ...（你的原有其他代码，完全保留，无需删除）

// 保留：挂载app
app.mount('#app')