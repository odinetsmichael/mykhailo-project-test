<script setup lang="ts"></script>

<template>
  <div class="scroll">
    <div class="wide-2x-container">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scroll {
  overflow-x: scroll;
  overflow-y: hidden;
  padding-bottom: 5px;
  .wide-2x-container {
    width: 200%;
    min-width: 200%;
    display: block;
  }
  &::-webkit-scrollbar-thumb {
    background-color: $scroll-color;
    border-radius: $default-br;
  }
  &::-webkit-scrollbar {
    height: 1rem;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: $default-br;
    border: 0.2rem solid $border-grey;
  }
}
</style>
