// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  srcDir: 'src/',

  alias: {
    "@scss": "/assets/scss",
  },

  build: {
    transpile: [/vue-i18n/]
  },

  css: [
    '@/assets/scss/base/reset.scss',
    '@/assets/scss/base/grid.scss',
    '@/assets/scss/base/text.scss',
  ],

  modules: ['@nuxtjs/i18n', '@nuxtjs/prismic'],

  i18n: {
    locales: ['es-co', 'en-us'],  // used in URL path prefix
    defaultLocale: 'es-co',    // default locale of your project for Nuxt pages and routings
  },

  prismic: {
    endpoint: 'prebel'
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "sass:math";
            @import "@/assets/scss/base/mixins.scss";
            `
          }
      }
    },
  }
})