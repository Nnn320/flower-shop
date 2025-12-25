<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

function submitForm() {
  alert('感谢您的消息！我们会尽快回复。')
  form.value = { name: '', email: '', message: '' }
}
</script>

<template>
  <section class="contact">
    <h2>联系我们</h2>
    <p>有任何问题或建议，请通过以下方式联系我们：</p>
    <div class="contact-info">
      <div class="info-item">
        <strong>电话：</strong> 18929690017
      </div>
      <div class="info-item">
        <strong>邮箱：</strong> 2894945837@qq.com
      </div>
      <div class="info-item">
        <strong>地址：</strong> 广东省珠海市金湾区珠海大道广东科学技术职业学院内
      </div>
      <div class="info-item">
        <strong>营业时间：</strong> 周一至周日 9:00-21:00
      </div>
    </div>
    <div class="contact-form">
      <h3>发送消息</h3>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">姓名：</label>
          <input id="name" v-model="form.name" type="text" required />
        </div>
        <div class="form-group">
          <label for="email">邮箱：</label>
          <input id="email" v-model="form.email" type="email" required />
        </div>
        <div class="form-group">
          <label for="message">消息：</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">发送</button>
      </form>
    </div>
  </section>
</template>



<style scoped>
.contact { max-width: 800px; margin: 0 auto; text-align: left }
.contact h2 { text-align: center }
.contact-info { margin: 2rem 0; display: grid; gap: 1rem }
.info-item { padding: 1rem; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05) }
.contact-form { margin-top: 2rem; padding: 1rem; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05) }
.form-group { margin-bottom: 1rem }
.form-group label { display: block; margin-bottom: 0.5rem; font-weight: 600 }
.form-group input, .form-group textarea { width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px }
.form-group textarea { height: 100px; resize: vertical }
button[type="submit"] { padding: 0.75rem 1.5rem; background: #ff9fb1; color: #fff; border: none; border-radius: 4px; cursor: pointer }
</style>