this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};

this["app"]["templates"]["footer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <li><a href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n  ";
  return buffer;
  }

  buffer += "<ul class=\"tech-list\">\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.tech), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });

this["app"]["templates"]["log-entry"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section class=\"log-entry\">\n  \n\n</section>\n";
  });

this["app"]["templates"]["logentry"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n<form method=\"post\">\n\n  <div class=\"col-1\">\n    <label class=\"log-date-time\">\n      <span>Date / Time</span>\n      <input type=\"date\" id=\"log-date\" name=\"log-date\" value=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required>\n      <input type=\"time\" id=\"log-time\" name=\"log-time\" value=\"";
  if (helper = helpers.time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    </label>\n\n    <label class=\"log-trips\">\n      <span># Trips</span>\n      <input type=\"number\" id=\"log-trips\" name=\"log-trips\" value=\"1\" required>\n    </label>\n\n    <label class=\"log-flow\">\n      <span>Flow</span>\n      <input type=\"text\" id=\"log-flow\" name=\"log-flow\">\n    </label>\n  </div>\n\n  <div class=\"col-2\">\n    <label class=\"log-run\">\n      <span>Run   <a href=\"#\" class=\"icon-plus\"> New Run</a></span>\n      <input type=\"text\" id=\"log-run\" name=\"log-run\" required>\n\n    </label>\n\n    <label class=\"log-notes\">\n      <span>Notes</span>\n      <textarea name=\"log-notes\" id=\"log-notes\"></textarea>\n    </label>\n\n\n    <label class=\"log-friends\">\n      <span>Tag Others</span>\n      <input type=\"text\" id=\"log-friends\" name=\"log-friends\">\n    </label>\n  </div>\n\n  <div class=\"actions\">\n    <button type=\"button\" class=\"btn-secondary\">Cancel</button>\n    <button type=\"submit\" class=\"btn-primary\">Submit</button>\n  </div>\n\n</form>\n";
  return buffer;
  });

this["app"]["templates"]["nav"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <a href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n  ";
  return buffer;
  }

  buffer += "<nav class=\"container\">\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.nav), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</nav>";
  return buffer;
  });

this["app"]["templates"]["rivercard"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<header class=\"river-card-header\">\n  <h2 class=\"river-card-title\">\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n    <a href=\"#\" data-view=\"info\" class=\"view-button icon-link icon-info btn-info\"></a>\n    <a href=\"#\" class=\"icon-link icon-eye btn-view-more\"></a>\n  </h2>\n  ";
  stack1 = self.invokePartial(partials.userstats, 'userstats', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = self.invokePartial(partials.riverstats, 'riverstats', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</header>\n\n<section class=\"river-card-current-flow icon-stats "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.flowData)),stack1 == null || stack1 === false ? stack1 : stack1.flowStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n  <strong>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.flowData)),stack1 == null || stack1 === false ? stack1 : stack1.current)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.flowData)),stack1 == null || stack1 === false ? stack1 : stack1.unit)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  @  "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.flowData)),stack1 == null || stack1 === false ? stack1 : stack1.datetime)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n</section>\n\n<section class=\"river-card-content-container\">\n\n</section>\n\n<footer class=\"river-card-footer\">\n  ";
  stack1 = self.invokePartial(partials.rivercardnav, 'rivercardnav', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</footer>\n";
  return buffer;
  });

this["app"]["templates"]["rivercardflows"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<canvas class=\"river-card-flow-graph\"></canvas>\n";
  });

this["app"]["templates"]["rivercardinfo"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n  <ul class=\"river-card-info-list\">\n    <li class=\"stat\">\n      <h5>Put In</h5>\n      <span class=\"stat-value\">\n        <em>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.access)),stack1 == null || stack1 === false ? stack1 : stack1.putin)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</em>\n      </span>\n      <a href=\"#\" class=\"icon-earth\">Directions</a>\n    </li>\n    <li class=\"stat\">\n      <h5>Take Out</h5>\n      <span class=\"stat-value\">\n        <em>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.access)),stack1 == null || stack1 === false ? stack1 : stack1.takeout)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</em>\n      </span>\n      <a href=\"#\" class=\"icon-earth\">Directions</a>\n    </li>\n    <li class=\"stat\">\n      <h5>Location</h5>\n      <span class=\"stat-value\">\n        <em>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.state)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ",\n        "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.country)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</em>\n      </span>\n      <a href=\"#\" class=\"icon-earth\">Map</a>\n    </li>\n    <li class=\"stat\">\n      <h5>Miles</h5>\n      <span class=\"stat-value\">\n        <em>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.stats)),stack1 == null || stack1 === false ? stack1 : stack1.miles)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</em>mi\n      </span>\n    </li>\n    <li class=\"stat\">\n      <h5>Vetical</h5>\n      <span class=\"stat-value\">\n        <em>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.stats)),stack1 == null || stack1 === false ? stack1 : stack1.vertical)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</em>ft\n      </span>\n    </li>\n    <li class=\"stat\">\n      <h5>Gradient</h5>\n      <span class=\"stat-value\">\n        <em>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.stats)),stack1 == null || stack1 === false ? stack1 : stack1.gradient)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</em>ft/mi\n      </span>\n    </li>\n    <li class=\"stat\">\n      <h5>Difficulty</h5>\n      <span class=\"stat-value\">\n        <em>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.stats)),stack1 == null || stack1 === false ? stack1 : stack1.difficultyclass)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</em>\n      </span>\n    </li>\n    <li class=\"stat\">\n\n    </li>\n  </ul>\n";
  return buffer;
  });

