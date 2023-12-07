import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js'

async function wrapper() {
    let data = [], temp;
    (await fetch("ZonAnn.Ts+dSST.csv").then(async (response) => {
        (await response.text()).split("\n").slice(1).forEach((element) => {
          temp = element.split(",");
          data.push([temp[0], temp[1]]);
        })

        const chart = new Chart(document.getElementById("chart"), {
          type: "line",
          data: {
            labels: data.map((e) => e[0]),
            datasets: [{
              label: `Yearly Temperature ${data[0][0]} - 2022`,
              data: data.map((e) => e[1]),
              backgroundColor: '#fc4903'
            }]
          }
        })

        
    }))
  }

  wrapper()
  
  localStorage.setItem("t", "p")