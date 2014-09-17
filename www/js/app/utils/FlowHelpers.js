define(['moment'], function() {

  var defaultChartConfig = {
    labels: [],
    datasets: [{
      label: "My First dataset",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: []
    }]
  };

  function getChart(period, flows)  {
    return getChartDays(flows);
    /*
    switch(period) {
      case 'days' :
        return getChartDays(flows);
        break;
      default :
        return getChartDays(flows);
        break;
    }*/
  }

  function getChartDays(flows) {
    var currentDay = "";
    var dayFlows = {};
    var day, date;
    //TO DO: figure out this is jacked up
    var data = $.extend(defaultChartConfig, {});
    data.labels = [];
    data.datasets[0].data = [];
    app.log('getChartDays', flows.length, data.labels.length, defaultChartConfig.labels.length);

    for(var idx = 0, max = flows.length; idx < max; idx++) {
      date = moment(flows[idx].time);
      day = date.format('M/D');
      if (day != currentDay) { //new day reached
          app.log('label', day);
          data.labels.push(day);
          dayFlows[day] = [];
          currentDay = day;
      }
      dayFlows[day].push(flows[idx].flow);
    }

    _.each(data.labels, function(label) {
      data.datasets[0].data.push(getAverage(dayFlows[label]));
    });
    app.log('data', data);
    return data;
  }


  function getAverage(flows) {
    var sum = 0, max = flows.length;;
    for(var idx = 0; idx < max; idx++) {
      sum += parseInt(flows[idx]);
    }
    return parseInt(sum / max);
  }


  return { getChart : getChart };

});
