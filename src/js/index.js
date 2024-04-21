/** * * * * *
 * Keeping this file unmodified as it is the base logic of the application and will help in building the remaining part of the application.
 * 
 * It will be modified at the end 
*/
import RunningTask from "./runningTask"
import renderTasks from "./renderTasks"

const inputEl = document.getElementById("title-input")
const startBtnEl = document.getElementById("start-btn")

let runningTasksEl = document.getElementById("running-tasks")

renderTasks()

startBtnEl.addEventListener("click", () => {
  const task1 = new RunningTask(inputEl.value)
  runningTasksEl.prepend(task1.render())
  inputEl.value = ""
})
