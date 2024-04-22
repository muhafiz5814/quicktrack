import RunningTask from "./runningTask"
import renderTasks from "./renderTasks"
import addManual from "./addManual"
import showChart from "./chart"

const inputEl = document.getElementById("title-input")
const startBtnEl = document.getElementById("start-btn")

let runningTasksEl = document.getElementById("running-tasks")

const trackerBtnEl = document.getElementById("tracker-btn")

const analyticsBtnEl = document.getElementById("analytics-btn")

const mainPageEl = document.getElementById("main-page")

const chartDivEl = document.getElementById("chart-div")

const autoBtnEl = document.getElementById("auto-btn")

const manualBtnEl = document.getElementById("manual-btn")

const addBtnEl = document.getElementById("add-btn")

const trackingInitiaterEl = document.getElementById("tracking-initiater")

const trackingInitiaterManualEl = document.getElementById("tracking-initiater-manual")

renderTasks()

autoBtnEl.addEventListener("click", () => {
  trackingInitiaterEl.removeAttribute("style")
  trackingInitiaterManualEl.setAttribute("style", "display: none;")
  manualBtnEl.classList.remove("active")
  autoBtnEl.classList.add("active")
})

manualBtnEl.addEventListener("click", () => {
  trackingInitiaterManualEl.removeAttribute("style")
  trackingInitiaterEl.setAttribute("style", "display: none;")
  autoBtnEl.classList.remove("active")
  manualBtnEl.classList.add("active")
})

startBtnEl.addEventListener("click", () => {
  const task1 = new RunningTask(inputEl.value)
  runningTasksEl.prepend(task1.render())
  inputEl.value = ""
})

addBtnEl.addEventListener("click", () => {
  addManual()
})

trackerBtnEl.addEventListener("click", () => {
  chartDivEl.classList.add("display-none")
  mainPageEl.removeAttribute("style")
  analyticsBtnEl.classList.remove("active1")
  trackerBtnEl.classList.add("active1")
})

analyticsBtnEl.addEventListener("click", () => {
  let tasks = JSON.parse(localStorage.getItem("tasks"))
  let data = tasks.map((task) => {
    let title = task.title
    
    let duration = task.duration
    let durationArray = duration.split(`:`)
    let hours = parseInt(durationArray[0])
    let minutes = parseInt(durationArray[1])
    let totalMinutes = hours*60 + minutes

    return {title, totalMinutes}
  })
  mainPageEl.setAttribute("style", `display: none;`)
  chartDivEl.classList.remove("display-none")
  trackerBtnEl.classList.remove("active1")
  analyticsBtnEl.classList.add("active1")
  console.log(data)
  showChart(data)
})
