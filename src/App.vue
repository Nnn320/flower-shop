<script setup>
import { ref, provide } from 'vue'

const cart = ref([])

function addToCart(product) {
  cart.value.push(product)
}

function removeFromCart(index) {
  cart.value.splice(index, 1)
}

// 通过 provide 向子组件提供购物车状态和方法
provide('cart', cart)
provide('addToCart', addToCart)
provide('removeFromCart', removeFromCart)
</script>

<template>
  <div id="app">
    <header class="site-header">
      <div class="brand">
        <img src="/logo.jpg" alt="logo" class="logo" />
        <h1>花匠花店</h1>
      </div>
      <nav class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/catalog">花束</router-link>
        <router-link to="/cart">购物车 ({{ cart.length }})</router-link>
        <router-link to="/contact">联系我们</router-link>
      </nav>
    </header>

    <main class="main">
      <router-view />
    </main>

    <footer class="site-footer">© 2025 花匠花店 — 温柔的花，温暖的心</footer>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
  background-color: transparent;
}

.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: linear-gradient(90deg,#ffefef,#fff0f6);
  border-radius: 8px;
  position: relative;
  z-index: 2;
  margin: 1rem;
}

.brand { 
  display: flex; 
  align-items: center; 
  gap: 0.75rem; 
}

.brand h1 { 
  margin: 0; 
  font-size: 1.4rem; 
  color: #213547; 
}

.logo { 
  height: 5rem; 
}

.nav a { 
  margin-left: 0.5rem; 
  text-decoration: none; 
  color: #213547; 
  padding: 0.5rem; 
  border-radius: 4px; 
  transition: background 0.3s; 
}

.nav a:hover, .nav a.router-link-active { 
  background: rgba(255,255,255,0.5); 
}

.main { 
  margin: 1.5rem; 
  position: relative; 
  z-index: 2; 
}

.site-footer { 
  margin: 2rem 1rem 1rem; 
  text-align: center; 
  color: #213547; 
  position: relative; 
  z-index: 2; 
}
</style>
