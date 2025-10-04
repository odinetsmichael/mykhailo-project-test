<script setup lang="ts"></script>

<template>
  <div class="layout">
    <Header />
    <div class="layout__body">
      <NavigationMenu />
      <main class="layout__content">
        <slot />
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
