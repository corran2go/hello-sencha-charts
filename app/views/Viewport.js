HelloCharts.views.Viewport = Ext.extend(Ext.Panel, {
  fullscreen: true,
  layout: 'card',
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
