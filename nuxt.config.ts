// https://nuxt.com/docs/api/configuration/nuxt-config
import { extractorSplit } from '@unocss/core'
import extractorPug from '@unocss/extractor-pug'
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: [
    '@nuxtjs/stylelint-module',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],
  stylelint: { lintOnStart: false },
  css: ['the-new-css-reset/css/reset.css', '@/assets/global.styl'],
  unocss: {
    attributify: true,
    icons: true,
    components: false,
    extractors: [
      extractorSplit,
      extractorPug(),
    ],
  },
})
