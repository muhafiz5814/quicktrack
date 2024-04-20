const inputEl = document.getElementById("title-input")
const startBtnEl = document.getElementById("start-btn")
const trackerTitleEl = document.getElementById("tracker-title")
const initialTimeEl = document.getElementById("initial-time")
const timerEl = document.getElementById("timer")

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



startBtnEl.addEventListener("click", () => {
  trackerTitleEl.innerText = inputEl.value
  timerEl.innerText = initialTimeEl.innerText
  let timerInstance = setInterval(updateTimer, 1000)
  inputEl.value = ""
})