<template>
  <div>
    <SectionsHero />
    <SectionsHowItWorks />
    <SectionsWhyTinaPay />
    <SectionsFeatures />
    <SectionsSupportedCoins />
    <SectionsTestimonials />
    <SectionsFinalCTA />
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';

// SEO
useHead({
  title: 'TinaPay - Modern Payment Solutions for Your Business',
  meta: [
    { 
      name: 'description', 
      content: 'Accept payments instantly with TinaPay. Secure, fast, and reliable payment solutions for modern businesses.' 
    }
  ]
})
</script>
