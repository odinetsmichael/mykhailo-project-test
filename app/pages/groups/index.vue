<script setup lang="ts">
import { MenuList } from '@/types/enums'
import type { Order } from '~/composables/types/orders'
import { useOrders } from '~/composables/useOrders'
const { getOrders } = useOrders()
const orders = ref<Order[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
function calculateOrderCosts(order: Order) {
  const totalCostUAH = order.products.reduce(
    (sum, p) => sum + (p.price.find((pr) => pr.symbol === 'UAH')?.value || 0),
    0
  )
  const totalCostUSD = order.products.reduce(
    (sum, p) => sum + (p.price.find((pr) => pr.symbol === 'USD')?.value || 0),
    0
  )
  return { totalCostUAH, totalCostUSD }
}
type OrderWithCost = Order & { totalCostUAH: number; totalCostUSD: number }
const ordersWithCost = computed<OrderWithCost[]>(() =>
  orders.value.map((order) => ({ ...order, ...calculateOrderCosts(order) }))
)
onMounted(async () => {
  loading.value = true
  try {
    orders.value = await getOrders()
  } catch (e: any) {
    error.value = e.message || 'Ошибка загрузки заказов'
  } finally {
    loading.value = false
  }
})
const selectedOrder = ref<any | null>(null)
const handleGroupClick = (order: any) => {
  selectedOrder.value = order
}
</script>

<template>
  <NuxtLayout>
    <div>
      <SubHeader :title="MenuList.GROUPS" :max-items="orders.length" />
      <div v-if="loading">Загрузка...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else class="groups-wrapper">
        <div class="groups-lists" v-if="orders.length > 0">
          <GroupList
            v-for="order in ordersWithCost"
            :key="order.id"
            :num-of-products="order.products.length"
            :incoming-name="order.title"
            :incoming-date="order.date"
            :incoming-cost-uah="order.totalCostUAH"
            :incoming-cost-usd="order.totalCostUSD"
            @click="handleGroupClick(order)"
          />
        </div>
        <div v-if="selectedOrder">
          <GroupProductList :products="selectedOrder.products" :order-name="selectedOrder.title" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.groups-wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 1rem;
  .groups-lists {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
