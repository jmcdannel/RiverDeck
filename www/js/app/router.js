define([
  'backbone',
  'modules/RiverDeck',
  'modules/LogManager',
  'modules/RunManager',
  'modules/Nav',
  'modules/Footer'
], function(Backbone, RiverDeck, LogManager, RunManager, Nav, Footer){

  var Router = Backbone.Router.extend({

    routes: {
      "": "default",
      "newrun/" : "newrun",
      "logrun/" : "logrun",
      "deck/" : "default",
      "completerun/:id" : "completerun"
    },

    initialize: function() {
      Nav.init();
      Footer.init();

      this.contentView = null;
    },

    default: function() {
      app.log('router:default');
      var that = this;
      this.cleanUpViews();
      RiverDeck.init().done(function(view) {
        app.log('router:default.done', view);
        that.contentView = view;
      });
    },

    newrun: function() {
      this.cleanUpViews();
      this.contentView  = RunManager.newrun();
    },

    logrun: function() {
      this.cleanUpViews();
      this.contentView  = LogManager.add();
    },

    completerun: function(runID) {
      var that = this;
      this.cleanUpViews();
      RunManager.completerun(runID).done(function(view) {
        that.contentView = view;
      });
    },

    cleanUpViews: function() {
      app.log(this.contentView, 'cleanupViews');
      if (this.contentView) {
        this.contentView.$el.addClass('hide');
      }
    }

  });

  return Router;

});
