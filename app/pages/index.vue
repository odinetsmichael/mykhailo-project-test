<script setup lang="ts">
import { MenuList } from '@/types/enums'
import { useOrders } from '~/composables/useOrders'
definePageMeta({
  middleware: ['authenticated'],
})
const { ordersWithCost, loading, error, getOrders } = useOrders()

onMounted(() => {
  getOrders()
})
</script>

<template>
  <NuxtLayout>
    <SubHeader :title="MenuList.INCOMING" :max-items="ordersWithCost.length" />
    <div v-if="loading">Загрузка...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="order-lists">
      <OrderList
        v-for="order in ordersWithCost"
        :key="order.id"
        :num-of-products="order.products.length"
        :order-name="order.title"
        :order-date="order.date"
        :order-cost-uah="order.totalCostUAH"
        :order-cost-usd="order.totalCostUSD"
      />
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.order-lists {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.error {
  color: red;
  font-weight: 500;
}
</style>
