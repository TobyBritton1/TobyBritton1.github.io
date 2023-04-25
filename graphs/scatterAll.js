import articleData from '../data/full.json' assert { type: 'json' };
import labelData from '../data/labels.json' assert { type: 'json' };

var colours = ['#F97979','#9381FF','#283D3B','#FFC759','#87B37A','#44FFD2','#5A0001','#F98948'];

var counter = 0;
while (labelData.publisher[counter] !== 'all') {
    counter += 1;
}

var outputData = [];
for (var i = 0; i < articleData.length; i++) {
    outputData.push({
        label: labelData.dominantMetricsWords[counter + i].join(', '),
        fill: false,
        backgroundColor: colours[i],
        data: articleData[i]
    });
}

const data = {
    datasets: outputData
};

const config = {
    type: 'scatter',
    data,
    options: {
        animation: false,
        responsive: true,
        radius: 2,
        plugins: {
            title: {
                display: true,
                text: 'Scatter Chart With Clustering of All Articles'
            }
        }
    }
};

new Chart(
    document.getElementById('scatterAll'),
    config
);