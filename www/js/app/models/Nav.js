define(['backbone'], function(Backbone) {

  return Backbone.Model.extend({

    defaults: {
      nav: [
        {text: 'About', link: '#'},
        {text: 'Help', link: '#'},
        {text: 'My Deck', link: '#/'},
        {text: 'New Run', link: '#/newrun/'}
      ]
    }

  });

});
