<script setup lang="ts">
import type { Product } from '~/types/interfaces'

interface GroupProductList {
  orderName: string
  products: Product[]
}

const selectedProduct = ref<Product | null>(null)

const showPopup = ref<boolean>(false)

const closeDeletePopup = () => {
  showPopup.value = false
  selectedProduct.value = null
}
const openDeletePopup = (product: Product) => {
  selectedProduct.value = product
  showPopup.value = true
}

const props = defineProps<GroupProductList>()
</script>

<template>
  <div class="group-products">
    <div class="group-products__header">{{ orderName }}</div>

    <div class="group-products__add">
      <div class="group-products__add-icon">+</div>
      <div class="group-products__add-text">Добавить продукт</div>
    </div>

    <div class="group-products__list">
      <div v-for="product in products" :key="product.id" class="group-products__item">
        <div class="group-products__status" :class="product.status ? 'free' : 'repair'"></div>
        <img :src="product.photo" alt="product-photo" class="group-products__image" />
        <div class="group-products__info">
          <span class="group-products__name">{{ product.title }}</span>
          <div class="group-products__serial">SN-{{ product.serialNumber }}</div>
        </div>
        <div class="group-products__status-word-free" v-if="product.status">Свободен</div>
        <div class="group-products__status-word-repair" v-if="!product.status">В ремонте</div>
        <div class="group-products__delete">
          <UiTrash @click="openDeletePopup(product)" />
        </div>
      </div>
    </div>
  </div>
  <PopupsDelete
    :visible="showPopup"
    title="Вы уверены, что хотите удалить этот продукт?"
    :selected-product="selectedProduct"
    @close="closeDeletePopup"
  >
    <div class="item-info"></div>
  </PopupsDelete>
</template>

<style lang="scss" scoped>
.group-products {
  width: 100%;
  padding-top: 1rem;
  border: 0.1rem solid $border-grey;
  border-radius: $default-br;

  .group-products__header,
  .group-products__name,
  .products__serial {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .group-products__header {
    padding: 0 2rem;
    font-size: 1.8rem;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .group-products__add {
    padding: 0 2rem;
    margin-top: $small-margin;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;

    .group-products__add-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $base-green;
      color: white;
      border-radius: 100%;
      width: 2rem;
      height: 2rem;
    }

    .group-products__add-text {
      font-size: 1.2rem;
      color: $base-green;
    }
  }
  .group-products__list {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    .group-products__item {
      padding: 0.6rem 2rem;
      display: flex;
      align-items: center;
      border-top: 0.1rem solid $border-grey;
      gap: 3rem;
      cursor: pointer;
      &:hover {
        transition: $default-transition;
        box-shadow: 0 0.1rem 2.5rem -0.5rem rgba(0, 0, 0, 0.2);
      }
      .group-products__status {
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
      .group-products__image {
        @include list-image;
      }
      .group-products__info {
        flex: 1;
        overflow: hidden;
        .group-products__name {
          @include product-name;
        }
        .group-products__serial {
          @include product-serial;
        }
      }
      .group-products__status-word-free {
        @include product-status-free;
      }
      .group-products__status-word-repair {
        @include product-status-repair;
      }
    }
  }
}
</style>
