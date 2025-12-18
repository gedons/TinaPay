<template>
  <div class="bg-accent dark:bg-primary min-h-screen pt-24 pb-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl font-bold mb-8 text-primary dark:text-accent">
        Privacy Policy
      </h1>
      
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <p class="text-secondary dark:text-accent mb-6">
          Last updated: {{ new Date().toLocaleDateString() }}
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary dark:text-accent">1. Introduction</h2>
          <p class="text-secondary dark:text-accent mb-4">
            Welcome to TinaPay. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary dark:text-accent">2. Data We Collect</h2>
          <p class="text-secondary dark:text-accent mb-4">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
          </p>
          <ul class="list-disc pl-6 text-secondary dark:text-accent space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Financial Data:</strong> includes bank account and payment card details.</li>
            <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of services you have purchased from us.</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary dark:text-accent">3. How We Use Your Data</h2>
          <p class="text-secondary dark:text-accent mb-4">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul class="list-disc pl-6 text-secondary dark:text-accent space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary dark:text-accent">4. Data Security</h2>
          <p class="text-secondary dark:text-accent mb-4">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary dark:text-accent">5. Your Legal Rights</h2>
          <p class="text-secondary dark:text-accent mb-4">
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary dark:text-accent">6. Contact Us</h2>
          <p class="text-secondary dark:text-accent mb-4">
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <p class="text-secondary dark:text-accent font-bold">
            Email: privacy@tinapay.com
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';

useHead({
  title: 'Privacy Policy - TinaPay',
  meta: [
    { name: 'description', content: 'Privacy Policy for TinaPay - Learn how we collect, use, and protect your data.' }
  ]
})
</script>
