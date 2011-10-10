HelloCharts.stores.smartphones = new Ext.data.JsonStore({
  fields: [
    'quarter',
    'android',
    'ios',
    'symbian',
    'blackberry',
    'bada',
    'windowsphone',
    'windowsmobile'
  ],
  data: [
    {
      quarter: 'Q2/2010',
      android: 18,
      ios: 14,
      symbian: 44,
      blackberry: 18,
      bada: 0,
      windowsphone: 0,
      windowsmobile: 3
    },
    {
      quarter: 'Q3/2010',
      android: 25,
      ios: 18,
      symbian: 36,
      blackberry: 16,
      bada: 2,
      windowsphone: 0,
      windowsmobile: 3
    },
    {
      quarter: 'Q4/2010',
      android: 30,
      ios: 16,
      symbian: 32,
      blackberry: 14,
      bada: 3,
      windowsphone: 2,
      windowsmobile: 2
    },
    {
      quarter: 'Q1/2011',
      android: 35,
      ios: 18,
      symbian: 25,
      blackberry: 14,
      bada: 3,
      windowsphone: 2,
      windowsmobile: 2
    },
    {
      quarter: 'Q2/2011',
      android: 45,
      ios: 19,
      symbian: 16,
      blackberry: 12,
      bada: 5,
      windowsphone: 1,
      windowsmobile: 0.5
    },
    {
      quarter: 'Q4/2011*',
      android: 52,
      ios: 25,
      symbian: 4,
      blackberry: 8,
      bada: 7,
      windowsphone: 4,
      windowsmobile: 0
    }
  ]
});

HelloCharts.log('Smartphones store loaded');
