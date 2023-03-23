<template lang="pug">
ClientOnly
  el-dialog(v-model="visible" :show-close="false")
    p.text-white You must be 18 to view and use
    template(#footer)
      el-button(type="primary" @click="check") Yes
      el-button(type="primary" plain @click="$router.go(-1)") No

section.waterfall.pb-16(class="md:px-16")
  NuxtLink.relative(
    v-for="list, index in lists"
    :key="index"
    :class="random(index % 3).class"
    to="/images"
  )
    img.w-full.h-full.object-cover(:src="`https://source.unsplash.com/${random(index % 3).size}/?sky&${index}`")
    .absolute.bottom-0.items-center.p-3.text-white.hidden
      Icon.bg-red.rounded(name="mdi:link-variant")
      span.ml-2 Category {{ index }}
</template>

<script setup>
import { useInfiniteScroll } from '@vueuse/core'
const user = useUserStore()
const visible = ref(false)
visible.value = !user.isOver18
const lists = ref(9)
function random (i) {
  const lists = [
    { size: '768x512', class: 'grid-row-4' },
    { size: '512x512', class: 'grid-row-6' },
    { size: '512x768', class: 'grid-row-9' },
  ]
  return lists[i]
}
function check() {
  visible.value = false
  user.check()
}
onMounted(() => {
  useInfiniteScroll(document,
    () => lists.value += 3,
  )
})
</script>

<style lang="stylus">
.el-dialog
  background-color #52234a
  &__header
    display none
  &__footer
    text-align center
</style>
<style lang="stylus" scoped>
.waterfall
  display grid
  grid-template-columns repeat(auto-fill, minmax(30%, 1fr))
  grid-gap 16px

  a:hover .absolute
    display flex

for n in 4 6 9
  .grid-row-{n}
    grid-row span n

@media (max-width 768px)
  .waterfall
    grid-template-columns repeat(2, 1fr)
    grid-gap 1px
</style>