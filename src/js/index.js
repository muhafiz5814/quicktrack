/** Import the required functions and classes */
import RunningTask from "./runningTask"
import renderTasks from "./renderTasks"
import addManual from "./addManual"
import showChart from "./chart"

/** Import the required HTML DOM elements to manuipulate the DOM. */
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

/** Before going forward, render the tasks present in localStorage. */
renderTasks()

/** This event listener hides the manual tracking initiater and displays the auto tracking initiater.
 * 
 * It also changes the style of button to show which initiater is currently displayed.
 */
autoBtnEl.addEventListener("click", () => {
  trackingInitiaterEl.removeAttribute("style")
  trackingInitiaterManualEl.setAttribute("style", "display: none;")
  manualBtnEl.classList.remove("active")
  autoBtnEl.classList.add("active")
})

/** This event listener hides the auto tracking initiater and displays the manual tracking initiater.
 * 
 * It also changes the style of button to show which initiater is currently displayed.
 */
manualBtnEl.addEventListener("click", () => {
  trackingInitiaterManualEl.removeAttribute("style")
  trackingInitiaterEl.setAttribute("style", "display: none;")
  autoBtnEl.classList.remove("active")
  manualBtnEl.classList.add("active")
})

/** This event listener initiates a new tracking from auto tracking initiater. */
startBtnEl.addEventListener("click", () => {
  // Get the value from inputEl and create a new RunningTask class object.
  const task1 = new RunningTask(inputEl.value)
  // render the running task element using render(). (a RunningTask class method)
  runningTasksEl.prepend(task1.render())
  inputEl.value = ""
})

/** This event listener adds a new task manually to the completed task list.
 * 
 * Internally calls @function addManual to add task.
 */
addBtnEl.addEventListener("click", () => {
  addManual()
})

/** This event listener removes the chart screen and displays the main page of site.
 * 
 * It's done by adding the @class display-none to the chart Div and removint the style attribute of main page which holds the property display set to none.
 * 
 */
trackerBtnEl.addEventListener("click", () => {
  chartDivEl.classList.add("display-none")
  mainPageEl.removeAttribute("style")
  analyticsBtnEl.classList.remove("active1")
  trackerBtnEl.classList.add("active1")
})

/** This event listener show the chart screen and hides the main page of site.
 * 
 * First it calculates the data to be sent to @function showChart() to create chart and display.
 * 
 * Then it swaps the display from main page to chart.
 * 
 * Here we use setAttribute, because mainPageEl's styling has been done using id selector, thus a class selector from external sheet can not replace it.
 * 
 * So we use internal styling to override that.
 * 
 */
analyticsBtnEl.addEventListener("click", () => {
  // Get the tasks list from localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks"))
  // Create the data to be sent to function showChart().
  let data = tasks.map((task) => {
    let title = task.title
    
    // Convert the duration from string to int.
    let duration = task.duration
    let durationArray = duration.split(`:`)
    let hours = parseInt(durationArray[0])
    let minutes = parseInt(durationArray[1])
    let totalMinutes = hours*60 + minutes

    return {title, totalMinutes}
  })

  // Change styling
  mainPageEl.setAttribute("style", `display: none;`)
  chartDivEl.classList.remove("display-none")
  trackerBtnEl.classList.remove("active1")
  analyticsBtnEl.classList.add("active1")

  // Call the showChart() function and pass the data
  showChart(data)
})
