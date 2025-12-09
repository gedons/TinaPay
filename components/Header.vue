<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-accent dark:bg-primary shadow-lg py-2' : 'bg-transparent py-4'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <img src="/logo.png" alt="TinaPay Logo" class="h-10 w-auto" />
            <!-- <span class="text-2xl font-bold text-primary dark:text-accent">TinaPay</span> -->
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            to="#how-it-works" 
            class="text-primary dark:text-accent hover:text-secondary dark:hover:text-white transition-colors font-medium"
          >
            How It Works
          </NuxtLink>
          <NuxtLink 
            to="#features" 
            class="text-primary dark:text-accent hover:text-secondary dark:hover:text-white transition-colors font-medium"
          >
            Features
          </NuxtLink>
          <NuxtLink 
            to="#why-tinapay" 
            class="text-primary dark:text-accent hover:text-secondary dark:hover:text-white transition-colors font-medium"
          >
            Why TinaPay
          </NuxtLink>
          
          <!-- Theme Toggle -->
          <ThemeToggle />
          
          <!-- CTA Button -->
          <a 
            :href="whatsappLink" 
            target="_blank"
            class="btn-primary py-2 px-6"
          >
            Get Started
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-primary dark:text-accent p-2"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-if="mobileMenuOpen" class="md:hidden pb-4 bg-accent dark:bg-primary shadow-xl rounded-b-xl absolute left-0 right-0 top-full border-t border-gray-100 dark:border-gray-900">
          <div class="flex flex-col space-y-4 px-4 py-2">
            <NuxtLink 
              to="#how-it-works" 
              @click="mobileMenuOpen = false"
              class="text-primary dark:text-accent hover:text-secondary dark:hover:text-white transition-colors font-medium py-2"
            >
              How It Works
            </NuxtLink>
            <NuxtLink 
              to="#features" 
              @click="mobileMenuOpen = false"
              class="text-primary dark:text-accent hover:text-secondary dark:hover:text-white transition-colors font-medium py-2"
            >
              Features
            </NuxtLink>
            <NuxtLink 
              to="#why-tinapay" 
              @click="mobileMenuOpen = false"
              class="text-primary dark:text-accent hover:text-secondary dark:hover:text-white transition-colors font-medium py-2"
            >
              Why TinaPay
            </NuxtLink>
            <a 
              :href="whatsappLink" 
              target="_blank"
              class="btn-primary inline-block text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const whatsappLink = 'https://wa.me/2347036005084?text=Hi,%20I%27m%20interested%20in%20TinaPay%20for%20my%20business&utm_source=landing&utm_medium=whatsapp&utm_campaign=header_cta'

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  // Check initial scroll
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
