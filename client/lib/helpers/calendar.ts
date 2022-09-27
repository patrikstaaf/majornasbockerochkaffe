export function firstWord(text: string) {
  const firstBlank = text.indexOf(' ')
  if (firstBlank == -1) {
    return text
  }
  return text.slice(0, firstBlank)
}

export function getStartTime(time: string) {
  const startTime = time.split('-')
  console.log(startTime)

  if (!startTime) return time

  return startTime[0]
}

export function getEndTime(time: string) {
  const endTime = time.split('-')

  if (!endTime) return

  return endTime[1]
}

export function getIntroString(description: string) {
  const getIntro = description.slice(0, 18)
  return `${getIntro}...`
}

export function getDate(date: string) {
  const fullDate = date.slice(0, 10)
  return fullDate.slice(8)
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
