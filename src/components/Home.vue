<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToCatalog() {
  router.push('/catalog')
}

function goToCart() {
  router.push('/cart')
}
</script>

<template>
  <div class="home-container">
    <section class="hero card">
      <div class="hero-content">
        <h2>欢迎来到 花匠花店</h2>
        <p class="hero-subtitle">我们为您精心搭配各式花束，适合表达爱意、祝贺与感谢</p>
        <div class="hero-actions">
          <button class="btn-primary" @click="goToCatalog">浏览花束</button>
          <button class="btn-secondary" @click="goToCart">查看购物车</button>
        </div>
      </div>
    </section>

    <section class="features card">
      <h3>我们的特色</h3>
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon">🌸</div>
          <h4>精选花材</h4>
          <p>每日新鲜到货，精心挑选优质花材</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">💐</div>
          <h4>专业搭配</h4>
          <p>花艺师精心设计，每一束都独特美丽</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">🎁</div>
          <h4>精美包装</h4>
          <p>用心包装，让您的礼物更加完美</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">🚚</div>
          <h4>快速配送</h4>
          <p>同城配送，快速送达您的手中</p>
        </div>
      </div>
    </section>

    <section class="services card">
      <h3>服务场景</h3>
      <div class="services-list">
        <div class="service-tag">💕 表达爱意</div>
        <div class="service-tag">🎉 生日祝福</div>
        <div class="service-tag">🎊 节日庆祝</div>
        <div class="service-tag">🙏 感谢致意</div>
        <div class="service-tag">💐 开业庆典</div>
        <div class="service-tag">🌹 求婚表白</div>
        <div class="service-tag">🎁 乔迁之喜</div>
        <div class="service-tag">💝 慰问关怀</div>
      </div>
    </section>

    <section class="welcome-message card">
      <h3>关于我们</h3>
      <p>花匠花店致力于为您提供最优质的花艺服务。我们用心挑选每一朵花，精心搭配每一束花，让每一份心意都能通过美丽的花朵完美传达。无论是浪漫的告白、温馨的祝福，还是诚挚的感谢，我们都能为您找到最合适的花束。</p>
      <p class="highlight">营业时间：周一至周日 9:00-21:00</p>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.hero {
  text-align: center;
  padding: 3rem 2.5rem;
}

.hero-content {
  max-width: 700px;
  margin: 0 auto;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #213547;
  font-weight: 600;
  background: linear-gradient(135deg, #ff9fb1, #ff6b9d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-primary {
  background: #fff;
  color: #ff9fb1;
  border: 2px solid #ff9fb1;
}

.btn-primary:hover {
  background: #ff9fb1;
  color: #fff;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #fff;
  color: #ff9fb1;
  border: 2px solid #ff9fb1;
}

.btn-secondary:hover {
  background: #ff9fb1;
  color: #fff;
  transform: translateY(-2px);
}

.features h3, .services h3, .welcome-message h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #213547;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-item {
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #fff5f7, #fff);
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-item h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #213547;
}

.feature-item p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.services-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.service-tag {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #ff9fb1, #ff6b9d);
  color: #fff;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 2px 10px rgba(255, 159, 177, 0.3);
  transition: transform 0.3s ease;
}

.service-tag:hover {
  transform: scale(1.05);
}

.welcome-message {
  text-align: center;
}

.welcome-message p {
  color: #555;
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 1rem;
}

.welcome-message .highlight {
  font-size: 1.1rem;
  color: #ff9fb1;
  font-weight: 600;
  margin-top: 1.5rem;
  padding: 1rem;
  background: linear-gradient(135deg, #fff5f7, #fff);
  border-radius: 8px;
}

@media (max-width: 768px) {
  .card {
    padding: 1.5rem;
  }
  
  .hero h2 {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
