<script setup lang="ts">
import { MenuList } from '@/types/enums'

const emit = defineEmits<{
  (e: 'select', item: MenuList): void
}>()

function handleClick(item: MenuList) {
  emit('select', item)
}
</script>
<template>
  <section class="left-menu">
    <div class="avatar">
      <img class="avatar-item" src="../assets/img/avatar.webp" alt="logo" />
    </div>
    <ul class="menu-lists">
      <li v-for="item in MenuList" :key="item" class="menu-list" @click="handleClick(item)">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.left-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  height: 100vh;
  -webkit-box-shadow: 1.6rem 0 1.5rem -1.3rem rgba(66, 68, 90, 0.301);
  -moz-box-shadow: 1.6rem 0 1.5rem -1.3rem rgba(66, 68, 90, 0.301);
  box-shadow: 1.6rem 0 1.5rem -1.3rem rgba(66, 68, 90, 0.301);
  .avatar {
    margin-top: $default-margin;
    .avatar-item {
      border-radius: 100%;
      width: 10rem;
      height: 10rem;
      object-fit: cover;
    }
  }
  .menu-lists {
    margin-top: $default-margin;
    display: flex;
    flex-direction: column;
    align-items: center;

    .menu-list {
      width: max-content;
      position: relative;
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      margin-top: $default-margin;
      cursor: pointer;

      &::after {
        content: '';
        position: absolute;
        left: 10%;
        right: 10%;
        bottom: -0.3rem;
        height: 0.3rem;
        background-color: $base-green;
        transform: scaleX(0);
        transform-origin: center;
        transition: transform $default-transition ease;
      }

      &:hover::after {
        transform: scaleX(130%);
      }
    }
  }
}
</style>
