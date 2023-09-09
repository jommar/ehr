// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@invictus.codes/nuxt-vuetify', '@nuxtjs/eslint-module'],
  vuetify: {
    moduleOptions: {
      useVuetifyLabs: true,
    },
  },
  eslint: {
    fix: true,
  },
})
