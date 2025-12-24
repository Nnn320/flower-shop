<script setup>
const props = defineProps({ setRoute: Function })
</script>

<template>
  <section class="hero card">
    <h2>欢迎来到 花匠花店</h2>
    <p>我们为您精心搭配各式花束，适合表达爱意、祝贺与感谢。</p>
    <div class="hero-actions">
      <button @click="props.setRoute('catalog')">浏览花束</button>
      <a href="#" @click.prevent="props.setRoute('cart')">查看购物车</a>
    </div>
  </section>
</template>

<style scoped>
.hero { text-align:center }
.hero h2 { font-size:2rem; margin-bottom:0.25rem }
.hero p { color:#555 }
.hero-actions { margin-top:1rem; display:flex; gap:1rem; justify-content:center }
.hero-actions a { align-self:center; color:#646cff }
</style>
