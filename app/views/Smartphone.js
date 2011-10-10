HelloCharts.views.smartphoneChart = new Ext.chart.Chart({
  // theme: 'MyTheme',
  store: HelloCharts.stores.smartphones,
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
            '<ul><li><b>Quartal: </b>' + storeItem.get('quarter') + '</li>',
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
        'bada',
        'windowsphone',
        'windowsmobile'
      ],
      minimum: 0,
      maximum: 60,
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
      title: 'Marktanteil Smartphone Verkäufe in %'
    },
    {
      type: 'Category',
      position: 'bottom',
      fields: [ 'quarter' ],
      label: {
        font: '16px Helvetica, sans-serif'
      },
      title: 'Quartal'
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
      xField: 'quarter',
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
      xField: 'quarter',
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
      xField: 'quarter',
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
      xField: 'quarter',
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
      xField: 'quarter',
      yField: 'bada',
      title: 'bada'
    },
    {
      highlight: {
        size: 7,
        radius: 7
      },
      smooth: false,
      type: 'line',
      axis: 'left',
      xField: 'quarter',
      yField: 'windowsphone',
      title: 'Phone 7'
    },
    {
      type: 'line',
      highlight: {
        size: 7,
        radius: 7
      },
      smooth: false,
      axis: 'left',
      xField: 'quarter',
      yField: 'windowsmobile',
      title: 'Windows Mobile'
    }
  ]
});

HelloCharts.views.showSmartphoneFooter = function() {
  HelloCharts.views.statusToolbar.getComponent('status').update('<span style="font-weight: bold; font-size: 70%; color: white;">Quelle: TomiAhonen Consulting August 2011 | Berechneter  Durchschnitt der Zahlen von: Gartner, IDC, Canalys und Strategy Analytics<br/>*) Prognose: TomiAhonen Consulting 7 Sept 2011</span>');
};

HelloCharts.views.smartphoneChart.on({
  'redraw': function(chart) {
    HelloCharts.log('chart redraw');
    HelloCharts.views.showSmartphoneFooter();
  },
  'refresh': function(chart) {
    HelloCharts.log('chart refresh');
  }
});

HelloCharts.views.smartphonePanel = new Ext.chart.Panel({
  title: 'Marktanteil Smartphone Verkäufe in %',
  fullscreen: true,
  dockedItems: [
    {
      xtype: 'button',
      text: 'Mobile Internetnutzung',
      handler: HelloCharts.onBrowserTap
    }
  ],
  items: [
    HelloCharts.views.smartphoneChart
  ]
});

HelloCharts.log('Smartphone view loaded');
