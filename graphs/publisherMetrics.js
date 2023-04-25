import publisherMetrics from '../data/full-publisher-metrics.json' assert { type: 'json' };

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

for (var i = 0; i < publisherMetrics.length; i++) {
  var sentiment = {
    y: publisherMetrics[i]['sentiment'],
    name: 'sentiment',
    marker: {color: colours[0]},
    type: 'box',
    boxpoints: false
  };

  var quoteBased = {
    y: publisherMetrics[i]['quoteBased'],
    name: 'quoteBased',
    marker: {color: colours[1]},
    type: 'box',
    boxpoints: false
  };

  var sensationalized = {
    y: publisherMetrics[i]['sensationalized'],
    name: 'sensationalized',
    marker: {color: colours[2]},
    type: 'box',
    boxpoints: false
  };

  var spin = {
    y: publisherMetrics[i]['spin'],
    name: 'spin',
    marker: {color: colours[3]},
    type: 'box',
    boxpoints: false
  };

  var mudslinging = {
    y: publisherMetrics[i]['mudslinging'],
    name: 'mudslinging',
    marker: {color: colours[4]},
    type: 'box',
    boxpoints: false
  };

  var informal = {
    y: publisherMetrics[i]['informal'],
    name: 'informal',
    marker: {color: colours[5]},
    type: 'box',
    boxpoints: false
  };


  var data = [sentiment, quoteBased, sensationalized, spin, mudslinging, informal];

  var layout = {
    title: 'Publisher Metric Distribution: ' + publisherMap[publisherMetrics[i]['publisher']],
    yaxis: {
      title: 'Score',
      zeroline: false
    },
    boxmode: 'group',
    showlegend: false
  };

  Plotly.newPlot('publisherMetrics'+publisherMetrics[i]['publisher'], data, layout);
}