<script setup lang="ts">
import type { MenuList } from '~/types/enums'

interface SubHeader {
  title: MenuList
  maxItems: number
  type?: string[]
  specification?: string[]
}

const props = defineProps<SubHeader>()
</script>
<template>
  <div class="sub-header">
    <p>{{ props.title }} / {{ maxItems }}</p>

    <div
      v-if="
        props.type && props.type.length > 0 && props.specification && props.specification.length > 0
      "
      class="filters-wrapper"
    >
      <div class="filter">
        <label for="inlineFormSelectPref" class="filter-label">Тип:</label>
        <select class="form-select" id="inlineFormSelectPref">
          <option :value="val" v-for="val in type">{{ val }}</option>
        </select>
      </div>
      <div class="filter">
        <label for="inlineFormSelectPref" class="filter-label">Спецификация:</label>
        <select class="form-select" id="inlineFormSelectPref">
          <option :value="val" v-for="val in specification">{{ val }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sub-header {
  display: flex;
  gap: 2rem;
  font-size: $fz-title;
  text-transform: capitalize;
  margin-bottom: $default-margin;
  font-weight: 500;
  .filters-wrapper {
    display: flex;
    align-items: center;
    gap: $small-margin;
    .filter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      .form-select {
        width: 18rem;
      }
      .filter-label {
        font-size: 1.2rem;
        color: $text-light-grey;
      }
    }
  }
}
</style>
