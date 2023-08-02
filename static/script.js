var ctx1 = document.getElementById('closeChart').getContext('2d');
var ctx2 = document.getElementById('cumulativeChart').getContext('2d');
var ctx3 = document.getElementById('marketChart').getContext('2d');
var ctx4 = document.getElementById('movingAvgChart').getContext('2d');
var ctx5 = document.getElementById('volumeChart').getContext('2d');

// var dates = stockData["AAPL"].map(data => data.date);
// var closeValues = stockData["AAPL"].map(data => data.close);

// Create an array to store all datasets
var close_datasets = [];
var cumulative_datasets = [];
var market_change_datasets = [];
var moving_average_datasets = [];
var volume_datasets = [];

// Loop through each company's data in stockData
for (var company in closeData) {
    var companyData = closeData[company];
    var dates = companyData.map(data => data.date);
    var closeValues = companyData.map(data => data.close);

    // Create a dataset for the current company
    var dataset = {
        label: company + ' Stock Price',
        data: closeValues,
        borderColor: getRandomColor(), // You can define this function to get random colors
        borderWidth: 1,
        fill: false,
        pointRadius: 0,
    };

    // Add the dataset to the datasets array
    close_datasets.push(dataset);
}

for (var company in changeData) {
    var companyData = changeData[company];
    var dates = companyData.map(data => data.date);
    var changeValues = companyData.map(data => data.change);

    // Create a dataset for the current company
    var dataset = {
        label: company + ' Stock Price',
        data: changeValues,
        borderColor: getRandomColor(), // You can define this function to get random colors
        borderWidth: 1,
        fill: false,
        pointRadius: 0,
    };

    // Add the dataset to the datasets array
    cumulative_datasets.push(dataset);
}

for (var company in marketCapData) {
    var companyData = marketCapData[company];
    var dates = companyData.map(data => data.date);
    var marketCapValues = companyData.map(data => data.MarketCap);

    // Create a dataset for the current company
    var dataset = {
        label: company + ' Stock Price',
        data: marketCapValues,
        borderColor: getRandomColor(), // You can define this function to get random colors
        borderWidth: 1,
        fill: false,
        pointRadius: 0,
    };

    // Add the dataset to the datasets array
    market_change_datasets.push(dataset);
}

for (var company in movingAverageData) {
    var companyData = movingAverageData[company];
    var dates = companyData.map(data => data.date);
    var avgValues = companyData.map(data => data.moving_average);

    // Create a dataset for the current company
    var dataset = {
        label: company + ' Stock Price',
        data: avgValues,
        borderColor: getRandomColor(), // You can define this function to get random colors
        borderWidth: 1,
        fill: false,
        pointRadius: 0,
    };

    // Add the dataset to the datasets array
    moving_average_datasets.push(dataset);
}

for (var company in volumeData) {
    var companyData = volumeData[company];
    var dates = companyData.map(data => data.date);
    var volumeValues = companyData.map(data => data.volume);

    // Create a dataset for the current company
    var dataset = {
        label: company + ' Stock Price',
        data: volumeValues,
        borderColor: getRandomColor(), // You can define this function to get random colors
        borderWidth: 1,
        fill: false,
        pointRadius: 0,
    };

    // Add the dataset to the datasets array
    volume_datasets.push(dataset);
}


// Create the line chart
var closeChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: dates,
        datasets: close_datasets,
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month', // Display only year and month on the x-axis
                    tooltipFormat: 'yyyy-MM', // Format for the tooltip
                    displayFormats: {
                        month: 'yyyy-MM', // Format for the label
                    },
                },
            },
            y: {
                beginAtZero: false
            }
        }
    }
});

var cumulativeChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: dates,
        datasets: cumulative_datasets,
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month', // Display only year and month on the x-axis
                    tooltipFormat: 'yyyy-MM', // Format for the tooltip
                    displayFormats: {
                        month: 'yyyy-MM', // Format for the label
                    },
                },
            },
            y: {
                beginAtZero: false
            }
        }
    }
});

var marketChart = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: dates,
        datasets: market_change_datasets,
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month', // Display only year and month on the x-axis
                    tooltipFormat: 'yyyy-MM', // Format for the tooltip
                    displayFormats: {
                        month: 'yyyy-MM', // Format for the label
                    },
                },
            },
            y: {
                beginAtZero: false
            }
        }
    }
});

var movingAvgChart = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: dates,
        datasets: moving_average_datasets,
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month', // Display only year and month on the x-axis
                    tooltipFormat: 'yyyy-MM', // Format for the tooltip
                    displayFormats: {
                        month: 'yyyy-MM', // Format for the label
                    },
                },
            },
            y: {
                beginAtZero: false
            }
        }
    }
});

var volumeChart = new Chart(ctx5, {
    type: 'line',
    data: {
        labels: dates,
        datasets: volume_datasets,
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month', // Display only year and month on the x-axis
                    tooltipFormat: 'yyyy-MM', // Format for the tooltip
                    displayFormats: {
                        month: 'yyyy-MM', // Format for the label
                    },
                },
            },
            y: {
                beginAtZero: false
            }
        }
    }
});
// Function to get random colors for datasets
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}