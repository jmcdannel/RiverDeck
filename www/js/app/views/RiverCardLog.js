define([
  'backbone',
  'views/RiverCardContent'
  ], function(Backbone, RiverCardContent) {

  return RiverCardContent.extend({

    template: app.templates.rivercardlog,

    initialize: function() {
      this.model.on('change', this.render, this);
      this.viewName = 'log';
    }

  });

});
