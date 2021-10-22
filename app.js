/* =================================================
  Alert banner
==================================================== */

const alertBanner = document.getElementById('alert');
const alertBall = document.querySelector('.alert-ball');

alertBanner.innerHTML =
`
  <span><strong>Alert:</strong> You have unread messages</span>
  <span class="alertBannerClose">X</span>
`;

const alertBannerClose = document.querySelector('.alertBannerClose');

alertBannerClose.addEventListener('click', e => {
    alertBanner.style.display = "none";
    alertBall.style.display = "none";
});

/* =================================================
  Traffic line graph
==================================================== */

const traffic = document.getElementById('traffic');

let trafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(131, 119, 209, 0.3)',
    fill: true,
    tension: .25,
    opacity: .3,
    borderWidth: 1,
  }]
};

let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

let trafficChart = new Chart(traffic, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});

/* =================================================
  Daily traffic bar Chart
==================================================== */

const daily = document.getElementById('daily');

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};

const dailyOptions = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

const dailyTraffic = new Chart(daily, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions

});

/* =================================================
  Mobile users doughnut chart
==================================================== */

const mobile = document.getElementById('mobile');

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
    ]
  }]
};

const mobileOptions = {
  plugins: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        fontStyle: 'bold'
      }
    }
  }
};

let mobileChart = new Chart(mobile, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});

/* =================================================
  Messageing
==================================================== */

const user = document.getElementById("user-search");
const message = document.getElementById("message");
const send = document.getElementById("send");

send.addEventListener('click', e => {
  if (user.value === "" && message.value === "") {
    alert("Please enter recipient and message to send before sending.")
  } else if (user.value === "") {
    alert("Please enter recipient for the message before sending")
  } else if (message.value === "") {
    alert("Please enter a message for the recipient before sending")
  } else {
    alert(`Message sent to: ${user.value}!`);
  }
});
