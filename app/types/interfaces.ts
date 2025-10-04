export interface Guarantee {
  start: string
  end: string
}

export interface Price {
  value: number
  symbol: string
  isDefault: number
}

export interface Product {
  orderDate: string
  orderName: string
  id: number
  serialNumber: number
  photo: string
  title: string
  type?: string
  specification: string
  guarantee: Guarantee
  price: Price[]
  order: number
  date: string
  status: boolean // true = новый, false = бу
  availability: boolean // true = в ремонте, false = свободен
}

export interface Order {
  id: number
  title: string
  date: string
  description: string
  products: Product[]
}
