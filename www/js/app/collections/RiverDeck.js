define([
  'backbone',
  'models/RiverCard'
  ], function(Backbone, _riverCardModel) {

  return Backbone.Collection.extend({
    model : _riverCardModel,
    url : '/data/deck-single.json'
  });

});
