export default defineEventHandler(async (event) => {
  const products = await $fetch('/api/products-get')
  const orders = [
    {
      id: 1,
      title: 'Order 1',
      date: '2017-06-29 12:09:33',
      description: 'Первый заказ',
      get products() {
        return products.filter((p: any) => p.order === this.id)
      },
    },
    {
      id: 2,
      title: 'Order 2',
      date: '2017-07-01 12:09:33',
      description: 'Второй заказ',
      get products() {
        return products.filter((p: any) => p.order === this.id)
      },
    },
    {
      id: 3,
      title: 'Order 3',
      date: '2019-03-15 12:09:33',
      description: 'Третий заказ',
      get products() {
        return products.filter((p: any) => p.order === this.id)
      },
    },
    {
      id: 4,
      title: 'Order 4',
      date: '2021-11-01 12:09:33',
      description: 'Четвёртый заказ',
      get products() {
        return products.filter((p: any) => p.order === this.id)
      },
    },
  ]

  return orders
})
