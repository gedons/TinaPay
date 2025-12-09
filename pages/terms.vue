<template>
  <div class="bg-accent dark:bg-primary min-h-screen pt-24 pb-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl font-bold mb-8 text-primary dark:text-accent">
        Terms of Service
      </h1>
      
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <p class="text-secondary dark:text-accent mb-6">
          Last updated: {{ new Date().toLocaleDateString() }}
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary dark:text-accent">1. Acceptance of Terms</h2>
          <p class="text-secondary dark:text-accent mb-4">
            By accessing and using TinaPay ("we", "our", or "us"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary dark:text-accent">2. Description of Service</h2>
          <p class="text-secondary dark:text-accent mb-4">
            TinaPay provides a payment processing platform that allows merchants to accept payments from customers worldwide. You understand and agree that the Service is provided "AS-IS" and that TinaPay assumes no responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary dark:text-accent">3. User Obligations</h2>
          <p class="text-secondary dark:text-accent mb-4">
            In consideration of your use of the Service, you represent that you are of legal age to form a binding contract and are not a person barred from receiving services under the laws of any applicable jurisdiction. You also agree to:
          </p>
          <ul class="list-disc pl-6 text-secondary dark:text-accent space-y-2">
            <li>Provide true, accurate, current and complete information about yourself as prompted by the Service's registration form.</li>
            <li>Maintain and promptly update the Registration Data to keep it true, accurate, current and complete.</li>
            <li>Maintain the security of your password and identification.</li>
            <li>Be fully responsible for all use of your account and for any actions that take place using your account.</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary dark:text-accent">4. Prohibited Activities</h2>
          <p class="text-secondary dark:text-accent mb-4">
            You agree not to use the Service for any unlawful purpose or in any way that interrupts, damages, impairs or renders the Service less efficient. You agree not to attempt to gain unauthorized access to our servers, computer systems or networks connected to our Website.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary dark:text-accent">5. Fees and Payments</h2>
          <p class="text-secondary dark:text-accent mb-4">
            We reserve the right to charge fees for the use of certain services. Any applicable fees will be posted on our website. You agree to pay all fees and charges incurred in connection with your account at the rates in effect when the charges were incurred.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary dark:text-accent">6. Limitation of Liability</h2>
          <p class="text-secondary dark:text-accent mb-4">
            YOU EXPRESSLY UNDERSTAND AND AGREE THAT TINAPAY SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES RESULTING FROM THE USE OR THE INABILITY TO USE THE SERVICE.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-primary dark:text-accent">7. Contact Information</h2>
          <p class="text-secondary dark:text-accent mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p class="text-secondary dark:text-accent font-bold">
            Email: legal@tinapay.com
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Terms of Service - TinaPay',
  meta: [
    { name: 'description', content: 'Terms of Service for TinaPay - Read our terms and conditions for using our payment platform.' }
  ]
})
</script>
