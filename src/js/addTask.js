import renderTasks from "./renderTasks"

export default function (title, startTime, endTime, taskDate, duration, timeStamp) {

  let startTime1 = `${startTime.getHours() < 10 ? "0" + startTime.getHours() : startTime.getHours()}:${startTime.getMinutes() < 10 ? "0" + startTime.getMinutes() : startTime.getMinutes()}`

  let endTime1 = `${endTime.getHours() < 10 ? "0" + endTime.getHours() : endTime.getHours()}:${endTime.getMinutes() < 10 ? "0" + endTime.getMinutes() : endTime.getMinutes()}`
  
  const taskObject = {
    title,
    fromToTill: `${startTime1} - ${endTime1}`,
    taskDate: `${taskDate.toDateString()}`,
    duration,
    timeStamp
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