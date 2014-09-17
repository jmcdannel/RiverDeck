define([
  'router',
  'utils/HandlebarHelpers',
  'utils/HandlebarPartials'
  ], function(Router) {

  function init() {

    var loggingEnabled = true;
    var app = window.app || {};

    app.log = function() {

        if (!loggingEnabled) return;

        app.log.history = app.log.history || [];   // store logs to an array for reference
        app.log.history.push(arguments);
        if(window.console){
            console.log( Array.prototype.slice.call(arguments) );
        }
    }

    app.router = new Router();
    window.app = app;



    Backbone.history.start({ pushState: false, root: "/"});

  }

  init();

});
