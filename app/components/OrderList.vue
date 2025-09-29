<script setup lang="ts">
import { getProductWord, formatIncomingDate } from '~/utils/orders'

interface OrderList {
  orderName: string
  numOfProducts: number
  orderDate: string
  orderCostUah: number
  orderCostUsd: number
}
const show = ref(false)

const deleteItem = () => {
  console.log('Удалено!')
  show.value = false
}
const props = defineProps<OrderList>()
</script>

<template>
  <UiStrokeWrapper>
    <div class="order-list">
      <div class="order-list__name">
        <span class="text">{{ orderName }}</span>
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
        <span class="usd">{{ orderCostUah }} $</span>
        <span class="uah">{{ orderCostUsd }} UAH</span>
      </div>

      <div class="order-list__delete">
        <UiTrash @click="show = true" />
        <PopupsDelete
          :visible="show"
          title="Вы уверены, что хотите удалить этот приход?"
          @close="show = false"
          @cancel="show = false"
          @confirm="deleteItem"
        >
          <div class="item-info">
            <div>
              <p>{{ orderName }}</p>
              <small>SN-12.3456789</small>
            </div>
          </div>
        </PopupsDelete>
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
    @include order-name;
    .text {
      border-bottom: 0.2rem solid $border-grey;
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
      @include order-products-count;
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
    @include order-cost;
  }
}
</style>
