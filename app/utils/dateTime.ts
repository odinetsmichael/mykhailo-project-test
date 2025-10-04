import { MONTH_NAMES } from '~/types/variables'

export function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  const day = String(date.getDate()).padStart(2, '0')
  const monthIndex = date.getMonth()
  const month = MONTH_NAMES[monthIndex]
  const year = date.getFullYear()
  const topLabel = String(monthIndex + 1).padStart(2, '0')

  return {
    display: `${day}/${month}/${year}`,
    topLabel,
  }
}
