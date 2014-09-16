define(['backbone'], function(Backbone) {

  return Backbone.Model.extend({
    idAttribute: "_id",
    url: function() {
      var apiUrl = '/api/runs/';
      return this.isNew() ? apiUrl : apiUrl + this.id;
    }
  });

});
