define([
  'collections/RiverDeck',
  'views/RiverDeck'
], function(RiverDeckCollection, RiverDeckView) {

  var deferred = new $.Deferred();

  function init() {
    app.log('module: RiverDeck', 'init');

    var rivers = new RiverDeckCollection();
    rivers.fetch({
      success: function(model, response, options) {
        app.log('RiverDeckCollection.fetch', model, response, options);
        var deck = new RiverDeckView({ collection : rivers });
        deck.render();
        deferred.resolve();
      },
      error: function() {
        app.log('module: RiverDeck', 'fail', arguments);
      }
    });

    return deferred.promise();

  }
  return { init: init };

});
