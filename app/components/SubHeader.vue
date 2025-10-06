<script setup lang="ts">
interface SubHeader {
  title: string
  maxItems?: number
  type?: string[]
  specification?: string[]
}

const props = defineProps<SubHeader>()

const selectedType = ref<string>('')
const selectedSpecification = ref<string>('')

const emit = defineEmits<{
  (e: 'filter-changed', filters: { type: string; specification: string }): void
}>()

function updateFilters() {
  emit('filter-changed', {
    type: selectedType.value,
    specification: selectedSpecification.value,
  })
}
</script>

<template>
  <div class="sub-header">
    <p>
      {{ props.title }} <span v-if="maxItems">/ {{ props.maxItems }}</span>
    </p>

    <div
      v-if="
        props.type && props.type.length > 0 && props.specification && props.specification.length > 0
      "
      class="filters-wrapper"
    >
      <div class="filter">
        <label class="filter-label">{{ $t('components.sub-header.type-label') }}:</label>
        <select class="form-select" v-model="selectedType" @change="updateFilters">
          <option value="">{{ $t('components.sub-header.all-option') }}</option>
          <option :value="val" v-for="val in props.type" :key="val">{{ val }}</option>
        </select>
      </div>

      <div class="filter">
        <label class="filter-label">{{ $t('components.sub-header.specification-label') }}:</label>
        <select class="form-select" v-model="selectedSpecification" @change="updateFilters">
          <option value="">{{ $t('components.sub-header.all-option') }}</option>
          <option :value="val" v-for="val in props.specification" :key="val">{{ val }}</option>
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
