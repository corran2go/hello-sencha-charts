HelloCharts.views.browserChart = new Ext.chart.Chart({
  store: HelloCharts.stores.browsers,
  animate: false,
  shadow: true,
  legend: {
    position: 'top'
  },
  interactions: [
    {
      type: 'iteminfo',
      listeners: {
        show: function(interaction, item, panel) {
          var storeItem = item.storeItem;
          panel.dockedItems.items[0].setTitle("Details");
          panel.update([
            '<ul><li><b>Monat: </b>' + storeItem.get('month') + '</li>',
            '<li><b>Marktanteil: </b>' + item.value[1]+ '%</li></ul>'
          ].join(''));
        }
      }
    }
  ],
  axes: [
    {
      type: 'Numeric',
      position: 'left',
      fields: [
        'android',
        'ios',
        'symbian',
        'blackberry',
        'other'
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
      title: 'Marktanteil Mobile Internetnutzung in %'
    },
    {
      type: 'Category',
      position: 'bottom',
      fields: [ 'month' ],
      label: {
        font: '16px Helvetica, sans-serif'
      },
      title: 'Monat'
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
      yField: 'blackberry',
      title: 'Blackberry'
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
      yField: 'other',
      title: 'Andere*'
    }
  ]
});

HelloCharts.views.showBrowserFooter = function() {
  HelloCharts.views.statusToolbar.getComponent('status').update('<span style="font-weight: bold; font-size: 70%; color: white;">Quelle: StatCounter Mobile OS Stats DE | http://gs.statcounter.com/<br/>*) Andere: Unbekannt, Playstation, Sony Ericsson, Samsung</span>');
};

HelloCharts.views.browserChart.on({
  'redraw': function(chart) {
    HelloCharts.log('chart redraw');
    HelloCharts.views.showBrowserFooter();
  },
  'refresh': function(chart) {
    HelloCharts.log('chart refresh');
  }
});

HelloCharts.views.browserPanel = new Ext.chart.Panel({
  title: 'Marktanteil Mobile Internetnutzung in %',
  fullscreen: true,
  dockedItems: [
    {
      xtype: 'button',
      text: 'Smartphone Verkäufe',
      handler: HelloCharts.onSmartphoneTap
    }
  ],
  items: [
    HelloCharts.views.browserChart
  ]
});

HelloCharts.log('Browser view loaded');
