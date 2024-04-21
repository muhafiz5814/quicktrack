// import Task from "./Task"
import addTask from "./addTask"
import renderTasks from "./renderTasks"

class RunningTask {
  constructor(title) {
    this.title = title
    this.timer = "00:00:00"
    this.hours = 0
    this.minutes = 0
    this.seconds = 0
    this.startTime = new Date()
    this.timeStamp = Date.now()
    this.startTimer()
  }

  updateTimer = () => {
    this.seconds += 1
    if(this.seconds >= 60){
      this.seconds = 0
      this.minutes += 1
    } if(this.minutes >= 60) {
      this.minutes = 0
      this.hours += 1
    }
    console.log(this.seconds)
    console.log(this.minutes)
    console.log(this.hours)
  
    const updatedTimer = `${(this.hours < 10) ? "0" + this.hours : this.hours}:${(this.minutes < 10) ? "0" + this.minutes : this.minutes}:${(this.seconds < 10) ? "0" + this.seconds : this.seconds}`
    console.log(updatedTimer)
    this.timer = updatedTimer
    // date = new Date().now()
    // console.log(Date.now() + "")
  }

  startTimer () {
    this.timerInterval = setInterval(this.updateTimer, 1000)
  }

  stopTimer () {
    clearInterval(this.timerInterval)
  }

  render() {
    const runningTaskContainer = document.createElement("div")
    runningTaskContainer.setAttribute("class", "running-task")
    runningTaskContainer.setAttribute("id", this.startTime)

    const contentDiv = document.createElement("div")
    contentDiv.setAttribute("class", "content-box")

    const titleDiv = document.createElement("div")
    titleDiv.setAttribute("class", "running-task-title")

    const timerDiv = document.createElement("div")
    timerDiv.setAttribute("class", "timer")

    const stopBtnDiv = document.createElement("div")
    stopBtnDiv.setAttribute("class", "stop-btn-div")
    
    const stopBtn = document.createElement("button")
    stopBtn.setAttribute("class", "stop-btn btn")
    stopBtn.innerText = "Stop"

    stopBtn.addEventListener("click", () => {
      this.stopTimer()
      addTask(this.title, this.startTime, new Date(), this.startTime, this.timer, this.timeStamp)
      const self = document.getElementById(this.startTime)
      self.remove()
        console.log(this.timer)
    })
    stopBtnDiv.append(stopBtn)

    titleDiv.innerText = this.title
    timerDiv.innerText = `Tracking...`
    contentDiv.append(titleDiv, timerDiv)
    runningTaskContainer.append(contentDiv, stopBtnDiv)

    return runningTaskContainer
  }
}

export default RunningTask