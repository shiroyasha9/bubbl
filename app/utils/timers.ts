export const getDisplayDurationFromSeconds = (seconds: number) => {
  const hours = Math.floor(seconds / (60 * 60))
  seconds = seconds - hours * 60 * 60
  const minutes = Math.floor(seconds / 60)
  const secondsLeft = seconds - minutes * 60
  const computedHours = hours.toString().length > 1 ? hours : `0${hours}`
  const computedMinutes = minutes.toString().length > 1 ? minutes : `0${minutes}`
  const computedSeconds = secondsLeft.toString().length > 1 ? secondsLeft : `0${secondsLeft}`
  if (hours === 0) {
    return `${computedMinutes}m ${computedSeconds}s`
  }
  return `${computedHours}h ${computedMinutes}m ${computedSeconds}s`
}

export const transformYTDurationToSeconds = (time: string) => {
  const a = time.match(/\d+H|\d+M|\d+S/g)
  let result = 0
  let num: string
  let type: string
  const d = { H: 3600, M: 60, S: 1 }
  try {
    for (let i = 0; i < a.length; i++) {
      num = a[i].slice(0, a[i].length - 1)
      type = a[i].slice(a[i].length - 1, a[i].length)

      result += parseInt(num) * d[type]
    }
    return getDisplayDurationFromSeconds(result)
  } catch {
    return "Live Video"
  }
}
