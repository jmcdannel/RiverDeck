define([
  'backbone',
  'views/RiverCardContent',
  'utils/FlowHelpers',
  'chart'
  ], function(Backbone, RiverCardContent, FlowHelpers, Chart) {

  return RiverCardContent.extend({

    template: app.templates.rivercardflows,

    initialize: function() {
      //this.model.on('change', this.render, this);
      this.viewName = 'flows';
    },

    render: function() {
      var html = this.template(this.model.toJSON());
      var that = this;
      this.$el.html(html);
      this.initView();

      this.model.fetch({
        success: function(model, response) {
          that.renderChart(model);
        }
      });

      return this;
    },

    renderChart: function(model) {
      var chartEl = $('.river-card-flow-graph', this.el);
      var chartCtx = chartEl.get(0).getContext("2d");
      var data = FlowHelpers.getChart('days', model.get('flows'));

      chartEl.attr({
        'width' : parseInt(this.$el.width()),
        'height' : '200'
      });

      var myLineChart = new Chart(chartCtx).Line(data);
    }


  });

});
