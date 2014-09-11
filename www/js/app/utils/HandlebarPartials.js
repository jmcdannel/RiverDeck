define(['handlebars', 'lodash' ], function(Handlebars, _) {


  Handlebars.registerPartial({
    riverstats: app.templates.riverstats,
    userstats: app.templates.userstats,
    rivercardnav: app.templates.rivercardnav
  });

});
