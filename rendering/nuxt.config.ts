// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  routeRules: {
    "/spa": {ssr: false},
    "/ssg": {prerender: true},
    "/isg": {swr: 60},
  }
})
