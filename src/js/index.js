const inputEl = document.getElementById("title-input")
const startBtnEl = document.getElementById("start-btn")
const initialTimeEl = document.getElementById("initial-time")

const trackerTitleEl = document.getElementById("tracker-title")
const timerEl = document.getElementById("timer")
const stopBtnEl = document.getElementById("stop-btn")

const taskTitleEl = document.getElementById("task-title")
const totaldurationEl = document.getElementById("total-duration")

let hours = 0
let minutes = 0
let seconds = 0

const updateTimer = () => {
  
  seconds++
  if(seconds >= 60){
    seconds = 0
    minutes++
  } if(minutes >= 60) {
    minutes = 0
    hours++
  }

  const updatedTimer = `
    ${(hours < 10) ? "0" + hours : hours}:${(minutes < 10) ? "0" + minutes : minutes}:${(seconds < 10) ? "0" + seconds : seconds}`

  timerEl.innerText = updatedTimer
}

let timerInstance = null

startBtnEl.addEventListener("click", () => {
  trackerTitleEl.innerText = inputEl.value
  timerEl.innerText = initialTimeEl.innerText
  timerInstance = setInterval(updateTimer, 1000)
  inputEl.value = ""
})

stopBtnEl.addEventListener("click", () => {
  clearInterval(timerInstance)
  taskTitleEl.innerText = trackerTitleEl.innerText
  totaldurationEl.innerText = timerEl.innerText
  timerEl.innerText = initialTimeEl.innerText
})