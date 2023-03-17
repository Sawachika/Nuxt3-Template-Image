<template lang="pug">
header.flex.items-center.px-16.py-4.text-6.text-white
  h2 Logo
  Icon.ml-auto(name="ant-design:twitter-outlined")
  Icon.ml-3(name="ant-design:bell-filled")

section.waterfall.px-16.pb-16
  div(
    v-for="list, index in lists"
    :key="index"
    :class="random(index % 3).class"
  )
    img(:src="`https://source.unsplash.com/${random(index % 3).size}/?sky&${index}`")

footer.fixed.bottom-0.flex.justify-between.items-center.w-full.px-16.py-3.bg-hex-1b252f.text-3.text-hex-adbfcf.text-center
  div
    Icon(name="ant-design:home-filled")
    h5 Home
  div
    Icon(name="ant-design:compass-outlined")
    h5 Discover
  div
    Icon(name="ic:outline-filter-alt")
    h5 Filter
  div
    Icon(name="clarity:favorite-line")
    h5 Collection
  div
    Icon(name="ant-design:user-outlined")
    h5 Acount
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
    () => lists.value += 3,
  )
})
</script>

<style lang="stylus" scoped>
.waterfall
  display grid
  grid-template-columns repeat(auto-fill, minmax(30%, 1fr))
  grid-gap 16px

for n in 4 6 9
  .grid-row-{n}
    grid-row span n
</style>