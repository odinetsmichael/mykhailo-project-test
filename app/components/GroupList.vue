<script setup lang="ts">
import { getProductWord } from '~/utils/orders'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface GroupList {
  numOfProducts: number
  incomingDate: string
}

const props = defineProps<GroupList>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <UiStrokeWrapper group @click="handleClick">
    <div class="group-list">
      <div class="group-list__menu">
        <UiMenu />
      </div>

      <div class="group-list__count">
        <span class="group-list__number">{{ numOfProducts }}</span>
        <span class="group-list__label">
          {{ getProductWord(numOfProducts, t('components.order-list.products-label')) }}</span
        >
      </div>

      <div class="group-list__date">
        <div class="group-list__date-top">{{ formatDate(incomingDate).topLabel }}/12</div>
        <div class="group-list__date-bottom">{{ formatDate(incomingDate).display }}</div>
      </div>
    </div>
  </UiStrokeWrapper>
</template>

<style lang="scss" scoped>
.group-list {
  display: grid;
  grid-template-columns: 2fr 3fr 5fr;
  width: 100%;
  align-items: center;

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .group-list__menu {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: $small-margin;
  }

  .group-list__count {
    @include order-products-count;
    .group-list__number {
      @include order-number-style;
    }
    .group-list__label {
      @include order-label-style;
    }
  }

  .group-list__date {
    display: flex;
    flex-direction: column;

    .group-list__date-top {
      display: flex;
      justify-content: left;
      @include order-date-top;
    }

    .group-list__date-bottom {
      display: flex;
      justify-content: left;
      @include order-date-bottom;
    }
  }
}
</style>
