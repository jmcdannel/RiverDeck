define([
  'backbone',
  'views/RiverCard'
  ], function(Backbone, RiverCardVieww) {

  return Backbone.View.extend({

    el: '#river-deck',

    //template: app.templates.rivercard,

    initialize: function() {
      _(this).bindAll('add');
      //this.model.on('change', this.render, this);
      this.cards = [];
      this.collection.each(this.add);
    },

    add: function(cardModel) {
      var card = new RiverCardVieww({
        tagName : 'article',
        className : 'river-card',
        model : cardModel
      });

      app.log('add', cardModel, this);

      // And add it to the collection so that it's easy to reuse.
      this.cards.push(card);

      // If the view has been rendered, then
      // we immediately append the rendered card.
      if (this._rendered) {
        $(this.el).append(dv.render().el);
      }
    },

    render: function() {
      var that = this;
      // We keep track of the rendered state of the view
      this._rendered = true;


      that.$el.empty();
      app.log('RiverDeck.render', this);

      // Render each Donut View and append them.
      _(this.cards).each(function(card) {
        that.$el.append(card.render().el);
      });

      return this;

    }

  });

});
