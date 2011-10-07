HelloCharts.views.browserChart = new Ext.chart.Chart({
  store: HelloCharts.stores.browsers,
  animate: false,
  shadow: true,
  legend: {
    position: 'top'
  },
  axes: [
    {
      type: 'Numeric',
      position: 'left',
      fields: [
        'android',
        'ios',
        'symbian'/*,
        'blackberry'*/
      ],
      minimum: 0,
      maximum: 80,
      minorTickSteps: 1,
      majorTickSteps: 10,
      grid: {
        odd: {
          opacity: 1,
          fill: '#ddd',
          stroke: '#bbb',
          'stroke-width': 1
        }
      },
      label: {
        font: '16px Helvetica, sans-serif'
      },
      title: 'Market Share Mobile Browsing in %'
    },
    {
      type: 'Category',
      position: 'bottom',
      fields: [ 'month' ],
      label: {
        font: '14px Helvetica, sans-serif'
      },
      title: 'Month of the Year'
    }
  ],
  series: [
    {
      type: 'line',
      highlight: {
        size: 7,
        radius: 7
      },
      smooth: false,
      axis: 'left',
      xField: 'month',
      yField: 'ios',
      title: 'iOS'
    },
    {
      type: 'line',
      highlight: {
        size: 7,
        radius: 7
      },
      smooth: false,
      axis: 'left',
      xField: 'month',
      yField: 'android',
      title: 'Android'
    },
    {
      type: 'line',
      highlight: {
        size: 7,
        radius: 7
      },
      smooth: false,
      axis: 'left',
      xField: 'month',
      yField: 'symbian',
      title: 'Symbian'
    }
  ]
});

HelloCharts.views.browserChart.on({
  'redraw': function(chart) {
    HelloCharts.log('chart redraw');
  },
  'refresh': function(chart) {
    HelloCharts.log('chart refresh');
  }
});

HelloCharts.views.browserPanel = new Ext.chart.Panel({
  title: 'Market Share Mobile Browsing in %',
  fullscreen: true,
  dockedItems: [
    {
      xtype: 'button',
      text: 'Smartphone Sales',
      handler: HelloCharts.onSmartphoneTap
    }
  ],
  items: [
    HelloCharts.views.browserChart
  ]
});

HelloCharts.log('Browser view loaded');
