define([
  'backbone',
  'models/RiverRun'
  ], function(Backbone, RiverRundModel) {

  return Backbone.Collection.extend({
    model : RiverRundModel,
    url : '/api/runs'
  });

});
