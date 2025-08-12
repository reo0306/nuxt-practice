// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    storage: {
      "redis": {
        host: "172.31.0.3",
        driver: "redis"
      }
    }
  }
})
