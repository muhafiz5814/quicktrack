/** * * * * *
 * Keeping this file unmodified as it is the base logic of the application and will help in building the remaining part of the application.
 * 
 * It will be modified at the end 
*/
// import RunningTask from "./runningTask"

const inputEl = document.getElementById("title-input")
const startBtnEl = document.getElementById("start-btn")
const initialTimeEl = document.getElementById("initial-time")

const trackerTitleEl = document.getElementById("tracker-title")
const timerEl = document.getElementById("timer")
const stopBtnEl = document.getElementById("stop-btn")

const taskTitleEl = document.getElementById("task-title")
const totaldurationEl = document.getElementById("total-duration")
const fromToTillEl = document.getElementById("from-to-till")
const taskDateEl = document.getElementById("task-date")

let hours = 0
let minutes = 0
let seconds = 0

let startTime = null
let endTime = null

const updateTimer = () => {
  
  seconds++
  if(seconds >= 60){
    seconds = 0
    minutes++
  } if(minutes >= 60) {
    minutes = 0
    hours++
  }

  const updatedTimer = `${(hours < 10) ? "0" + hours : hours}:${(minutes < 10) ? "0" + minutes : minutes}:${(seconds < 10) ? "0" + seconds : seconds}`

  timerEl.innerText = updatedTimer
}

let timerInstance = null

startBtnEl.addEventListener("click", () => {
  // Store the task start time
  startTime = new Date()

  trackerTitleEl.innerText = inputEl.value
  timerEl.innerText = initialTimeEl.innerText
  timerInstance = setInterval(updateTimer, 1000)
  inputEl.value = ""
})

stopBtnEl.addEventListener("click", () => {
  // Store the task ending time
  endTime = new Date()

  // Clear the Interval 
  clearInterval(timerInstance)

  taskTitleEl.innerText = trackerTitleEl.innerText
  totaldurationEl.innerText = timerEl.innerText
  timerEl.innerText = initialTimeEl.innerText
  
  taskDateEl.innerText = `${startTime.toDateString()}`
  fromToTillEl.innerText = 
  `${startTime.getHours()}:${startTime.getMinutes()} - ${endTime.getHours()}:${endTime.getMinutes()}
  `
})

/** This code is to test the newly created RunningTasks feature */

// let runningTasksEl = document.getElementById("running-tasks")
// const tempBtn = document.getElementById("temp")

// tempBtn.addEventListener("click", () => {
//   const task1 = new RunningTask("Muhafiz")
//   // console.log(task1.render())
//   runningTasksEl.append(task1.render())
// })