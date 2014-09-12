define([
  'backbone',
  'views/RiverCardLog',
  'views/RiverCardFlows',
  'views/RiverCardNotes',
  'views/RiverCardInfo',
  'models/Flows'
  ], function(Backbone, LogView, FlowsView, NotesView, InfoView, FlowsModel) {

  return Backbone.View.extend({

    template: app.templates.rivercard,

    initialize: function() {
      this.model.on('change', this.render, this);
      this._contentViews = {};
    },

    events: {
      'click .view-button': 'changeView',
    },

    render: function() {

      var html = this.template(this.model.toJSON());
      this.$el.html(html);

      var riverData = _.clone(this.model.get('river'));
      this.$content = $('.river-card-content-container', this.el);
      this.$viewButtons = $('.view-button', this.el);

      this.renderContent(LogView, this.model);
      this.renderContent(NotesView, this.model);
      this.renderContent(InfoView,  this.model);
      this.renderContent(FlowsView,  new FlowsModel());

      this.$el.attr('data-view', riverData.view);
      this._contentViews[riverData.view].$el.removeClass('hide');

      return this;
    },

    renderContent: function(View, model) {
      var that = this;
      var contentView = new View({ model: model });
      that.$content.append(contentView.render().$el);
      contentView.$el.attr('data-view', contentView.viewName);
      this._contentViews[contentView.viewName] = contentView;
    },

    changeView: function(e) {
      //TODO: backbonify (change model, handle via event)
      var newView = $(e.currentTarget).attr('data-view');
      $('.river-card-content:visible').addClass('hide');
      this.$el.attr('data-view', newView);
      this._contentViews[newView].$el.removeClass('hide');
      this.$viewButtons.removeClass('current');
      $(e.currentTarget).addClass('current');
    }

  });

});
