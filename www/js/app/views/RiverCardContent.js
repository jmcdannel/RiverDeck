define([
  'backbone'
  ], function(Backbone, FlowHelpers, Chart) {

  return Backbone.View.extend({
    tagName: 'article',
    className: 'river-card-content',

    initView: function() {
      this.$el.attr('data-view', this.viewName);
    },

    render: function() {
      var html = this.template(this.model.toJSON());
      this.$el.html(html);
      this.initView();
      return this;
    }

  });
});
