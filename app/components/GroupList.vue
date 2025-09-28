<script setup lang="ts">
import { getProductWord, formatIncomingDate } from '~/utils/orders'

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
  <div class="group-list" @click="handleClick">
    <div class="group-list__menu">
      <UiMenu />
    </div>

    <div class="group-list__count">
      <span class="group-list__number">{{ numOfProducts }}</span>
      <span class="group-list__label">{{ getProductWord(numOfProducts) }}</span>
    </div>

    <div class="group-list__date">
      <div class="group-list__date-top">{{ formatIncomingDate(incomingDate).topLabel }}/12</div>
      <div class="group-list__date-bottom">{{ formatIncomingDate(incomingDate).display }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.group-list {
  display: grid;
  grid-template-columns: 2fr 3fr 5fr;
  align-items: center;
  width: 100%;
  height: 7rem;
  border: 0.1rem solid $border-grey;
  border-radius: $default-br;
  transition: $default-transition;
  padding: 1rem 2rem;

  &:hover {
    position: relative;
    box-shadow: 0 0.1rem 2.5rem -0.5rem rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: $default-transition;
    &:after {
      width: 15%;
      height: 100%;
      background-color: $border-grey;
      content: '';
      position: absolute;
      right: 0;
      transition: $default-transition;
    }
    &:before {
      z-index: 5;
      content: '';
      position: absolute;
      top: 50%;
      right: 7.5%;
      transform: translate(50%, -50%) rotate(-45deg);
      width: 1.2rem;
      height: 1.2rem;
      border-right: 0.4rem solid white;
      border-bottom: 0.4rem solid white;
    }
  }

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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.2;

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
