const HH_MM_SS = "hh mm ss"
const HHMMSS = "hh.mm.ss"
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

export const getDisplayDurationFromSeconds = (
  seconds: number,
  format = HH_MM_SS,
) => {
  const hours = Math.floor(seconds / (60 * 60))
  seconds = seconds - hours * 60 * 60
  const minutes = Math.floor(seconds / 60)
  const secondsLeft = seconds - minutes * 60
  const computedHours = hours.toString().length > 1 ? hours : `0${hours}`
  const computedMinutes =
    minutes.toString().length > 1 ? minutes : `0${minutes}`
  const computedSeconds =
    secondsLeft.toString().length > 1 ? secondsLeft : `0${secondsLeft}`
  if (format === HHMMSS) {
    if (hours === 0) {
      return `${computedMinutes}.${computedSeconds}`
    }
    return `${computedHours}.${computedMinutes}.${computedSeconds}`
  }
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

export const formatAMPM = (date: Date) => {
  let hours = date.getHours()
  let minutes: number | string = date.getMinutes()
  const ampm = hours >= 12 ? "pm" : "am"
  hours = hours % 12
  hours = hours || 12
  minutes = minutes.toString().padStart(2, "0")
  const strTime = hours + ":" + minutes + " " + ampm
  return strTime
}

export const formatDate: (date: Date) => { date: string; time: string } = (
  date,
) => {
  let hour = date.getHours()
  const day = date.getDate()
  const month = MONTHS[date.getMonth()] // get month in MMM format
  const period = hour < 12 ? "AM" : "PM" // Set AM/PM
  hour = hour % 12 || 12 // Adjust hours
  const minute =
    date.getMinutes().toString().length === 1
      ? `0${date.getMinutes()}`
      : date.getMinutes()
  return { date: `${day} ${month}`, time: `${hour}:${minute} ${period}` }
}
