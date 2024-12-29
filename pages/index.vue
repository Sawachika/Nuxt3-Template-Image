<template lang="pug">
ClientOnly
  MasonryWall.pb-16(
    class="md:px-16"
    :items="items"
    :gap="16"
    :min-columns="2"
    :max-columns="5"
  )
    template(#="{ item, index }")
      NuxtLink.relative.grid(to="/images")
        img.w-full.object-fit(:class="item.class" src="/preview.jpg")
        .absolute.bottom-0.flex.items-center.p-2.text-white
          Icon.bg-red.rounded(name="mdi:link-variant")
          span.ml-2 Category {{ index }}
</template>

<script setup lang="ts">
import { useInfiniteScroll } from '@vueuse/core'
const items = ref(Array.from({ length: 9 }, () => random()))

onMounted(() => {
  useInfiniteScroll(document,
    () => {
      console.log(items.value.length)

      if (items.value.length > 20) return
      items.value = [...items.value, random(), random(), random()]
    },
  )
})
function random() {
  const lists = ['aspect-3/2', 'aspect-4/3', 'aspect-5/4']
  return { class: lists[~~(Math.random() * 3)] }
}
</script>