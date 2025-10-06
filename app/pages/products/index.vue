<script setup lang="ts">
import { useProducts } from '~/composables/useProducts'
import { MenuList } from '@/types/enums'
import type { Product } from '~/types/interfaces'
definePageMeta({
  middleware: ['authenticated'],
})
const { getProducts } = useProducts()
const { getOrders } = useOrders()

const products = ref<Product[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const type = ref<string[] | undefined>(['Monitor', 'Laptop'])
const specification = ref<string[] | undefined>(['specification1', 'specification2'])

const orderMap = new Map()
onMounted(async () => {
  loading.value = true
  try {
    products.value = await getProducts()
    const orders = await getOrders()
    orders.forEach((o) => {
      orderMap.set(o.id, o)
    })
  } catch (e: any) {
    error.value = e.message || 'Ошибка загрузки продуктов'
  } finally {
    loading.value = false
  }
})

const allProducts = (p: Product[]) => {
  return p.map((e) => {
    e.orderName = orderMap.get(e.order).title || ''
    e.orderDate = orderMap.get(e.order).date || ''
    return e
  })
}
const filteredProducts = ref<Product[]>([])

onMounted(async () => {
  loading.value = true
  try {
    products.value = await getProducts()
    const orders = await getOrders()
    orders.forEach((o) => {
      orderMap.set(o.id, o)
    })
    filteredProducts.value = allProducts(products.value) // дефолт — все продукты
  } catch (e: any) {
    error.value = e.message || 'Ошибка загрузки продуктов'
  } finally {
    loading.value = false
  }
})

function applyFilters(filters: { type: string; specification: string }) {
  const all = allProducts(products.value)
  filteredProducts.value = all.filter((p) => {
    const typeMatch = !filters.type || p.type === filters.type
    const specificationMatch = !filters.specification || p.specification === filters.specification
    return typeMatch && specificationMatch
  })
}
</script>

<template>
  <NuxtLayout>
    <div class="wrapper">
      <SubHeader
        :title="MenuList.PRODUCTS"
        :max-items="products.length"
        :type="type"
        :specification="specification"
        @filter-changed="applyFilters"
      />
      <div v-if="loading">Загрузка...</div>
      <div v-else-if="error" class="error">{{ error }}</div>

      <div v-else class="products-list-wrapper">
        <UiHorizontalScroll>
          <ProductsList :products="filteredProducts || []" />
        </UiHorizontalScroll>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.products-list-wrapper {
  width: 100%;
  max-width: 1200px;
  overflow-x: hidden;
}
</style>
