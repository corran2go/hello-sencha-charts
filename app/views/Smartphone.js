HelloCharts.log('Smartphone view loaded');

HelloCharts.views.smartphone = new Ext.chart.Panel({
  title: 'Market Share Smartphone Sales in %',
  fullscreen: true,
  dockedItems: [
    {
      xtype: 'button',
      text: 'Test',
      handler: HelloCharts.onTestTap
    }
  ],
  items: [
    {
      // cls: 'line1',
      theme: 'Demo',
      store: HelloCharts.stores.smartphones,
      animate: false,
      shadow: true,
      legend: {
        position: 'top'
      },
      interactions: [
        'reset',
        {
          type: 'panzoom',
          axes: {
            left: {}
          }
        },
        {
          type: 'iteminfo',
          listeners: {
            show: function(interaction, item, panel) {
              var storeItem = item.storeItem;
              panel.dockedItems.items[0].setTitle("Details");
              panel.update([
                '<ul><li><b>Zeitraum: </b>' + storeItem.get('quarter') + '</li>',
                '<li><b>Marktanteil: </b>' + item.value[1]+ '%</li></ul>'
              ].join(''));
            }
          }
        }
      ],
      axes: [
        {
          type: 'Numeric',
          minimum: 0,
          maximum: 100,
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
          title: 'Market Share Sales in %'
        },
        {
          type: 'Category',
          position: 'bottom',
          fields: [ 'quarter' ],
          title: 'Quarter of the Year'
        }
      ],
      series: [
        {
          type: 'line',
          highlight: {
            size: 7,
            radius: 7
          },
          smooth: true,
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
          smooth: true,
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
          smooth: true,
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
          smooth: true,
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
          smooth: true,
          axis: 'left',
          xField: 'quarter',
          yField: 'bada',
          title: 'bada'
        },
        {
          type: 'line',
          highlight: {
            size: 7,
            radius: 7
          },
          smooth: true,
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
          smooth: true,
          axis: 'left',
          xField: 'quarter',
          yField: 'windowsmobile',
          title: 'Windows Mobile'
        }
      ]
    }
  ]
});
