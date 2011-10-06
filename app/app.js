console.log('app loading ...');

HelloCharts = new Ext.Application({
  name: 'HelloCharts',
  launch: function() {
    HelloCharts.log('app launching ...');
    this.views.viewport = new this.views.Viewport({title: 'Hello Charts'});
  }
});

HelloCharts.log = function(msg) {
  var now = new Date();
  console.log('[' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + '.' + now.getMilliseconds() + '] - ' + msg);
};

HelloCharts.onTestTap = function() {
  HelloCharts.log('onTestTap');
};
