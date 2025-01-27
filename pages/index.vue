<template lang="pug">
ClientOnly
  MasonryWall.container.mx-auto.mb-16.px-4(
    :items="imageStore.lists"
    :ssr-columns="3"
    :column-width="300"
    :gap="8"
    :max-columns="3"
  )
    template(#="{ item }")
      NuxtLink.grid(to="/images")
        img.w-full.object-fit.rounded-lg(:src="item.src")
      .absolute.bottom-0.flex.items-center.w-full.p-2.text-white
        Icon.bg-black.rounded-full(name="material-symbols:account-circle")
        span.ms-2 {{ item.author }}
        Icon.ms-auto(name="material-symbols:favorite-outline-rounded")
</template>

<script setup lang="ts">
import { useInfiniteScroll } from '@vueuse/core'
const imageStore = useImageStore()

onMounted(() => {
  useInfiniteScroll(document, () => { imageStore.loadMore() })
})
</script>

<style lang="stylus" scoped>
:deep() .masonry-item
  @apply relative
</style>