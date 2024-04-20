class Task {
  constructor(title, startTime, duration) {
    this.title = title
    this.startTime = startTime
    this.endTime = new Date()
    this.duration = duration
    this.render()
  }

  render() {
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

    taskTitleDiv.innerText = this.title
    fromToTillDiv.innerText = `${this.startTime.getHours()}:${this.startTime.getMinutes()} - ${this.endTime.getHours()}:${this.endTime.getMinutes()}`
    taskDateDiv.innerText = `${this.startTime.toDateString()}`
    totalDurationeDiv.innerText = `${this.duration}`

    taskDiv.append(taskTitleDiv, fromToTillDiv, taskDateDiv, totalDurationeDiv)

    const tasksDiv = document.getElementById("tasks")
    tasksDiv.append(taskDiv)
  }
}

export default Task