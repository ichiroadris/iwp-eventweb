var sale = document.getElementById('sales').getContext('2d');
var chart = new Chart(sale, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: [1, 5, 10, 15, 20, 25, 30],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 8, 5, 2, 7, 4, 6]
    }]
  },

  // Configuration options go here
  options: {
    responsive: false,
    legend: {
      display: false,

    }
  }
});

var acquire = document.getElementById('acquire').getContext('2d');
var chart = new Chart(acquire, {
  type: 'line',

  // The data for our dataset
  data: {
    labels: [1, 5, 10, 15, 20, 25, 30],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 20, 13, 14, 17, 9, 15]
    }]
  },

  // Configuration options go here
  options: {
    responsive: false,
    legend: {
      display: false,

    }
  }
})
