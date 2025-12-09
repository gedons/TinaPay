<template>
  <section class="section-container bg-light dark:bg-dark-secondary">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-accent">
        Payment Methods We Support
      </h2>
      <p class="text-xl text-secondary dark:text-accent max-w-3xl mx-auto">
        Accept payments through multiple channels and methods
      </p>
    </div>

    <div class="relative overflow-hidden">
      <!-- Scrolling Container -->
      <div class="flex gap-8 animate-scroll">
        <div v-for="method in [...paymentMethods, ...paymentMethods]" :key="method.name + Math.random()" class="flex-shrink-0">
          <div class="card w-48 text-center bg-white dark:bg-secondary border-2 border-transparent hover:border-primary dark:hover:border-accent">
            <div class="text-5xl mb-3">{{ method.icon }}</div>
            <h3 class="text-lg font-bold text-primary dark:text-accent mb-1">{{ method.name }}</h3>
            <p class="text-sm text-secondary dark:text-accent">{{ method.type }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Payment Types -->
    <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="card text-center bg-white dark:bg-secondary border-2 border-transparent hover:border-primary dark:hover:border-accent">
        <div class="text-3xl mb-2">💳</div>
        <p class="font-semibold text-primary dark:text-accent">Credit Cards</p>
      </div>
      <div class="card text-center bg-white dark:bg-secondary border-2 border-transparent hover:border-primary dark:hover:border-accent">
        <div class="text-3xl mb-2">🏦</div>
        <p class="font-semibold text-primary dark:text-accent">Bank Transfer</p>
      </div>
      <div class="card text-center bg-white dark:bg-secondary border-2 border-transparent hover:border-primary dark:hover:border-accent">
        <div class="text-3xl mb-2">📱</div>
        <p class="font-semibold text-primary dark:text-accent">Mobile Money</p>
      </div>
      <div class="card text-center bg-white dark:bg-secondary border-2 border-transparent hover:border-primary dark:hover:border-accent">
        <div class="text-3xl mb-2">💰</div>
        <p class="font-semibold text-primary dark:text-accent">Digital Wallets</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const paymentMethods = [
  { name: 'Visa', type: 'Credit Card', icon: '💳' },
  { name: 'Mastercard', type: 'Credit Card', icon: '💳' },
  { name: 'Bank Transfer', type: 'Direct', icon: '🏦' },
  { name: 'PayPal', type: 'E-Wallet', icon: '💰' },
  { name: 'Apple Pay', type: 'Mobile', icon: '📱' },
  { name: 'Google Pay', type: 'Mobile', icon: '📱' },
  { name: 'Stripe', type: 'Gateway', icon: '⚡' },
  { name: 'M-Pesa', type: 'Mobile Money', icon: '📱' },
]
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}
</style>
