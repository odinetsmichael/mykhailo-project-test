import type { Order } from '~/types/interfaces'

export type OrderWithCost = Order & {
  totalCostUAH: number
  totalCostUSD: number
}

export function calculateOrderCosts(order: Order) {
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
