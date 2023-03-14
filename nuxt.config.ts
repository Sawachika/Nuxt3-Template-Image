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
  ],
  stylelint: { lintOnStart: false },
  unocss: {
    attributify: true,
    icons: true,
    components: false,
    extractors: [
      extractorSplit,
      extractorPug(),
    ],
  },
  sourcemap: {
    server: true,
    client: false,
  },
})
