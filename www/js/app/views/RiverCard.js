define([
  'backbone',
  'views/RiverCardLog',
  'views/RiverCardFlows',
  'views/RiverCardNotes',
  'views/RiverCardInfo'
  ], function(Backbone, LogView, FlowsView, NotesView, InfoView) {

  return Backbone.View.extend({

    template: app.templates.rivercard,

    initialize: function() {
      this.model.on('change', this.render, this);
    },

    render: function() {

      var html = this.template(this.model.toJSON());
      this.$el.html(html);

      var riverData = _.clone(this.model.get('river'));


      switch(riverData.view) {
        case 'log' :
          this.renderLog();
          break;
        case 'notes' :
          this.renderNotes();
          break;
        case 'info' :
          this.renderInfo();
          break;
        case 'flows' :
          this.renderFlows();
          break;
        default:
          this.renderLog();
          break;
      }

      this.$el.attr('data-view', riverData.view);

      return this;
    },

    renderLog: function() {
      this.renderContent(LogView);
    },

    renderNotes: function() {
      this.renderContent(NotesView);
    },

    renderFlows: function() {
      this.renderContent(FlowsView);
    },

    renderInfo: function() {
      this.renderContent(InfoView);
    },

    renderContent: function(View) {
      var contentView = new View({ model: this.model });
      contentView.setElement($('.river-card-content', this.el));
      contentView.render();
    }

  });

});
