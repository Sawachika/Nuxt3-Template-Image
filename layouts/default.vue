<template lang="pug">
Header
slot
Footer
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
useHead({ title: 'Nuxt3' })
useDark()
</script>