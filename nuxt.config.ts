// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  alias: {
    "@scss": "/assets/scss",
  },
  css: [
    '@/assets/scss/base/reset.scss',
    '@/assets/scss/base/grid.scss',
    '@/assets/scss/base/text.scss',
  ],
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
    }
  }
})
