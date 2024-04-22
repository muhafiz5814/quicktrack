import Chart from 'chart.js/auto'

/** Creates a new Chart instance and creates a chart using chart.js library.
 * 
 * @param {Array} Array of objects, containing value for x and y axis.
 */
export default function(data) {
  
  new Chart(
    document.getElementById('myChart'),
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
