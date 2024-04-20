import renderTasks from "./renderTasks"

export default function (title, startTime, endTime, duration) {
  const taskObject = {
    title,
    fromToTill: `${startTime.getHours()}:${startTime.getMinutes()} - ${endTime.getHours()}:${endTime.getMinutes()}`,
    taskDate: `${startTime.toDateString()}`,
    duration,
  }
  
  if(!JSON.parse(localStorage.getItem("tasks"))){
    let tasks = []
    tasks.push(taskObject)
    localStorage.setItem("tasks", JSON.stringify(tasks))
  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    tasks.push(taskObject)
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  renderTasks()
}