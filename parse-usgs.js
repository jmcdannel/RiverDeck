var _ = require('lodash-node');
var fs = require('fs');
var file = __dirname + '/www/data/usgs-main-payette.json';
var jf = require('jsonfile')


fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }

  data = JSON.parse(data);

  var flowData = data.value.timeSeries[0].values[0].value;
  var parsedData = {
    "river" : "Main Payette",
    "flows" : []
  };

  for(var idx = 0, max = flowData.length; idx < max; idx = idx + 4) {
    parsedData.flows.push({
      "flow" : flowData[idx].value,
      "time" : flowData[idx].dateTime
    });
  }

  var myData = JSON.stringify(parsedData);

  var file = __dirname + '/www/data/card-main-payette.json'
  
  jf.writeFileSync(file, parsedData)

  console.log(myData);
  console.dir(flowData.length);
});
