<script setup lang="ts">
import type { Product } from '~/composables/types/orders'
import { useProducts } from '~/composables/useProducts'
import { MenuList } from '@/types/enums'

const { getProducts } = useProducts()

const products = ref<Product[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const type = ref<string[] | undefined>(['Monitor', 'Laptop'])
const specification = ref<string[] | undefined>(['specification1', 'specification2'])

onMounted(async () => {
  loading.value = true
  try {
    products.value = await getProducts()
  } catch (e: any) {
    error.value = e.message || 'Ошибка загрузки продуктов'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <NuxtLayout>
    <div>
      <SubHeader
        :title="MenuList.PRODUCTS"
        :max-items="products.length"
        :type="type"
        :specification="specification"
      />
      <div v-if="loading">Загрузка...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else class="products-list-wrapper">
        <ProductsList :products="products || []" />
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.products-list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
