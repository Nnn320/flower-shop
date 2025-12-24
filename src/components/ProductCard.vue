<script setup>
const props = defineProps({ product: Object, addToCart: Function })

function getObjectPosition(name) {
  if (name.includes('百合')) return 'center 32%'
  if (name.includes('玫瑰')) return 'center 33%'
  return 'center'
}
</script>

<template>
  <article class="product-card">
    <img :src="props.product.image" :alt="props.product.name" :style="{ objectPosition: getObjectPosition(props.product.name) }" />
    <h3>{{ props.product.name }}</h3>
    <p class="price">¥{{ props.product.price }}</p>
    <div class="actions">
      <button @click="props.addToCart(props.product)">加入购物车</button>
    </div>
  </article>
</template>

<style scoped>
.product-card { background:#fff; padding:1rem; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.05); text-align:center; width: 210px }
.product-card img { width:100%; height:160px; object-fit:cover; border-radius:6px }
.product-card h3 { margin:0.5rem 0 }
.price { color:#c0392b; font-weight:600 }
.actions { margin-top:0.5rem }
</style>
