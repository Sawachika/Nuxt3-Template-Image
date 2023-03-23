<template lang="pug">
nav.absolute.p-4.text-white(style="z-index: 2")
  NuxtLink(to="/")
    Icon(name="ic:round-close")

Swiper.h-screen(
  :allow-touch-move="false"
  :direction="$device.isMobile ? 'vertical' : 'horizontal'"
  :navigation="$device.isDesktop"
  :modules="[Navigation]"
  :speed="$device.isDesktop ? 0 : 300"
)
  SwiperSlide.justify-between.items-end.p-4.text-white(v-for="n in 3" :key="n")
    img.absolute.top-0.left-0.w-full.h-full.object-contain(
      style="z-index: -1"
      :src="`https://source.unsplash.com/featured/?sky&${n}`"
      loading="lazy"
    )
    p Image, Author, Category, Datetime
    .text-3.text-center
      NuxtLink.cursor-pointer(to="https://twitter.com/intent/tweet?url=http://scroll.intone.cc/images" target="_blank")
        Icon(name="ant-design:twitter-outlined")
        p Share
      .mt-4.cursor-pointer(@click="copy(source)")
        Icon(name="ic:baseline-content-copy")
        p copy
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import { useClipboard } from '@vueuse/core'
import 'swiper/css'
import 'swiper/css/navigation'
definePageMeta({ layout: false })
useServerSeoMeta({
  twitterCard: 'summary_large_image',
  twitterTitle: 'Image 1',
  twitterImage: 'https://source.unsplash.com/featured/?sky',
  ogTitle: 'Image 1',
  ogDescription: 'Description 1',
  ogUrl: 'http://scroll.intone.cc/images',
  ogImage: 'https://source.unsplash.com/featured/?sky',
})
const source = ref('https://source.unsplash.com/featured/?sky')
const { copy, copied } = useClipboard({ source })
const { $toast } = useNuxtApp()
watch(copied, value => {
  if (value) $toast('Image URL copied.', { multiple: false })
})
</script>

<style lang="stylus">
.swiper-slide
  display flex
</style>