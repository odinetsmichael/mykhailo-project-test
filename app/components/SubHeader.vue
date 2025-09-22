<script setup lang="ts">
import type { MenuList } from '~/types/enums'

interface SubHeader {
  title: MenuList
  maxItems: number
}
const props = defineProps<SubHeader>()
</script>
<template>
  <div class="sub-header">{{ props.title }} / {{ maxItems }}</div>
</template>

<style lang="scss" scoped>
.sub-header {
  font-size: $fz-title;
  text-transform: capitalize;
  margin-bottom: $default-margin;
  font-weight: 500;
}
</style>
