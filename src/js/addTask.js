import renderTasks from "./renderTasks"

/**
 * Adds the task to the localStorage and also calls the @function renderTasks() at the end.
 * 
 * @param {String} title holds the task title.
 * @param {Date Object} startTime holds the task tracking start time.
 * @param {Date Object} endTime holds the task tracking end time.
 * @param {Date Object} taskDate holds the task tracking start date.
 * @param {String} duration holds the task duration.
 * @param {Number} timeStamp holds the milliseconds as unique value for each task.
 */
export default function (title, startTime, endTime, taskDate, duration, timeStamp) {

  /** Ternary operator is used to correctly formate the string.
   * 
   * If the hour or the minute value is less than 10 than we need to add a "0" before that number to correctly format.
   */

  let startTime1 = `${startTime.getHours() < 10 ? "0" + startTime.getHours() : startTime.getHours()}:${startTime.getMinutes() < 10 ? "0" + startTime.getMinutes() : startTime.getMinutes()}`

  let endTime1 = `${endTime.getHours() < 10 ? "0" + endTime.getHours() : endTime.getHours()}:${endTime.getMinutes() < 10 ? "0" + endTime.getMinutes() : endTime.getMinutes()}`
  
  // With all the value ready, create the taskObject to push in localStorage.
  const taskObject = {
    title,
    fromToTill: `${startTime1} - ${endTime1}`,
    taskDate: `${taskDate.toDateString()}`,
    duration,
    timeStamp
  }
  
  /** 
   * Before pushing the taskObject
   * 
   * First check if localStorage has existing values or not
   * 
   * If not then we need to first create an array, then push the taskObject to that array and then adding the array to localStorage.
   * 
   * If localStorage has the existing values then simply first get values from the localStorage then add the taskObject to existing values and then again add the updated list to localStorage.
   * 
   * localStorge only store value in the form of "String". That is why we are first Parsing the values to array before updating directly and then again converting that to string before adding to localStorage.
   */
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