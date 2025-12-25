// 导入Vue Router的核心方法
import { createRouter, createWebHistory } from 'vue-router'
// 导入你的页面组件（路径和你项目中的一致，保留原有组件导入）
import Home from '../components/Home.vue'
import Catalog from '../components/Catalog.vue'
import Cart from '../components/Cart.vue'
import Contact from '../components/Contact.vue'

// 路由规则（保留你原有所有路由，默认根路径对应Home主页）
const routes = [
  { path: '/', component: Home }, // 访问根路径直接显示主页
  { path: '/catalog', component: Catalog },
  { path: '/cart', component: Cart },
  { path: '/contact', component: Contact }
]

// 创建路由实例，配置部署路径base（和你的部署路径一致）
const router = createRouter({
  history: createWebHistory('/flower-shop/dist/'),
  routes
})

// 导出路由实例，供main.js使用
export default router