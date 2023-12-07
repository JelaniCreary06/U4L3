import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js'

let chart = new Chart(document.getElementById("myChart"), {
  type: "line",
  data: {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [{
      label: "Series 1",
      data: [1, 2, 3, 2, 1]
    },{
                label: "Series 2",
                data: [1, 2, 2.5, 2, 1]
              }]
  }
});



async function wrapper() {
    let csvData, temp, weatherData;
    (await fetch("ZonAnn.Ts+dSST.csv").then(async (response) => {
        csvData = (await response.text()).split("\n");
    }))

    console.log(csvData)
  }

  wrapper()