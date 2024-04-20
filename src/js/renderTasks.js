document.querySelectorAll('.task').forEach(e => e.remove());

const tasksDiv = document.getElementById("tasks")

export default function () {

  let tasks = JSON.parse(localStorage.getItem("tasks"))
  console.log(tasks)

  if(tasks) {
    for(let i = 0; i < tasks.length; i++){
      let task = tasks[i]
      console.log(task)
      const taskDiv = document.createElement("div")
      taskDiv.setAttribute("class", "task")

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
      removeBtn.innerText = "X"
      removeBtnDiv.append(removeBtn)

      taskTitleDiv.innerText = task.title
      fromToTillDiv.innerText = task.fromToTill
      taskDateDiv.innerText = task.taskDate
      totalDurationeDiv.innerText = task.duration

      taskDiv.append(taskTitleDiv, fromToTillDiv, taskDateDiv, totalDurationeDiv, removeBtnDiv)

      tasksDiv.append(taskDiv)
    }
  } else {
    tasksDiv.innerText = "Nothing to show"
  }
}