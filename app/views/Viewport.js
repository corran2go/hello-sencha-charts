HelloCharts.views.statusToolbar = new Ext.Toolbar({
  dock: 'bottom',
  layout: {
    pack: 'left'
  },
  items: [
    {
      id: 'status',
      xtype: 'panel',
      html: 'Source '
    }
  ]
});

HelloCharts.views.Viewport = Ext.extend(Ext.Panel, {
  fullscreen: true,
  layout: 'card',
  dockedItems: [
    HelloCharts.views.statusToolbar
  ],
  items: [
    HelloCharts.views.smartphonePanel,
    HelloCharts.views.browserPanel
  ],
  layoutOrientation: function(orientation, w, h) {
    if (orientation == 'portrait') {
      // console.log('portrait');
    } else {
      // console.log('landscape');
    }
    HelloCharts.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);
  }
});

HelloCharts.log('Viewport loaded');
