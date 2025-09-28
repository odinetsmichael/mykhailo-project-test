<script setup lang="ts">
import { getProductWord, formatIncomingDate } from '~/utils/orders'

interface OrderList {
  orderName: string
  numOfProducts: number
  orderDate: string
  orderCostUah: number
  orderCostUsd: number
}

const props = defineProps<OrderList>()
</script>

<template>
  <UiStrokeWrapper>
    <div class="order-list">
      <div class="order-list__name">
        <span class="order-list__name-text">{{ orderName }}</span>
      </div>

      <div class="order-list__products">
        <div class="order-list__products-menu">
          <UiMenu />
        </div>

        <div class="order-list__products-count">
          <span class="order-list__products-number">{{ numOfProducts }}</span>
          <span class="order-list__products-label">
            {{ getProductWord(numOfProducts) }}
          </span>
        </div>
      </div>

      <div class="order-list__date">
        <div class="order-list__date-top">{{ formatIncomingDate(orderDate).topLabel }}/12</div>
        <div class="order-list__date-bottom">{{ formatIncomingDate(orderDate).display }}</div>
      </div>

      <div class="order-list__cost">
        <span class="order-list__cost-usd">{{ orderCostUah }} $</span>
        <span class="order-list__cost-uah">{{ orderCostUsd }} UAH</span>
      </div>

      <div class="order-list__delete">
        <UiTrash />
      </div>
    </div>
  </UiStrokeWrapper>
</template>

<style lang="scss" scoped>
.order-list {
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 4.5fr 1.5fr 1.65fr 2.2fr 0.15fr;
  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .order-list__name {
    margin-right: $default-margin;

    .order-list__name-text {
      font-weight: 500;
      color: $text-dark-grey;
      border-bottom: 0.2rem solid $border-grey;
    }

    &::first-letter {
      text-transform: uppercase;
    }
  }

  .order-list__products {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    .order-list__products-menu {
      margin-right: $small-margin;
    }

    .order-list__products-count {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      line-height: 1.2;
    }

    .order-list__products-number {
      @include order-number-style;
    }

    .order-list__products-label {
      @include order-label-style;
    }
  }

  .order-list__date {
    display: flex;
    flex-direction: column;
    .order-list__date-top {
      display: flex;
      justify-content: center;
      @include order-date-top;
    }
    .order-list__date-bottom {
      display: flex;
      justify-content: center;
      @include order-date-bottom;
    }
  }

  .order-list__cost {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.2;
    .order-list__cost-usd {
      font-size: 1.2rem;
      color: $text-light-grey;
    }

    .order-list__cost-uah {
      color: $text-dark-grey;
    }
  }

  .order-list__delete {
    text-align: center;
    cursor: pointer;
    color: $text-dark-grey;
  }
}
</style>
