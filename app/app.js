HelloCharts = new Ext.Application({
  name: 'HelloCharts',
  launch: function() {
    HelloCharts.log('app launching ...');
    this.views.viewport = new this.views.Viewport({title: 'Hello Charts'});
  }
});

HelloCharts.log = function(msg) {
  var now = new Date();
  var hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
  var minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
  var seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
  var milliseconds = now.getMilliseconds() < 10 ? '00' + now.getMilliseconds() : (now.getMilliseconds() < 100 ? '0' + now.getMilliseconds() : now.getMilliseconds());
  console.log('[' + hours + ':' + minutes + ':' + seconds + '.' + milliseconds + '] - ' + msg);
};

HelloCharts.onTestTap = function() {
  HelloCharts.log('onTestTap');
};

HelloCharts.log('app loaded');
