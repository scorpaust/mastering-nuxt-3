// https://v3.nuxtjs.org/api/configuration/nuxt.config
import vsharp from 'vite-plugin-vsharp';

export default defineNuxtConfig({
  runtimeConfig: {
    stripeSecret: process.env.NUXT_STRIPE_SECRET,
    stripeWebhookSecret: process.env.NUXT_STRIPE_WEBHOOK_SECRET,
    public: {
      stripeKey: process.env.NUXT_PUBLIC_STRIPE_KEY
    }
  },
  nitro: {
    prerender: {
      routes: ['/landing']
    }
  },
  vite: {
    plugins: [vsharp()] 
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
  ],
});
