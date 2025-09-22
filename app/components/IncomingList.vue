<script setup lang="ts">
import { MONTH_NAMES } from '~/types/variables'

interface IncomingList {
  incomingName: string
  numOfProducts: number
  incomingDate: string
  incomingCostUah: number
  incomingCostUsd: number
}

const props = defineProps<IncomingList>()

const getProductWord = (count: number): string => {
  const mod10 = count % 10
  const mod100 = count % 100
  if (mod100 >= 11 && mod100 <= 14) return 'продуктов'
  if (mod10 === 1) return 'продукт'
  if (mod10 >= 2 && mod10 <= 4) return 'продукта'
  return 'продуктов'
}

const formatIncomingDate = (dateStr: string) => {
  const date = new Date(dateStr)
  const day = String(date.getDate()).padStart(2, '0')
  const monthIndex = date.getMonth()
  const month = MONTH_NAMES[monthIndex]
  const year = date.getFullYear()

  const topLabel = String(monthIndex + 1).padStart(2, '0')

  return {
    display: `${day}/${month}/${year}`,
    topLabel,
  }
}
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
    color: $text-dark-grey;
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
      font-weight: 500;
      font-size: 1.8rem;
    }

    .incoming-list__products-label {
      font-size: 1.2rem;
      color: $text-light-grey;
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }

  .incoming-list__date {
    display: flex;
    flex-direction: column;
    .incoming-list__date-top {
      display: flex;
      justify-content: center;
      font-size: 1.2rem;
      color: $text-light-grey;
    }
    .incoming-list__date-bottom {
      display: flex;
      justify-content: center;
      color: $text-dark-grey;
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
