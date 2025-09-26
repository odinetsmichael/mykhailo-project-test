<script setup lang="ts">
import type { Product } from '~/types/interfaces'

interface ProductsList {
  products: Product[]
}
const props = defineProps<ProductsList>()

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const year = d.getFullYear()
  return `${day}/${month}/${year}`
}
</script>

<template>
  <div class="products-list" v-for="product in products">
    <div class="product-item__status" :class="product.status ? 'free' : 'repair'"></div>
    <img class="product-item__image" :src="product.photo" alt="product-photo" />
    <div class="product-item__name">
      <span class="product-item__title">{{ product.title }}</span>
      <div class="product-item__serial">SN-{{ product.serialNumber }}</div>
    </div>
    <div class="product-item__status-word-free" v-if="product.status">Свободен</div>
    <div class="product-item__status-word-repair" v-if="!product.status">В ремонте</div>
    <div class="product-item__guarantee">
      <div class="product__guarantee-start">
        <span>с </span>{{ formatDate(product.guarantee.start) }}
      </div>
      <div class="product__guarantee-end">
        <span>по </span> {{ formatDate(product.guarantee.end) }}
      </div>
    </div>
    <div class="product-item__availability">
      <span v-if="product.availability">Новый</span>
      <span v-if="!product.availability">Б/У</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products-list {
  display: grid;
  grid-template-columns: 0.1fr 0.4fr 2fr 0.5fr 0.5fr 0.5fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7rem;
  border: 0.1rem solid $border-grey;
  border-radius: $default-br;
  transition: $default-transition;
  padding: 1rem 2rem;

  .product-item__status {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
  }
  .free {
    background-color: $free-green;
  }
  .repair {
    background-color: $base-black-title;
  }
  .product-item__image {
    width: 4rem;
    height: 4rem;
    object-fit: contain;
    flex-shrink: 0;
  }
  .product-item__name {
    flex: 1;
    overflow: hidden;
    .product-item__title {
      font-size: 1.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      border-bottom: 0.2rem solid $border-grey;
    }
    .product-item__serial {
      font-size: 1.2rem;
      color: $text-light-grey;
    }
  }
  .product-item__status-word-free {
    color: $free-green;
  }
  .product-item__status-word-repair {
    color: $base-black-title;
  }
  .product-item__guarantee {
    display: flex;
    flex-direction: column;
    color: $text-dark-grey;
    font-size: 1.4rem;
    .product__guarantee-start {
      display: flex;
      justify-content: space-around;
    }
    .product__guarantee-end {
      display: flex;
      justify-content: space-around;
    }
    span {
      font-size: 1.2rem;
      color: $text-light-grey;
    }
  }
  .product-item__availability {
    display: flex;
    justify-content: center;
    color: $text-dark-grey;
    font-size: 1.4rem;
  }
}
</style>
