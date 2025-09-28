<script setup lang="ts">
interface StrokeWrapper {
  group?: boolean
}

const props = defineProps<StrokeWrapper>()
</script>

<template>
  <div class="stroke-wrapper" :class="{ group: group }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.stroke-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  height: 7rem;
  border: 0.1rem solid $border-grey;
  border-radius: $default-br;
  transition: $default-transition;
  padding: 1rem 2rem;
  &:hover {
    box-shadow: 0 0.1rem 2.5rem -0.5rem rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
}
.group {
  &:hover {
    position: relative;
    &:after {
      width: 15%;
      height: 100%;
      background-color: $border-grey;
      content: '';
      position: absolute;
      right: 0;
      transition: $default-transition;
    }
    &:before {
      z-index: 5;
      content: '';
      position: absolute;
      top: 50%;
      right: 7.5%;
      transform: translate(50%, -50%) rotate(-45deg);
      width: 1.2rem;
      height: 1.2rem;
      border-right: 0.4rem solid white;
      border-bottom: 0.4rem solid white;
    }
  }
}
</style>
