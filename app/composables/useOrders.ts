import { ref, computed } from 'vue'
import type { Order } from './types/orders'
import { calculateOrderCosts, type OrderWithCost } from './useOrderCosts'

export function useOrders() {
  const orders = ref<Order[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const getOrders = async (): Promise<Order[]> => {
    loading.value = true
    try {
      const data = await $fetch<Order[]>('/api/order-get')
      orders.value = data
      return data
    } catch (e: any) {
      error.value = e?.message || 'Ошибка загрузки заказов'
      return []
    } finally {
      loading.value = false
    }
  }

  const getOrderById = (id: number) => $fetch<Order>(`/api/orders/${id}`)

  const createOrder = (order: any) =>
    $fetch<Order>('/api/orders', {
      method: 'POST',
      body: order,
    })

  const updateOrder = (id: number, order: any) =>
    $fetch<Order>(`/api/orders/${id}`, {
      method: 'PUT',
      body: order,
    })

  const deleteOrder = (id: number) =>
    $fetch<Order>(`/api/orders/${id}`, {
      method: 'DELETE',
    })

  const ordersWithCost = computed<OrderWithCost[]>(() =>
    orders.value.map((order) => ({ ...order, ...calculateOrderCosts(order) }))
  )

  return {
    orders,
    ordersWithCost,
    loading,
    error,
    getOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
  }
}
