<script setup lang="ts">
const props = defineProps<{
  visible: boolean
  title?: string
}>()

const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'cancel'): void
  (e: 'close'): void
}>()

const close = () => emit('close')
const cancel = () => emit('cancel')
const confirm = () => emit('confirm')
</script>

<template>
  <div v-if="visible" class="popup-overlay" @click.self="close">
    <div class="popup-content">
      <button class="popup-close" @click="close">✕</button>
      <h3 class="popup-title">{{ title }}</h3>

      <div class="popup-body">
        <slot />
      </div>

      <div class="popup-actions">
        <button class="btn-cancel" @click="cancel">Отменить</button>
        <button class="btn-delete" @click="confirm">Удалить</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  .popup-content {
    background: #fff;
    border-radius: $default-br;
    width: 60rem;
    max-width: 90%;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
    position: relative;
    .popup-close {
      position: absolute;
      z-index: 51;
      background-color: #fff;
      color: $text-light-grey;
      width: 4rem;
      height: 4rem;
      border-radius: 100%;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
      font-size: 1.4rem;
      font-weight: bold;
      cursor: pointer;
      -webkit-box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.3);
      box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.3);
    }
    .popup-title {
      margin: 0;
      padding: 2.2rem 2.8rem;
      font-size: 1.8rem;
      font-weight: 600;
      border-bottom: 0.1rem solid $border-grey;
      color: $base-black-title;
    }
    .popup-body {
      padding: 1rem 2.4rem;
    }
    .popup-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1.4rem;
      padding: 2.2rem 2.8rem;
      background: $base-green;
      .btn-cancel {
        background: transparent;
        border: none;
        font-weight: 500;
        cursor: pointer;
        color: white;
        width: 14rem;
        height: 4rem;
      }
      .btn-delete {
        background: white;
        color: $danger-color;
        width: 14rem;
        height: 4rem;
        font-weight: 500;
        border: none;
        border-radius: 4rem;
        cursor: pointer;
      }
    }
  }
}
</style>
