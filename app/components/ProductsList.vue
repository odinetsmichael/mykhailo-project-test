<script setup lang="ts">
import type { Product } from '~/types/interfaces'

interface ProductsList {
  products: Product[]
}
const props = defineProps<ProductsList>()
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
function formatGuaranteeDate(dateStr: string): string {
  const d = new Date(dateStr)
  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const year = d.getFullYear()
  return `${day}/${month}/${year}`
}
</script>

<template>
  <UiStrokeWrapper v-for="product in products">
    <div class="products-list">
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
          <span>с </span>{{ formatGuaranteeDate(product.guarantee.start) }}
        </div>
        <div class="product__guarantee-end">
          <span>по </span> {{ formatGuaranteeDate(product.guarantee.end) }}
        </div>
      </div>
      <div class="product-item__availability">
        <span v-if="product.availability">Новый</span>
        <span v-if="!product.availability">Б/У</span>
      </div>
      <div class="product-item__cost">
        <span class="usd">{{ product.price[0]?.value }} $</span>
        <span class="uah">{{ product.price[1]?.value }} UAH</span>
      </div>
      <div class="product-item__group-name">
        <span class="text">Длинное предленное предленнючее название группы</span>
      </div>
      <div class="product-item__user-name">
        <span class="text">Христорождественский Александр</span>
      </div>
      <div class="product-item__order-name">
        <span class="text">{{ product.orderName }}</span>
      </div>
      <div class="product-item__order-date">
        <div class="product-item__order-date_top">
          {{ formatDate(product.orderDate).topLabel }}/12
        </div>
        <div class="product-item__order-date_bottom">
          {{ formatDate(product.orderDate).display }}
        </div>
      </div>
      <div class="product-item__delete">
        <div class="group-products__delete">
          <UiTrash @click="openDeletePopup(product)" />
        </div>
      </div>
    </div>
  </UiStrokeWrapper>
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
.products-list {
  display: grid;
  grid-template-columns: 0.2fr 0.4fr 2fr 0.5fr 0.5fr 0.5fr 0.5fr 2fr 2fr 2fr 2fr 0.1fr;
  align-items: center;
  justify-content: center;
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
    @include list-image;
  }
  .product-item__name {
    flex: 1;
    overflow: hidden;
    .product-item__title {
      @include product-name;
    }
    .product-item__serial {
      @include product-serial;
    }
  }
  .product-item__status-word-free {
    @include product-status-free;
  }
  .product-item__status-word-repair {
    @include product-status-repair;
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
  .product-item__cost {
    @include order-cost;
  }
  .product-item__group-name {
    @include order-name;
  }
  .product-item__user-name {
    @include order-name;
  }
  .product-item__order-name {
    @include order-name;
  }
  .product-item__order-date {
    display: flex;
    flex-direction: column;
    .product-item__order-date_top {
      display: flex;
      justify-content: center;
      @include order-date-top;
    }
    .product-item__order-date_bottom {
      display: flex;
      justify-content: center;
      @include order-date-bottom;
    }
  }
}
</style>
