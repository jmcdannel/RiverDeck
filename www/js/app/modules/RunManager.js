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

  function newrun() {

    var model = new RiverRunModel();
    var view = new NewRunView({ model: model });
    view.render();
    return view;

  }

  function completerun(runID) {
    var deferred = new $.Deferred();
    var model = new RiverRunModel({ _id: runID });
    model.fetch({success: function() {
      var view = new CompleteRunView({ model: model });
      view.render();
      deferred.resolve(view);
    }});
    return deferred.promise();
  }

  return {
    newrun: newrun,
    completerun: completerun
  };


});
