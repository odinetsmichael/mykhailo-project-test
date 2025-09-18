<script setup lang="ts">
import { MenuList } from '@/types/enums'
const selectedItem = ref<MenuList>(MenuList.INCOMING)

function onMenuSelect(item: MenuList) {
  selectedItem.value = item
}
const incomingName = ref(
  'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
)
const incomingDate = ref('24/15/2026')
const incomingCost = ref('1541152$')
const numOfProducts = ref(50)
</script>

<template>
  <div class="layout">
    <Header />
    <div class="layout__body">
      <LeftMenu @select="onMenuSelect" />
      <main class="layout__content">
        <SubHeader :title="selectedItem" />
        <IncomingList
          :num-of-products="numOfProducts"
          :incoming-name="incomingName"
          :incoming-date="incomingDate"
          :incomingCost="incomingCost"
        />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout__body {
  display: flex;
  .layout__content {
    margin: $medium-margin $big-margin;
    width: 100%;
  }
}
</style>
