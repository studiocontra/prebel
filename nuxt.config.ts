// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
    '@/assets/scss/base/scroll.scss',
  ],

  modules: ['@nuxtjs/i18n', '@nuxtjs/prismic', '@pinia/nuxt'],

  components: [
    { path: '~/components/slices' },
    '~/components'
  ],

  i18n: {
    locales: [
      {
        code: 'es',
        iso: 'es-co',
        file: './locales/es-co.json'
      },
      {
        code: 'en',
        iso: 'en-us',
        file: './locales/en-us.json'
      },
    ], // used in URL path prefix
    defaultLocale: 'es',    // default locale of your project for Nuxt pages and routings
    detectBrowserLanguage: false,
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
  },

  prismic: {
    endpoint: 'prebel'
  }
})