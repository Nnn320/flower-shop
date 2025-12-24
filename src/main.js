import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import Catalog from './components/Catalog.vue'
import Cart from './components/Cart.vue'
import Contact from './components/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/catalog', component: Catalog },
  { path: '/cart', component: Cart },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory('/flower/'), // 你的仓库名
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
