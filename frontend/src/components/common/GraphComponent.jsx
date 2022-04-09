import Chart from 'chart.js/auto';

export const DisplayGraphCard = ({id,data,brColor,bgColor}) => {
  const ctx = document.getElementById(id).getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data : {
      labels:'myChart',
      datasets: [{
        label: id,
        data: data,
        fill: true,
        borderColor: brColor,
        backgroundColor: bgColor,
        tension: 0.5
      }]
    },
    options: {
      scales: {
        x: {
          display:false,
          title:{display:false}
        },

        y: {
          display:false,
          title:{display:false}
        },
      },

      plugins:{
        legend:{display:false}
      }
    },

    responsive:true,
    maintainAspectRatio:false
  });

  return myChart;
};


export const GeneralGraphComponent = ({id,type,dataset,xAxiselabel}) => {
  const ctx = document.getElementById(id).getContext("2d");
  const myChart = new Chart(ctx, {
    type: type ? type : "line",
    data : {
      labels:xAxiselabel,
      datasets: dataset
    },
    options: {
      scales: {
        // x: {
        //   display:false,
        //   title:{display:false}
        // },

        // y: {
        //   display:false,
        //   title:{display:false}
        // },
      },

      plugins:{
        legend:{position:'bottom'}
      }
    },

    responsive:true,
    maintainAspectRatio:false
  });

  return myChart;
};
