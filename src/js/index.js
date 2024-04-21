import RunningTask from "./runningTask"
import renderTasks from "./renderTasks"
import showChart from "./chart"

const inputEl = document.getElementById("title-input")
const startBtnEl = document.getElementById("start-btn")

let runningTasksEl = document.getElementById("running-tasks")

const trackerBtnEl = document.getElementById("tracker-btn")

const analyticsBtnEl = document.getElementById("analytics-btn")

const mainPageEl = document.getElementById("main-page")

const chartDivEl = document.getElementById("chart-div")

renderTasks()

startBtnEl.addEventListener("click", () => {
  const task1 = new RunningTask(inputEl.value)
  runningTasksEl.prepend(task1.render())
  inputEl.value = ""
})

trackerBtnEl.addEventListener("click", () => {
  chartDivEl.classList.add("display-none")
  mainPageEl.classList.remove("display-none")
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
  mainPageEl.classList.add("display-none")
  chartDivEl.classList.remove("display-none")
  console.log(data)
  showChart(data)
})
