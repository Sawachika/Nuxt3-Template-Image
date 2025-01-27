<template lang="pug">
header.flex.justify-between.items-center.p-4.text-6.text-white(class="md:px-16")
  h2 Logo
  ElInput.max-w-80(placeholder="Search" size="large")
    template(#prefix)
      Icon(name="material-symbols:search")
  .flex.gap-4
    Icon(name="ant-design:bell-filled")
    ElDropdown(trigger="click")
      Icon(name="ant-design:menu-outlined" class="focus:outline-none")
      template(#dropdown)
        ElDropdownMenu
          ElDropdownItem About
          ElDropdownItem Terms
          ElDropdownItem Policy
          ElDropdownItem Contact
</template>

<style lang="stylus" scoped>
.el-dropdown-menu
  @apply p-4
</style>