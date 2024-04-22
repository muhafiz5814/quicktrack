import Chart from 'chart.js/auto'

/** Creates a new Chart instance and creates a chart using chart.js library.
 * 
 * @param {Array} Array of objects, containing value for x and y axis.
 */
export default function(data) {

  // Remove the existing canvas element
  const chartEl = document.getElementById("myChart")
  chartEl.remove()

  // Create a new canvas element to chartDiv and use it to show chart.
  const chartDivEl = document.getElementById("chart-div")
  const canvasEl = document.createElement("canvas")
  canvasEl.setAttribute("id", "myChart")
  chartDivEl.append(canvasEl)
  
  new Chart(
    canvasEl,
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.title),
        datasets: [
          {
            label: 'Duration of Task(in minutes)',
            data: data.map(row => row.totalMinutes)
          }
        ]
      }
    }
  );
};
