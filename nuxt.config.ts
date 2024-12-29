// https://nuxt.com/docs/api/configuration/nuxt-config
import { extractorSplit } from '@unocss/core'
import extractorPug from '@unocss/extractor-pug'
import variantGroup from '@unocss/transformer-variant-group'

export default defineNuxtConfig({
  typescript: {
    shim: false,
    typeCheck: true,
  },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/device',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@element-plus/nuxt',
    '@nuxt/icon',
    'nuxt-swiper',
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
    transformers: [variantGroup()]
  },

  elementPlus: { themes: ['dark'] },
  compatibilityDate: '2024-12-28',
})