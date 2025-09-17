<script setup lang="ts"></script>
<template>
  <div class="input">
    <input type="text" class="input-item" placeholder="Поиск" />
  </div>
</template>

<style lang="scss" scoped>
.input {
  .input-item {
    width: 36rem;
    height: 2.6rem;
    padding: 0 1.2rem;
    background-color: #f0f3f5;
    border: 1px solid #dfe3e8;
    border-radius: 0.4rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    color: $base-black-title;
    box-shadow: inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);

    &::placeholder {
      color: $base-black-title;
      font-weight: bold;
    }

    &:focus {
      outline: none;
      border-color: #5cb85c; // зелёный акцент (как в меню)
      box-shadow: 0 0 0 2px rgba(92, 184, 92, 0.6);
    }
  }
}
</style>
