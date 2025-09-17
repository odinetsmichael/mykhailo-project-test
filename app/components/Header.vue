<script setup lang="ts"></script>
<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img class="logo-item" src="../assets/png/logo.png" alt="logo" />
        <span class="logo-text">inventory</span>
      </div>
      <Input />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: $column-height;
  box-shadow: 0 1.2rem 1.6rem rgba(0, 0, 0, 0.08);
  .container {
    display: flex;
    align-items: center;
    gap: 16rem;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    .logo-item {
      width: 6rem;
    }
    .logo-text {
      text-transform: uppercase;
      color: #7cb342;
      font-weight: bold;
    }
  }
}
</style>
