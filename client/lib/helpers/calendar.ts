export function firstWord(text: string) {
  const firstBlank = text.indexOf(' ')
  if (firstBlank == -1) {
    // There is no space at all -- return the whole string
    return text
  }
  return text.slice(0, firstBlank)
}

export function getDate(date: string) {
  return date.slice(8)
}

export function getMonthInShortText(date: string) {
  const getMonth = date.substring(5, 7)

  switch (getMonth) {
    case '01':
      return 'jan'
    case '02':
      return 'feb'
    case '03':
      return 'mar'
    case '04':
      return 'apr'
    case '05':
      return 'maj'
    case '06':
      return 'jun'
    case '07':
      return 'jul'
    case '08':
      return 'aug'
    case '09':
      return 'sep'
    case '10':
      return 'okt'
    case '11':
      return 'nov'
    case '12':
      return 'dec'
  }
}
