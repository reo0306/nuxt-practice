import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      openWeatherApiKey: process.env.NUXT_PUBLIC_APP_OPENWEATHER_API_KEY,
    }
  }
})
