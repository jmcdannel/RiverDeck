define([
  'collections/RiverDeck',
  'views/RiverDeck'
], function(RiverDeckCollection, RiverDeckView) {


  function init() {
    var deferred = new $.Deferred();

    var rivers = new RiverDeckCollection();
    rivers.fetch({
      success: function(model, response, options) {
        var view = new RiverDeckView({ collection : rivers });
        view.render();
        deferred.resolve(view);
      },
      error: function() {
        app.log('module: RiverDeck', 'fail', arguments);
      }
    });

    return deferred.promise();

  }

  return { init: init };

});
