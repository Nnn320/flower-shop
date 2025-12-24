<script setup>
import { ref, computed } from 'vue'
import Home from './components/Home.vue'
import Catalog from './components/Catalog.vue'
import Cart from './components/Cart.vue'
import Contact from './components/Contact.vue'

const route = ref('home')
const cart = ref([])

function addToCart(product) {
  cart.value.push(product)
}

function removeFromCart(index) {
  cart.value.splice(index, 1)
}

function setRoute(name) { route.value = name }

const currentComponent = computed(() => {
  if (route.value === 'home') return Home
  if (route.value === 'catalog') return Catalog
  if (route.value === 'cart') return Cart
  return Contact
})
</script>

<template>
  <div id="app">
    <header class="site-header">
      <div class="brand">
        <img src="/logo.jpg" alt="logo" class="logo" />
        <h1>花匠花店</h1>
      </div>
      <nav class="nav">
        <button @click="route = 'home'">首页</button>
        <button @click="route = 'catalog'">花束</button>
        <button @click="route = 'cart'">购物车 ({{ cart.length }})</button>
        <button @click="route = 'contact'">联系我们</button>
      </nav>
    </header>

    <main class="main">
      <component :is="currentComponent" :add-to-cart="addToCart" :set-route="setRoute" :cart="cart" :remove-from-cart="removeFromCart" />
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
.nav button { margin-left:0.5rem }
.main { margin-top:1.5rem; position: relative; z-index: 2; }
.site-footer { margin-top:2rem; text-align:center; color:#888; position: relative; z-index: 2; }
</style>
