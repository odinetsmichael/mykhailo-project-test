import type { Product } from '~/types/interfaces'

export const selectedProduct = ref<Product | null>(null)

export const showPopup = ref<boolean>(false)

export const closeDeletePopup = () => {
  showPopup.value = false
  selectedProduct.value = null
}
export const openDeletePopup = (product: Product) => {
  selectedProduct.value = product
  showPopup.value = true
}
