<template>
  <section id="how-it-works" class="section-container bg-white dark:bg-dark">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-accent">
        How It Works
      </h2>
      <p class="text-xl text-secondary dark:text-accent max-w-3xl mx-auto">
        Get started with TinaPay in three simple steps. No complex setup, no hidden fees.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Step 1 -->
      <div class="card bg-accent dark:bg-secondary border-2 border-transparent hover:border-primary dark:hover:border-accent group">
        <div class="mb-6 relative">
          <div class="w-20 h-20 mx-auto bg-white dark:bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
            <span class="text-4xl font-bold text-primary dark:text-accent">1</span>
          </div>
        </div>
        <h3 class="text-2xl font-bold mb-4 text-primary dark:text-accent">
          Create Your Account
        </h3>
        <p class="text-secondary dark:text-accent">
          Sign up in minutes with just your business details. Quick verification process to get you started fast.
        </p>
      </div>

      <!-- Step 2 -->
      <div class="card bg-accent dark:bg-secondary border-2 border-transparent hover:border-primary dark:hover:border-accent group animation-delay-200">
        <div class="mb-6 relative">
          <div class="w-20 h-20 mx-auto bg-white dark:bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
            <span class="text-4xl font-bold text-primary dark:text-accent">2</span>
          </div>
        </div>
        <h3 class="text-2xl font-bold mb-4 text-primary dark:text-accent">
          Configure Payment Options
        </h3>
        <p class="text-secondary dark:text-accent">
          Choose your preferred payment methods and currencies. Set up automated transfers and notifications.
        </p>
      </div>

      <!-- Step 3 -->
      <div class="card bg-accent dark:bg-secondary border-2 border-transparent hover:border-primary dark:hover:border-accent group animation-delay-400">
        <div class="mb-6 relative">
          <div class="w-20 h-20 mx-auto bg-white dark:bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
            <span class="text-4xl font-bold text-primary dark:text-accent">3</span>
          </div>
        </div>
        <h3 class="text-2xl font-bold mb-4 text-primary dark:text-accent">
          Start Receiving Payments
        </h3>
        <p class="text-secondary dark:text-accent">
          Share your payment link and start accepting payments instantly. Funds settle directly to your account.
        </p>
      </div>
    </div>

    <!-- Flow Indicator (Hidden on mobile) -->
    <div class="hidden md:block absolute top-1/2 left-0 right-0 -z-10">
      <div class="max-w-5xl mx-auto px-4">
        <svg class="w-full h-2" viewBox="0 0 100 2" preserveAspectRatio="none">
          <line x1="0" y1="1" x2="100" y2="1" stroke="currentColor" stroke-width="2" stroke-dasharray="5,5" class="text-primary opacity-20" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