this["app"]["templates"]["rivercardlog"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <tr>\n      <td>\n        <div class=\"date-cell\">\n          ";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n          <div class=\"log-actions\">\n            <a class=\"icon-link icon-pencil\"></a>\n            <a class=\"icon-link icon-remove\"></a>\n          </div>\n        </div>\n      </td>\n      <td>\n        <span class=\"stat\">\n          <strong>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.runningTotals)),stack1 == null || stack1 === false ? stack1 : stack1.miles)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong>mi\n        </span>\n          <span class=\"stat\">\n            <strong>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.runningTotals)),stack1 == null || stack1 === false ? stack1 : stack1.feet)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong>ft\n          </span>\n      <td class=\"notes\"> ";
  if (helper = helpers.notes) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.notes); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </td>\n    </tr>\n    ";
  return buffer;
  }

  buffer += "\n<button class=\"icon-plus\">New Entry</button>\n\n<table class=\"river-card-log-entries\">\n  <thead>\n    <tr>\n      <th colspan=\"3\" class=\"log-year\">2014</th>\n    </tr>\n    <tr>\n      <th>Date</th>\n      <th>YTD</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.userData)),stack1 == null || stack1 === false ? stack1 : stack1.log), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </tbody>\n</table>\n";
  return buffer;
  });

this["app"]["templates"]["rivercardnav"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <li><button data-view=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"view-button btn-icon icon-";
  if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.current), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</button></li>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "current";
  }

  buffer += "<nav class=\"river-card-nav\">\n  <ul>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.actions), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n</nav>\n";
  return buffer;
  });

this["app"]["templates"]["rivercardnotes"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <li class=\"river-card-note\">\n        <div class=\"note-actions\">\n          <a class=\"icon-link icon-pencil\"></a>\n          <a class=\"icon-link icon-remove\"></a>\n        </div>\n\n        <figure class=\"avatar avatar-small\">\n          <img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.avatar)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n          <figcaption>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        </figure>\n\n        <h4>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n        <h5>";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h5>\n        <p>\n          ";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        </p>\n\n      </li>\n    ";
  return buffer;
  }

  buffer += "\n  <button class=\"icon-plus\">New Note</button>\n\n  <ol class=\"river-card-note-list\">\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.userData)),stack1 == null || stack1 === false ? stack1 : stack1.notes), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ol>\n";
  return buffer;
  });

this["app"]["templates"]["riverstats"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<ul class=\"river-stats\">\n  <li class=\"stat stat-length\"><strong class=\"stat-value\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.stats)),stack1 == null || stack1 === false ? stack1 : stack1.miles)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong>mi</li>\n  <li class=\"stat stat-vertial\"><strong class=\"stat-value\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.stats)),stack1 == null || stack1 === false ? stack1 : stack1.vertical)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong>ft</il>\n  <li class=\"stat stat-difficulty\"><strong class=\"stat-value\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.stats)),stack1 == null || stack1 === false ? stack1 : stack1.difficultyclass)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong></il>\n</ul>\n";
  return buffer;
  });

this["app"]["templates"]["userstats"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<ul class=\"user-stats\">\n  <li class=\"stat\">\n    <label class=\"stat-label\">2014</label>\n    <strong class=\"stat-value\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.userData)),stack1 == null || stack1 === false ? stack1 : stack1.currentYearTotal)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong>\n  </li>\n  <li class=\"stat\">\n    <label class=\"stat-label\">Life</label>\n    <strong class=\"stat-value\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.userData)),stack1 == null || stack1 === false ? stack1 : stack1.allTimeTotal)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong>\n  </il>\n</ul>\n";
  return buffer;
  });