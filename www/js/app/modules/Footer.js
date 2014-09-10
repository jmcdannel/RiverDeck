define([
  'models/Footer',
  'views/Footer'
], function(_model, _view) {

  var deferred = new $.Deferred();

  function init() {

    var model = new _model();
    var view = new _view({ model: model });
    view.render();

  }

  return { init: init };

});
