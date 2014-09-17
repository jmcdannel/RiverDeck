define(['backbone'], function(Backbone) {

  return Backbone.View.extend({

    el: '#log-entry',

    template: app.templates.logentry,

    initialize: function() {
      this.model.on('change', this.render, this);
    },

    render: function() {

      var html = this.template(this.model.toJSON());
      this.$el.html(html).removeClass('hide');

    }

  });

});
