<script setup lang="ts">
import type { Product } from '~/types/interfaces'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface PopupDelete {
  visible: boolean
  title?: string
  itemId?: string
  selectedProduct?: Product | null
}

const props = defineProps<PopupDelete>()

const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'close'): void
}>()

const close = () => emit('close')
const confirm = () => emit('confirm')
</script>

<template>
  <div v-if="visible" class="popup-overlay" @click.self="close">
    <div class="popup-content" @click.stop>
      <button class="popup-close" @click="close">✕</button>

      <h3 class="popup-title">
        {{ title || t('components.popup.delete-title') }}
      </h3>

      <div class="popup-body">
        <div class="product-popup" v-if="selectedProduct">
          <div
            class="product-popup__status"
            :class="selectedProduct?.status ? 'free' : 'repair'"
          ></div>
          <img class="product-popup__image" :src="selectedProduct.photo" alt="product-photo" />
          <div class="product-popup__name">
            <span class="product-popup__title">{{ selectedProduct.title }}</span>
            <div class="product-popup__serial">SN-{{ selectedProduct.serialNumber }}</div>
          </div>
        </div>

        <slot />
      </div>

      <div class="popup-actions">
        <button class="btn-cancel" @click="close">
          {{ t('components.popup.cancel-button') }}
        </button>
        <button class="btn-delete" @click="confirm">
          {{ t('components.popup.delete-button') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-popup {
  display: flex;
  align-items: center;
  gap: 4rem;

  .product-popup__status {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .free {
    background-color: $free-green;
  }

  .repair {
    background-color: $base-black-title;
  }

  .product-popup__image {
    @include list-image;
  }

  .product-popup__name {
    flex: 1;
    overflow: hidden;

    .product-popup__title {
      @include product-name;
    }

    .product-popup__serial {
      @include product-serial;
    }
  }
}

.popup-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
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
      &:deep(.order-name) {
        @include order-name;
      }
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
