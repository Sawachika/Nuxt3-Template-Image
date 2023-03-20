<template lang="pug">
section.waterfall.px-16.pb-16
  NuxtLink(
    v-for="list, index in lists"
    :key="index"
    :class="random(index % 3).class"
    to="/images"
  )
    img(:src="`https://source.unsplash.com/${random(index % 3).size}/?sky&${index}`")
</template>

<script setup>
import { useInfiniteScroll } from '@vueuse/core'
const lists = ref(7)
function random (i) {
  const lists = [
    { size: '768x512', class: 'grid-row-4' },
    { size: '512x512', class: 'grid-row-6' },
    { size: '512x768', class: 'grid-row-9' },
  ]
  return lists[i]
}
onMounted(() => {
  // const { $ImagesLoaded } = useNuxtApp()
  // $ImagesLoaded('.waterfall', () => {
  // })
  useInfiniteScroll(document,
    // () => lists.value += 3,
  )
})
</script>

<style lang="stylus" scoped>
.waterfall
  display grid
  grid-template-columns repeat(auto-fill, minmax(30%, 1fr))
  font-size 0
  // grid-gap 16px

for n in 4 6 9
  .grid-row-{n}
    grid-row span n
</style>