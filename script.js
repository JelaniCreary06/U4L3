import 'https://cdn.jsdelivr.net/npm/chart.js@4.3.0/dist/chart.umd.min.js'

async function wrapper() {
    let data = [], temp;
    (await fetch("ZonAnn.Ts+dSST.csv").then(async (response) => {
        (await response.text()).split("\n").slice(1).forEach((element) => {
          temp = element.split(",");
          data.push([temp[0], temp[1], temp[2], temp[3]]);
        })
    }))

    new Chart(document.getElementById("chart"), {
      type: "line",
      data: {
        labels: data.map((e) => e[0]),
        datasets: [{
          label: `Global Temperature`,
          data: data.map((e) => e[1]),
          borderColor: '#fc4903',
          yAxisID: 'y'
        },
        {
          label: `Northern Hemisphere`,
          data: data.map((e) => e[2]),
          borderColor: '#0d3370',
          yAxisID: 'y'
        },
        {
          label: `Southern Hemisphere`,
          data: data.map((e) => e[3]),
          borderColor: '#52046e',
          yAxisID: 'y'
        }]
      }, 
      options: {
        tooltips: {
          intersect: true
        }
      },
      scales: {
        y: {
          type: 'linear',
          display: false,
          position: 'left',
        },
        y1: {
          type: 'linear',
          display: false,
          position: 'left',
        }
      }
    })
  }

  wrapper()
  
  localStorage.setItem("t", "p")