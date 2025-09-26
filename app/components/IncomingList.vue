<script setup lang="ts">
import { getProductWord, formatIncomingDate } from '~/utils/orders'
interface IncomingList {
  incomingName: string
  numOfProducts: number
  incomingDate: string
  incomingCostUah: number
  incomingCostUsd: number
}

const props = defineProps<IncomingList>()
</script>

<template>
  <div class="incoming-list">
    <div class="incoming-list__name">
      <span class="incoming-list__name-text">{{ incomingName }}</span>
    </div>

    <div class="incoming-list__products">
      <div class="incoming-list__products-menu">
        <ButtonsMenu />
      </div>

      <div class="incoming-list__products-count">
        <span class="incoming-list__products-number">{{ numOfProducts }}</span>
        <span class="incoming-list__products-label">
          {{ getProductWord(numOfProducts) }}
        </span>
      </div>
    </div>

    <div class="incoming-list__date">
      <div class="incoming-list__date-top">{{ formatIncomingDate(incomingDate).topLabel }}/12</div>
      <div class="incoming-list__date-bottom">{{ formatIncomingDate(incomingDate).display }}</div>
    </div>

    <div class="incoming-list__cost">
      <span class="incoming-list__cost-usd">{{ incomingCostUah }} $</span>
      <span class="incoming-list__cost-uah">{{ incomingCostUsd }} UAH</span>
    </div>

    <div class="incoming-list__delete">
      <ButtonsTrash />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.incoming-list {
  display: grid;
  grid-template-columns: 4.5fr 1.5fr 1.65fr 2.2fr 0.15fr;
  align-items: center;
  width: 100%;
  height: 7rem;
  border: 0.1rem solid $border-grey;
  border-radius: $default-br;
  transition: $default-transition;
  padding: 1rem 2rem;

  &:hover {
    box-shadow: 0 0.1rem 2.5rem -0.5rem rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .incoming-list__name {
    margin-right: $default-margin;

    .incoming-list__name-text {
      font-weight: 500;
      color: $text-dark-grey;
      border-bottom: 0.2rem solid $border-grey;
    }

    &::first-letter {
      text-transform: uppercase;
    }
  }

  .incoming-list__products {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    .incoming-list__products-menu {
      margin-right: $small-margin;
    }

    .incoming-list__products-count {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      line-height: 1.2;
    }

    .incoming-list__products-number {
      @include order-number-style;
    }

    .incoming-list__products-label {
      @include order-label-style;
    }
  }

  .incoming-list__date {
    display: flex;
    flex-direction: column;
    .incoming-list__date-top {
      display: flex;
      justify-content: center;
      @include order-date-top;
    }
    .incoming-list__date-bottom {
      display: flex;
      justify-content: center;
      @include order-date-bottom;
    }
  }

  .incoming-list__cost {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.2;
    .incoming-list__cost-usd {
      font-size: 1.2rem;
      color: $text-light-grey;
    }

    .incoming-list__cost-uah {
      color: $text-dark-grey;
    }
  }

  .incoming-list__delete {
    text-align: center;
    cursor: pointer;
    color: $text-dark-grey;
  }
}
</style>
