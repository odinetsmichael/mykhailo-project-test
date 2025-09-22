import type { Order } from './types/orders'

export function useOrders() {
  const getOrders = () => $fetch<Order[]>('/api/order-get')

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

  return {
    getOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
  }
}
