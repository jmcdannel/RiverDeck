define(['backbone'], function(Backbone) {

  return Backbone.View.extend({

    el: '#run-form',

    template: app.templates.newrun,

    events: {
      'click .btn-submit' : 'submit_click',
      'click .btn-cancel' : 'cancel_click',
      'submit form' : 'submit_click'
    },

    initialize: function() {
      _(this).bindAll('submit_success', 'submit_fail');
      this.model.on('change', this.render, this);
    },

    render: function() {

      var html = this.template(this.model.toJSON());
      this.$el.html(html).removeClass('hide');

    },

    cancel_click: function(e) {
      e.preventDefault();
      this.$el.remove();
      this.trigger('cancel');
    },

    submit_click: function(e) {
      e.preventDefault();

      var data = {
        name: $('#run-name', this.el).val(),
        stats: {
          miles: $('#run-miles', this.el).val(),
          vertical: $('#run-vertical', this.el).val(),
          difficulty: $('#run-difficulty', this.el).val()
        }
      };

      app.log('data', data);

      var callbacks = {
        success: this.submit_success,
        error: this.submit_fail
      }

      this.model.save(data, callbacks);

    },

    submit_success: function(respoonse, run) {
      app.log('run created', respoonse.id, arguments);
      this.$el.remove();
      app.router.navigate('/completerun/' + respoonse.id, {trigger: true});
    },

    submit_fail: function() {
      app.log('save failed', arguments);
    }

  });

});
