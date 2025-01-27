<template lang="pug">
nav.fixed.z-2.flex.items-center.w-full.h-10.p-2.bg-hex-000b
  NuxtLink.grid.text-white(to="/")
    Icon(name="ic:round-close")
.fixed.z-3.right-0.grid.gap-4.px-2.py-4.rounded.bg-hex-0004.text-white(class="top-[50%] -translate-y-1/2")
  Icon.prev.cursor-pointer(name="ant-design:up-outlined")
  Icon.next.cursor-pointer(name="ant-design:down-outlined")
ClientOnly
  swiper-container(
    ref="swiperRef"
    direction="vertical"
    :navigation="{ prevEl: '.prev', nextEl: '.next' }"
  )
    swiper-slide(v-for="n in 3" :key="n")
      .flex.flex-col.justify-center.h-100vh.pt-10.text-white
        img.h-full.object-contain(
          src="/image/1.jpg"
          loading="lazy"
        )
        .flex.items-center
          .grid.grid-flow-col.rows-2.items-center.gap-x-2.p-2
            Icon.row-span-2.w-8.h-8.border-2.rounded-full(name="ant-design:user-outlined")
            p.font-bold Author
            p.text-sm Description
          .flex.gap-4.ms-auto.p-2.text-center
            Icon(name="ant-design:heart-outlined")
</template>

<script setup lang="ts">
definePageMeta({ layout: false })
const swiperRef = ref()
useSwiper(swiperRef)
</script>

<style lang="stylus" scoped>
.swiper-button-disabled
  @apply opacity-30
::part(container)
  @apply h-100vh bg-black
</style>