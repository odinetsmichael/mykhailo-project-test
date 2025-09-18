<script setup lang="ts">
import { MenuList } from '@/types/enums'
const selectedItem = ref<MenuList>(MenuList.INCOMING)

function onMenuSelect(item: MenuList) {
  selectedItem.value = item
}
</script>

<template>
  <div class="layout">
    <Header />
    <div class="layout__body">
      <LeftMenu @select="onMenuSelect" />
      <main class="layout__content">
        <SubHeader :title="selectedItem" />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout__body {
  display: flex;
  .layout__content {
    margin-top: $medium-margin;
    margin-left: $big-margin;
    width: 100%;
  }
}
</style>
