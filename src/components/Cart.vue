<script setup>
import { computed } from 'vue'
const props = defineProps({ cart: Array, removeFromCart: Function })

const total = computed(() => props.cart.reduce((s, p) => s + (p.price || 0), 0))
</script>

<template>
  <section class="cart">
    <h2>购物车</h2>
    <p v-if="!props.cart.length">购物车为空，去选购心仪的花束吧。</p>
    <ul v-else class="cart-list">
      <li v-for="(item, idx) in props.cart" :key="idx">
        <img :src="item.image" alt="item.name" />
        <div class="meta">
          <strong>{{ item.name }}</strong>
          <div class="price">¥{{ item.price }}</div>
        </div>
        <button class="remove" @click="props.removeFromCart(idx)">移除</button>
      </li>
    </ul>
    <div class="cart-footer" v-if="props.cart.length">
      <div>合计： <strong>¥{{ total }}</strong></div>
      <button class="checkout">结算（示例）</button>
    </div>
  </section>
</template>

<style scoped>
.cart-list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:0.75rem }
.cart-list li { display:flex; gap:0.75rem; align-items:center; background:#fff; padding:0.5rem; border-radius:6px }
.cart-list img { width:64px; height:64px; object-fit:cover; border-radius:6px }
.meta { flex:1 }
.remove { background:#fff; border:1px solid #eee }
.cart-footer { margin-top:1rem; display:flex; justify-content:space-between; align-items:center }
.checkout { background:#42b883; color:#fff }
</style>
