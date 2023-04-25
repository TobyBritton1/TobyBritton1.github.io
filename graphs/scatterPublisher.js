import publisherData from '../data/full-publishers.json' assert { type: 'json' };
import labelData from '../data/labels.json' assert { type: 'json' };

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

for (var j = 0; j < publisherData.length; j++) {
    var counter = 0;
    while (labelData.publisher[counter] !== publisherData[j][0]) {
        counter += 1;
    }

    var outputData = [];
    for (var i = 0; i < publisherData[j][1].length; i++) {
        outputData.push({
            label: labelData.dominantMetricsWords[counter + i].join(', '),
            fill: false,
            backgroundColor: colours[i],
            data: publisherData[j][1][i]
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
                    text: 'Scatter Chart With Clustering of Publisher Articles: ' + publisherMap[publisherData[j][0]]
                }
            }
        }
    };

    new Chart(
        document.getElementById('scatterPublisher'+publisherData[j][0]),
        config
    );
}