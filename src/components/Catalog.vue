<script setup>
import ProductCard from './ProductCard.vue'
import img1 from '../assets/meigui.jpg'
import img2 from '../assets/baihe.jpg'
import img3 from '../assets/yehua.jpg'
import img4 from '../assets/huahe.jpg'
import { ref, computed, inject } from 'vue'

const addToCart = inject('addToCart')

const products = [
  { id: 1, name: '经典玫瑰花束', price: 128, image: img1 },
  { id: 2, name: '温柔百合搭配', price: 98, image: img2 },
  { id: 3, name: '野花清新花束', price: 78, image: img3 },
  { id: 4, name: '节日精选花盒', price: 198, image: img4 }
]

const searchQuery = ref('') // 输入框的值
const activeSearchQuery = ref('') // 实际用于搜索的关键词
const sortOrder = ref('') // 'asc', 'desc', ''

const filteredProducts = computed(() => {
  let list = [...products] // 复制数组避免修改原数组
  if (activeSearchQuery.value) {
    list = list.filter(p => p.name.toLowerCase().includes(activeSearchQuery.value.toLowerCase()))
  }
  if (sortOrder.value === 'asc') {
    list = list.sort((a, b) => a.price - b.price)
  } else if (sortOrder.value === 'desc') {
    list = list.sort((a, b) => b.price - a.price)
  }
  return list
})

function performSearch() {
  activeSearchQuery.value = searchQuery.value
}

function clearSearch() {
  searchQuery.value = ''
  activeSearchQuery.value = ''
}

function setSort(order) {
  sortOrder.value = order
}
</script>

<template>
  <section class="catalog">
    <h2>花束目录</h2>
    <div class="search-bar">
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="搜索花束..." 
        @keyup.enter="performSearch"
      />
      <button @click="performSearch">搜索</button>
      <button v-if="activeSearchQuery" @click="clearSearch" class="clear-btn">清除搜索</button>
    </div>
    <div class="sort-bar">
      <button @click="setSort('asc')" :class="{ active: sortOrder === 'asc' }">价格升序</button>
      <button @click="setSort('desc')" :class="{ active: sortOrder === 'desc' }">价格降序</button>
      <button @click="setSort('')" :class="{ active: sortOrder === '' }">默认排序</button>
    </div>
    <p>挑选您喜欢的花束，点击"加入购物车"即可。</p>

    <div class="grid">
      <ProductCard v-for="p in filteredProducts" :key="p.id" :product="p" :add-to-cart="addToCart" />
    </div>
  </section>
</template>

<style scoped>
.catalog h2 { margin-top:0 }
.search-bar { margin: 1rem 0; display: flex; gap: 0.5rem; align-items: center }
.search-bar input { padding: 0.5rem; flex: 1; max-width: 300px; border: 1px solid #ddd; border-radius: 4px }
.search-bar button { padding: 0.5rem 1rem; background: #ff9fb1; color: #fff; border: none; border-radius: 4px; cursor: pointer; white-space: nowrap }
.search-bar button.clear-btn { background: #999; }
.search-bar button.clear-btn:hover { background: #777; }
.sort-bar { margin: 0.5rem 0; display: flex; gap: 0.5rem }
.sort-bar button { padding: 0.4rem 0.8rem; background: #fff; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; color: #213547 }
.sort-bar button:hover { background: #f5f5f5 }
.sort-bar button.active { background: #ff9fb1; color: #fff; border-color: #ff9fb1 }
.grid { display:flex; flex-wrap:wrap; gap:1rem; margin-top:1rem; justify-content: flex-start }
</style>
