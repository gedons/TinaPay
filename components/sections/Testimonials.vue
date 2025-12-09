<template>
  <section id="testimonials" class="section-container bg-white dark:bg-dark">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-accent">
        Trusted by Businesses Worldwide
      </h2>
      <p class="text-xl text-secondary dark:text-accent max-w-3xl mx-auto">
        Join thousands of businesses already accepting payments with TinaPay
      </p>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
      <div class="text-center">
        <div class="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2">15K+</div>
        <p class="text-secondary dark:text-accent">Active Merchants</p>
      </div>
      <div class="text-center">
        <div class="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2">$100M+</div>
        <p class="text-secondary dark:text-accent">Processed Monthly</p>
      </div>
      <div class="text-center">
        <div class="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2">180+</div>
        <p class="text-secondary dark:text-accent">Countries</p>
      </div>
      <div class="text-center">
        <div class="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2">99.9%</div>
        <p class="text-secondary dark:text-accent">Uptime</p>
      </div>
    </div>

    <!-- Testimonials -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="card bg-accent dark:bg-secondary border-2 border-transparent hover:border-primary dark:hover:border-accent">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-white dark:bg-primary rounded-full flex items-center justify-center text-primary dark:text-accent font-bold text-lg mr-3 shadow-sm">
            A
          </div>
          <div>
            <h4 class="font-bold text-primary dark:text-accent">Adebayo O.</h4>
            <p class="text-sm text-secondary dark:text-accent">E-commerce Owner</p>
          </div>
        </div>
        <div class="flex mb-3">
          <svg v-for="i in 5" :key="i" class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <p class="text-secondary dark:text-accent">
          "TinaPay transformed my online store. I can now accept payments from customers worldwide with ease and confidence."
        </p>
      </div>

      <div class="card bg-accent dark:bg-secondary border-2 border-transparent hover:border-primary dark:hover:border-accent">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-white dark:bg-primary rounded-full flex items-center justify-center text-primary dark:text-accent font-bold text-lg mr-3 shadow-sm">
            C
          </div>
          <div>
            <h4 class="font-bold text-primary dark:text-accent">Chioma N.</h4>
            <p class="text-sm text-secondary dark:text-accent">Freelance Designer</p>
          </div>
        </div>
        <div class="flex mb-3">
          <svg v-for="i in 5" :key="i" class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <p class="text-secondary dark:text-accent">
          "Getting paid is now effortless. The instant settlements mean I have access to my funds immediately. Absolutely love it!"
        </p>
      </div>

      <div class="card bg-accent dark:bg-secondary border-2 border-transparent hover:border-primary dark:hover:border-accent">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-white dark:bg-primary rounded-full flex items-center justify-center text-primary dark:text-accent font-bold text-lg mr-3 shadow-sm">
            E
          </div>
          <div>
            <h4 class="font-bold text-primary dark:text-accent">Emeka I.</h4>
            <p class="text-sm text-secondary dark:text-accent">Tech Startup Founder</p>
          </div>
        </div>
        <div class="flex mb-3">
          <svg v-for="i in 5" :key="i" class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <p class="text-secondary dark:text-accent">
          "The security and reliability of TinaPay give our customers confidence. Integration was seamless and support is excellent."
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
