import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },

    modules: [
        '@nuxtjs/tailwindcss'
    ],

    css: ['~/assets/css/main.css'],

    app: {
        head: {
            title: 'TinaPay - Modern Payment Solutions for Your Business',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content: 'Accept payments instantly with TinaPay. Secure, fast, and reliable payment solutions for modern businesses. Support for multiple currencies, instant payouts, and global payments.'
                },
                { name: 'keywords', content: 'payment solutions, online payments, payment gateway, instant payouts, multi-currency, global payments, TinaPay, business payments, payment processing' },

                // OpenGraph tags
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'TinaPay - Modern Payment Solutions for Your Business' },
                { property: 'og:description', content: 'Accept payments instantly with TinaPay. Secure, fast, and reliable payment solutions.' },
                { property: 'og:site_name', content: 'TinaPay' },

                // Twitter Card
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'TinaPay - Modern Payment Solutions' },
                { name: 'twitter:description', content: 'Accept payments instantly. Secure, fast, and reliable.' },

                // Theme color
                { name: 'theme-color', content: '#161503' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/TINAPAY4.ico' },
                { rel: 'canonical', href: 'https://tinapay.com' },
                // Google Fonts - DM Sans
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap' }
            ]
        }
    }
})
