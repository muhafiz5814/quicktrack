import addTask from "./addTask"

/** Class to create the instances of tasks which are currently being tracked. */
class RunningTask {
  /**
   * Initializes different class properties.
   * 
   * @param {String} title holds the task title to be tracked
   * 
   * hours, minutes, seconds properties are needed to update the timer which is tracking the task.
   * 
   * timer property is to store the timer value and pass it further when ending the tracking.
   * 
   * startTime property is to store the time when the tracking was started
   * 
   * timeStamp property is to store a unique value for each task to identify later in arrays and DOM.
   */
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

  // Updates the timer string.
  updateTimer = () => {
    this.seconds += 1
    if(this.seconds >= 60){
      this.seconds = 0
      this.minutes += 1
    } if(this.minutes >= 60) {
      this.minutes = 0
      this.hours += 1
    }
  
    const updatedTimer = `${(this.hours < 10) ? "0" + this.hours : this.hours}:${(this.minutes < 10) ? "0" + this.minutes : this.minutes}:${(this.seconds < 10) ? "0" + this.seconds : this.seconds}`
    this.timer = updatedTimer
  }

  // Start tracking the task using setInterval method which will be executing every 1000ms(1s).
  startTimer () {
    // setInterval returns an interval interface which needs to be stopped or clear when we want to stop the setInterval.
    this.timerInterval = setInterval(this.updateTimer, 1000)
  }

  // Stop the setInterval using clearInterval() method
  stopTimer () {
    clearInterval(this.timerInterval)
  }

  // Renders the newly created runningTask element.
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

    /** This event listener stops the tracking and adds task to the localStorage.
     * 
     * Also removes the self element from the DOM.
     */
    stopBtn.addEventListener("click", () => {
      this.stopTimer()
      addTask(this.title, this.startTime, new Date(), this.startTime, this.timer, this.timeStamp)
      const self = document.getElementById(this.startTime)
      self.remove()
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