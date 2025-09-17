<script setup lang="ts"></script>
<template>
  <section class="left-menu">
    <div class="avatar">
      <img class="avatar-item" src="../assets/img/avatar.webp" alt="logo" />
    </div>
    <ul class="menu-lists">
      <li class="menu-list">приход</li>
      <li class="menu-list">группы</li>
      <li class="menu-list">продукты</li>
      <li class="menu-list">пользователи</li>
      <li class="menu-list">настройки</li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.left-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 100vh;
  -webkit-box-shadow: 16px 0px 15px -13px rgba(66, 68, 90, 0.301);
  -moz-box-shadow: 16px 0px 15px -13px rgba(66, 68, 90, 0.301);
  box-shadow: 16px 0px 15px -13px rgba(66, 68, 90, 0.301);
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
        transition: transform 0.3s ease;
      }

      &:hover::after {
        transform: scaleX(130%);
      }
    }
  }
}
</style>
