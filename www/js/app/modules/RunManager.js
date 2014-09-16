define([
  'models/RiverRun',
  'views/EditRun',
  'views/NewRun',
  'views/CompleteRun'
], function(
  RiverRunModel,
  EditRunView,
  NewRunView,
  CompleteRunView) {


  function init() {

    var model = new RiverRunModel();
    var view = new NewRunView({ model: model });
    view.render();

  }

  return { init: init };


});
