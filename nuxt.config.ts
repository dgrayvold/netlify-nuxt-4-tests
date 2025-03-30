// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-03-29',

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  routeRules: {
    '/': {
        static: true,
    },
    '/test': {
        static: true,
    }
  },
  
  telemetry: {
    enabled: false,
  }
})
