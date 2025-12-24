<script setup>
import { ref } from 'vue'

const cart = ref([])

function addToCart(product) {
  cart.value.push(product)
}

function removeFromCart(index) {
  cart.value.splice(index, 1)
}
</script>

<template>
  <div id="app">
    <div class="bg-layer" :style="{ backgroundImage: `url(/1.jpg)` }"></div>
    <header class="site-header">
      <div class="brand">
        <router-link to="/" class="logo-link">
          <img src="/logo.jpg" alt="logo" class="logo" />
        </router-link>
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
      <router-view :add-to-cart="addToCart" :cart="cart" :remove-from-cart="removeFromCart" />
    </main>

    <footer class="site-footer">© 2025 花匠花店 — 温柔的花，温暖的心</footer>
  </div>
</template>

<style>
#app {
  background-image: url('/1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  position: relative;
}

#app::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 1;
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
}
.brand { display:flex; align-items:center; gap:0.75rem }
.brand h1 { margin:0; font-size:1.4rem; color:#213547 }
.logo { height:5rem }
.nav a { margin-left:0.5rem; text-decoration: none; color: inherit; padding: 0.5rem; border-radius: 4px; transition: background 0.3s }
.nav a:hover, .nav a.router-link-active { background: rgba(255,255,255,0.1) }
.main { margin-top:1.5rem; position: relative; z-index: 2; }
.site-footer { margin-top:2rem; text-align:center; color:#888; position: relative; z-index: 2; }
</style>
