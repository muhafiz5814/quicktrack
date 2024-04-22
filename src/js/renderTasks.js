/** Renders the existing tasks as well as the newly added tasks to the DOM. */
export default function () {

  // Before rendering the tasks, first remove the existing tasks so that they do not repeat.
  document.querySelectorAll('.task').forEach(e => e.remove());

  const tasksDiv = document.getElementById("tasks")

  // Get the existing tasks from localStorage.
  let tasks = JSON.parse(localStorage.getItem("tasks"))

  // If the array is not null, then render the tasks.
  if(tasks) {
    for(let i = 0; i < tasks.length; i++){
      
      let task = tasks[i]

      const taskDiv = document.createElement("div")
      taskDiv.setAttribute("class", "task")
      taskDiv.setAttribute("id", task.timeStamp)

      const taskTitleDiv = document.createElement("div")
      taskTitleDiv.setAttribute("class", "task-title")

      const fromToTillDiv = document.createElement("div")
      fromToTillDiv.setAttribute("class", "from-to-till")
      
      const taskDateDiv = document.createElement("div")
      taskDateDiv.setAttribute("class", "task-date")

      const totalDurationeDiv = document.createElement("div")
      totalDurationeDiv.setAttribute("class", "total-duration")

      const removeBtnDiv = document.createElement("div")
      removeBtnDiv.setAttribute("class", "remove-btn-box")
      const removeBtn = document.createElement("button")
      removeBtn.setAttribute("class", "remove-btn")

      // This event lister removes the task from the DOM and from the localStorage when remove button is clicked.
      removeBtn.addEventListener("click", () => {
        document.getElementById(task.timeStamp).remove()

        // Remove the array element using filter method.
        let tasks = JSON.parse(localStorage.getItem("tasks"))
        let updatedTasks = tasks.filter((t) => t.timeStamp != task.timeStamp)

        localStorage.setItem("tasks", JSON.stringify(updatedTasks))
      })
      removeBtn.innerText = "x"
      
      removeBtnDiv.append(removeBtn)
      
      // Set the values to the newly created nodes/elements.
      taskTitleDiv.innerText = task.title
      fromToTillDiv.innerText = task.fromToTill
      taskDateDiv.innerText = task.taskDate
      totalDurationeDiv.innerText = task.duration

      // Append all elements to a single task div element.
      taskDiv.append(taskTitleDiv, fromToTillDiv, taskDateDiv, totalDurationeDiv, removeBtnDiv)

      // Appent to the tasks div
      tasksDiv.append(taskDiv)
    }
  } else {
    // If the array is empty, show the message.
    tasksDiv.innerText = "Nothing to show"
  }
}