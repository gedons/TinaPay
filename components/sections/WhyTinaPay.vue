<template>
  <section id="why-tinapay" class="section-container bg-light dark:bg-dark-secondary">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-accent">
        Why Choose TinaPay?
      </h2>
      <p class="text-xl text-secondary dark:text-accent max-w-3xl mx-auto">
        Built for the future of finance. Secure, fast, and globally accessible.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Security -->
      <div class="card bg-white dark:bg-secondary border-2 border-transparent hover:border-primary dark:hover:border-accent">
        <div class="mb-6">
          <div class="w-16 h-16 bg-accent rounded-lg flex items-center justify-center">
            <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>
        <h3 class="text-2xl font-bold mb-4 text-primary dark:text-accent">
          Bank-Level Security
        </h3>
        <p class="text-secondary dark:text-accent mb-4">
          Your funds are protected by industry-leading encryption and security protocols. PCI DSS compliant with multi-factor authentication.
        </p>
        <ul class="space-y-2 text-sm text-secondary dark:text-accent">
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>256-bit SSL encryption</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>PCI DSS Level 1 certified</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>Regular security audits</span>
          </li>
        </ul>
      </div>

      <!-- Speed -->
      <div class="card bg-white dark:bg-secondary border-2 border-transparent hover:border-primary dark:hover:border-accent">
        <div class="mb-6">
          <div class="w-16 h-16 bg-accent rounded-lg flex items-center justify-center">
            <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <h3 class="text-2xl font-bold mb-4 text-primary dark:text-accent">
          Lightning Fast
        </h3>
        <p class="text-secondary dark:text-accent mb-4">
          Transactions process in seconds, not days. No more waiting for bank transfers or dealing with slow payment processors.
        </p>
        <ul class="space-y-2 text-sm text-secondary dark:text-accent">
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>Instant confirmations</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>Real-time notifications</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>24/7 availability</span>
          </li>
        </ul>
      </div>

      <!-- Global Reach -->
      <div class="card bg-white dark:bg-secondary border-2 border-transparent hover:border-primary dark:hover:border-accent">
        <div class="mb-6">
          <div class="w-16 h-16 bg-accent rounded-lg flex items-center justify-center">
            <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <h3 class="text-2xl font-bold mb-4 text-primary dark:text-accent">
          Global Reach
        </h3>
        <p class="text-secondary dark:text-accent mb-4">
          Accept payments from customers worldwide with multi-currency support and competitive exchange rates.
        </p>
        <ul class="space-y-2 text-sm text-secondary dark:text-accent">
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>150+ currencies</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>No foreign transaction fees</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>Automatic conversion</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
