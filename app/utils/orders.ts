export function getProductWord(count: number, labels: string): string {
  const mod10 = count % 10
  const mod100 = count % 100
  const forms = labels.split('|').map((f) => f.trim())

  if (forms.length < 3) {
    return forms[0] || ''
  }

  if (mod100 >= 11 && mod100 <= 14) return forms[2]
  if (mod10 === 1) return forms[0]
  if (mod10 >= 2 && mod10 <= 4) return forms[1]
  return forms[2]
}
