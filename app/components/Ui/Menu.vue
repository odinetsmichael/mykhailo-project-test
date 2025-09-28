<script setup lang="ts">
const rows = 3
</script>

<template>
  <div class="menu-button">
    <div class="menu-button__icon">
      <div v-for="n in rows" :key="n" class="menu-button__row">
        <span class="menu-button__dot"></span>
        <span class="menu-button__line"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-button {
  display: block;
  width: 4rem;
  height: 4rem;
  border: 0.2rem solid $border-grey;
  border-radius: 50%;
  position: relative;
  cursor: pointer;

  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 1.8rem;
    width: 2.2rem;
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__dot {
    width: 0.3rem;
    height: 0.3rem;
    background-color: $text-dark-grey;
    border-radius: 50%;
  }

  &__line {
    flex-grow: 1;
    height: 0.3rem;
    margin-left: 0.2rem;
    background-color: $text-dark-grey;
  }

  &--active {
    border-color: $base-green;
    .menu-button__line {
      background-color: $base-green;
    }
    .menu-button__dot {
      background-color: $base-green;
    }
  }
}
</style>
