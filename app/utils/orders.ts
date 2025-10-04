export function getProductWord(count: number): string {
  const mod10 = count % 10
  const mod100 = count % 100
  if (mod100 >= 11 && mod100 <= 14) return 'продуктов'
  if (mod10 === 1) return 'продукт'
  if (mod10 >= 2 && mod10 <= 4) return 'продукта'
  return 'продуктов'
}
