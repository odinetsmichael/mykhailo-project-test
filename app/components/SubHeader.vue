<script setup lang="ts">
import type { MenuList } from '~/types/enums'

interface SubHeader {
  title: MenuList
}
const props = defineProps<SubHeader>()
</script>
<template>
  <div class="sub-header">{{ props.title }}</div>
</template>

<style lang="scss" scoped>
.sub-header {
  font-size: $fz-title;
  text-transform: capitalize;
  margin-bottom: $default-margin;
}
</style>
