<template>
  <div class="bg-accent dark:bg-primary min-h-screen pt-24 pb-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl font-bold mb-8 text-primary dark:text-accent">
        Security
      </h1>
      
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <p class="text-secondary dark:text-accent mb-6 text-xl">
          At TinaPay, security is our top priority. We use bank-grade security measures to ensure your funds and data are always protected.
        </p>

        <section class="mb-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="card bg-white dark:bg-secondary border-2 border-transparent hover:border-primary dark:hover:border-accent p-6 rounded-xl">
              <div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2 text-primary dark:text-accent">Encryption</h3>
              <p class="text-secondary dark:text-accent">
                All data is encrypted in transit and at rest using AES-256 encryption. We enforce TLS 1.2+ for all connections.
              </p>
            </div>

            <div class="card bg-white dark:bg-secondary border-2 border-transparent hover:border-primary dark:hover:border-accent p-6 rounded-xl">
              <div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2 text-primary dark:text-accent">Compliance</h3>
              <p class="text-secondary dark:text-accent">
                We are fully PCI DSS Level 1 compliant, adhering to the strictest security standards in the payments industry.
              </p>
            </div>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary dark:text-accent">Fraud Prevention</h2>
          <p class="text-secondary dark:text-accent mb-4">
            Our advanced fraud detection system monitors transactions in real-time to identify and block suspicious activity. We use machine learning algorithms trained on billions of data points to keep your business safe.
          </p>
          <ul class="list-disc pl-6 text-secondary dark:text-accent space-y-2">
            <li>Real-time transaction monitoring</li>
            <li>Customizable risk rules</li>
            <li>IP address blocking and geolocation checks</li>
            <li>Device fingerprinting</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary dark:text-accent">Account Security</h2>
          <p class="text-secondary dark:text-accent mb-4">
            We provide robust tools to help you secure your account and control access.
          </p>
          <ul class="list-disc pl-6 text-secondary dark:text-accent space-y-2">
            <li><strong>Two-Factor Authentication (2FA):</strong> Add an extra layer of security to your account with SMS or authenticator app codes.</li>
            <li><strong>Role-Based Access Control:</strong> Granular permissions to ensure team members only access what they need.</li>
            <li><strong>Audit Logs:</strong> Detailed logs of all account activity for full visibility and accountability.</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary dark:text-accent">Responsible Disclosure</h2>
          <p class="text-secondary dark:text-accent mb-4">
            If you believe you have found a security vulnerability in TinaPay, please let us know right away. We appreciate your help in making our platform safer for everyone.
          </p>
          <p class="text-secondary dark:text-accent font-bold">
            Email: security@tinapay.com
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';

useHead({
  title: 'Security - TinaPay',
  meta: [
    { name: 'description', content: 'Security at TinaPay - Learn about our bank-grade security measures and compliance.' }
  ]
})
</script>
