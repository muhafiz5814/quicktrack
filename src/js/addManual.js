import addTask from "./addTask"

const titleElManual = document.getElementById("title-input-manual")
const startTimeElManual = document.getElementById("start-time-input-manual")
const endTimeElManual = document.getElementById("end-time-input-manual")
const startDateElManual = document.getElementById("start-date-input-manual")
const addBtnEl = document.getElementById("add-btn")

const getDuration = (start, end) => {
  let diff = end - start
  console.log(diff)
  let hours = Math.floor(Math.abs(diff/3600000))
  diff = diff % 3600000
  let minutes = Math.floor(Math.abs(diff/60000))
  diff = diff % 60000
  let seconds = Math.floor(Math.abs(diff / 1000))

  return `${(hours < 10) ? "0" + hours : hours}:${(minutes < 10) ? "0" + minutes : minutes}:${(seconds < 10) ? "0" + seconds : seconds}`
}

const getDateObj = (date) => {
  return new Date(date)
}

const getTimeObj = (time) => {
  return new Date(`01/01/1970 ${time}`)
}

addBtnEl.addEventListener("click", () => {
  const title = titleElManual.value
  const startTime = getTimeObj(startTimeElManual.value)
  const endTime = getTimeObj(endTimeElManual.value)
  const startDate = getDateObj(startDateElManual.value)
  const duration = getDuration(startTime, endTime)
  
  addTask(title, startTime, endTime, startDate, duration, Date.now())

  titleElManual.value = ""
  startTimeElManual.value = ""
  endTimeElManual.value = ""
  startDateElManual.value = ""
})
