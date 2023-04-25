import articleData from '../data/full.json' assert { type: 'json' };
import labelData from '../data/labels.json' assert { type: 'json' };
import publisherCountData from '../data/full-publisher-counts.json' assert { type: 'json' };

var publisherMap = {
    'bbc': 'BBC',
    'dailymail': 'Daily Mail',
    'theguardian': 'The Guardian',
    'independent': 'The Independent',
    'metro': 'Metro',
    'mirror': 'The Mirror',
    'sky': 'Sky News',
    'sun': 'The Sun'
}

var colours = ['#F97979','#9381FF','#283D3B','#FFC759','#87B37A','#44FFD2','#5A0001','#F98948'];

var counter = 0;
while (labelData.publisher[counter] !== 'all') {
    counter += 1;
}
var columnLabels = [];
for(var i = 0; i < articleData.length; i++) {
    columnLabels.push(labelData.dominantMetricsWords[counter + i]);
}

var outputData = [];
for (var j = 0; j < publisherCountData.length; j++) {
    outputData.push({
    label: publisherMap[publisherCountData[j][0]],
    backgroundColor: colours[j],
    data: publisherCountData[j][1]
    });
}

const data = {
    labels: columnLabels,
    datasets: outputData
};

const config = {
    type: 'bar',
    data,
    options: {
        scales: {
            y: {
            beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Distribution of Publishers Per Cluster'
            }
        }
    }
};

new Chart(
    document.getElementById('publisherCount'),
    config
);