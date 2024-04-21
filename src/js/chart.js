import Chart from 'chart.js/auto'

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
