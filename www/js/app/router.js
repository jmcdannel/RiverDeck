define([
  'backbone',
  'modules/RiverDeck',
  'modules/Nav',
  'modules/Footer'
], function(Backbone, RiverDeck, Nav, Footer){

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
    }

  });

  return Router;

});
