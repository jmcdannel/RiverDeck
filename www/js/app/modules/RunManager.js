define([
  'models/RiverRun',
  'views/RunForm'
], function(RiverRunModel, RunFormView) {


  function init() {

    var model = new RiverRunModel();
    var view = new RunFormView({ model: model });
    view.render();

  }

  return { init: init };


});
