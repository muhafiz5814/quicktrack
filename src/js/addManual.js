import addTask from "./addTask";

/** 
 * Adds the new task to the list manually
 *
 * First it gets the values from the input elements of manual tracking initiater div.
 *
 * Then it converts the string values to the date objects as @function addTask() accecpts date objects as parameters.
 *
 * Then call the @function addTask() to manually add the task to tasks list in localStorage.
 */
export default function () {
  const titleElManual = document.getElementById("title-input-manual");
  const startTimeElManual = document.getElementById("start-time-input-manual");
  const endTimeElManual = document.getElementById("end-time-input-manual");
  const startDateElManual = document.getElementById("start-date-input-manual");
  const addBtnEl = document.getElementById("add-btn");

  /** 
   * Calculates and returns the total duration of task from the time, entered by the user.
   *
   * @param {String} start holds the value of task start time.
   *
   * @param {String} end holds the value of task end time.
   */
  const getDuration = (start, end) => {
    let diff = end - start;

    // Difference of the date objects is in milliseconds, so we need to convert that to hours, minutes and seconds respectively.
    let hours = Math.floor(Math.abs(diff / 3600000));
    diff = diff % 3600000;
    let minutes = Math.floor(Math.abs(diff / 60000));
    diff = diff % 60000;
    let seconds = Math.floor(Math.abs(diff / 1000));

    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  /** 
   * Creates and returns a new Date object from the given date string.
   *
   * @param {String} date holds the date as string.
   */
  const getDateObj = (date) => {
    return new Date(date);
  };

  /** 
   * Creates and returns a new Date onject from the time given in string.
   * 
   * @param {String} time holds the time as string in HH:MM format.
   */
  const getTimeObj = (time) => {
    // Creating a date object of Epoch time as we just need the time from this date object for future use. So the date does not matter in this case.
    return new Date(`01/01/1970 ${time}`);
  };

  // Set the corresponding values to the variables
  const title = titleElManual.value;
  const startTime = getTimeObj(startTimeElManual.value);
  const endTime = getTimeObj(endTimeElManual.value);
  const startDate = getDateObj(startDateElManual.value);
  const duration = getDuration(startTime, endTime);

  // Call the function addTask() and pass all the parameters needed.
  addTask(title, startTime, endTime, startDate, duration, Date.now());

  // Clear the value of input fields from DOM after adding those to the tasks array using addTask().
  titleElManual.value = "";
  startTimeElManual.value = "";
  endTimeElManual.value = "";
  startDateElManual.value = "";
}
