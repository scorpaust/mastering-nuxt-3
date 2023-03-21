// https://v3.nuxtjs.org/api/configuration/nuxt.config
import vsharp from 'vite-plugin-vsharp';

export default defineNuxtConfig({
  runtimeConfig: {
    stripeSecret: '',
    stripeWebhookSecret: '',
    public: {
      stripeKey: ''
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
