define([
  'models/RiverCard',
  'views/RiverCard'
], function(_model, _view) {

  var deferred = new $.Deferred();

  function init() {
    app.log('module: RiverDeck', 'init');
    var model = new _model();
    model.fetch({ success: model_fetched, error: model_fail });
    return deferred.promise();

  }

  function model_fetched(model, response, options) {
    app.log('module: RiverDeck', 'model_fetched', model);
    var view = new _view({ model: model });
    view.render();
    deferred.resolve();
  }

  function model_fail() {
    app.log('module: RiverDeck', 'fail', arguments);
  }

  return { init: init };

});
