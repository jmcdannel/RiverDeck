define([
  'models/LogEntry',
  'views/LogEntry'
], function(_model, _view) {

  function add() {

    var model = new _model();
    var view = new _view({ model: model });
    view.render();

  }

  return { add: add };

});
