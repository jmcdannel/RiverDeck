define(['backbone', 'moment'], function(Backbone, moment) {

  return Backbone.Model.extend({
    defaults: {
        date: moment().format('YYYY-MM-DD'),
        time: '13:00:00'
    }
  });

});
