export default defineEventHandler(async (event) => {
  const products = await $fetch('/api/products-get')

  const orders = [
    {
      id: 1,
      title: 'Order 1',
      date: '2017-06-29 12:09:33',
      description: 'desc',
      get products() {
        return products.filter((p: any) => p.order === this.id)
      },
    },
    {
      id: 2,
      title: 'Order 2',
      date: '2017-06-29 12:09:33',
      description: 'desc',
      get products() {
        return products.filter((p: any) => p.order === this.id)
      },
    },
  ]

  return orders
})
