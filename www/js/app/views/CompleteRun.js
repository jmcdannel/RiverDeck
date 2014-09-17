define(['backbone'], function(Backbone) {

  return Backbone.View.extend({

    el: '#run-form',

    template: app.templates.completerun,

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
      app.router.navigate('/', true);
    },

    submit_click: function(e) {
      e.preventDefault();

      var data = {
        notes: $('#run-description', this.el).val(),
        usugID: $('#run-usgsID', this.el).val(),
        aliases: $('#run-aliases', this.el).val(),
        stats: {
          miles: $('#run-miles', this.el).val(),
          vertical: $('#run-vertical', this.el).val(),
          difficulty: $('#run-difficulty', this.el).val()
        },
        location: {
          state: $('#run-state', this.el).val(),
          country: $('#run-country', this.el).val(),
          drainage: $('#run-drainage', this.el).val()
        },
        access: {
          putin: {
            name: $('#run-putin', this.el).val()
          },
          takeout: {
            name: $('#run-takeout', this.el).val()
          }
        },
        levels: {
          low: {
            min: $('#run-low-min', this.el).val(),
            max: $('#run-low-max', this.el).val()
          },
          medium: {
            min: $('#run-med-min', this.el).val(),
            max: $('#run-med-max', this.el).val()
          },
          high: {
            min: $('#run-high-min', this.el).val(),
            max: $('#run-hign-max', this.el).val()
          }
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
      app.log('run saved', respoonse.id, arguments);
      this.$el.remove();
      app.router.navigate('/deck/', {trigger: true});
    },

    submit_fail: function() {
      app.log('save failed', arguments);
    }

  });

});
