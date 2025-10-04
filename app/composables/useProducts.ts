import type { Product } from '~/types/interfaces'

export function useProducts() {
  const products = ref<Product[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const getProducts = async (): Promise<Product[]> => {
    loading.value = true
    try {
      const data = await $fetch<Product[]>('/api/products-get')
      return data
    } catch (e: any) {
      error.value = e?.message || 'Ошибка загрузки продуктов'
      return []
    } finally {
      loading.value = false
    }
  }

  //   const getProductById = (id: number) => $fetch<Product>(`/api/products/${id}`)

  //   const createProduct = (product: any) =>
  //     $fetch<Product>('/api/products', {
  //       method: 'POST',
  //       body: product,
  //     })

  //   const updateProduct = (id: number, product: any) =>
  //     $fetch<Product>(`/api/products/${id}`, {
  //       method: 'PUT',
  //       body: product,
  //     })

  //   const deleteProduct = (id: number) =>
  //     $fetch<Product>(`/api/products/${id}`, {
  //       method: 'DELETE',
  //     })

  return {
    products,
    loading,
    error,
    getProducts,
    // getProductById,
    // createProduct,
    // updateProduct,
    // deleteProduct,
  }
}
