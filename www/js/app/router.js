define([
  'backbone',
  'modules/RiverDeck',
  'modules/LogEntry',
  'modules/RunManager',
  'modules/Nav',
  'modules/Footer'
], function(Backbone, RiverDeck, LogEntry, RunManager, Nav, Footer){

  var Router = Backbone.Router.extend({

    routes: {
      "": "default"
    },

    initialize: function() {
      Nav.init();
      Footer.init();
    },

    default: function() {
      app.log('router:default');
      RiverDeck.init();
      //LogEntry.init();
      RunManager.init();
    }

  });

  return Router;

});
