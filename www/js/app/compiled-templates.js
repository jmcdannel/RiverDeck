this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};

this["app"]["templates"]["completerun"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form method=\"post\">\n\n  <div class=\"row\">\n\n    <div class=\"large-12 columns\">\n      <label class=\"run-name\">\n        Run Name\n        <input type=\"text\" id=\"run-name\" name=\"name\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" readonly>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"large-4 columns\">\n      <h2> Run Location </h2>\n\n      <div class=\"row\">\n\n        <label class=\"large-6 columns\">\n          Country\n          <select id=\"run-country\" name=\"country\" class=\"radius\">\n            <option value=\"US\">United States</option>\n          </select>\n        </label>\n        <label class=\"large-6 columns\">\n          State\n          <select id=\"run-state\" name=\"state\" class=\"radius\">\n            <option value=\"ID\">Idaho</option>\n          </select>\n        </labe>\n      </div>\n      <!--\n      <div class=\"row\">\n        <label class=\"large-6 columns\">\n           Latitude\n          <input type=\"text\" id=\"run-latitude\" name=\"latitude\" value=\"\" placeholder=\"Decimal Format\">\n        </label>\n        <label class=\"large-6 columns\">\n           Longitue\n          <input type=\"text\" id=\"run-longitude\" name=\"longitude\" value=\"\" placeholder=\"Decimal Format\">\n        </label>\n      </div>\n    -->\n\n      <label>\n        Drainage / Main River\n        <input type=\"text\" list=\"drainages\" id=\"run-drainage\" name=\"drainage\" value=\"\" placeholder=\"ex: Salmon, Payette\">\n        <datalist id=\"drainages\">\n          <option value=\"Salmon\">Idaho: Salmon</option>\n          <option value=\"Snake\">Idaho: Snake</option>\n          <option value=\"Clearwater\">Idaho: Clearwater</option>\n          <option value=\"St. Joe\">Idaho: St. Joe</option>\n          <option value=\"Bruneau\">Idaho: Bruneau</option>\n          <option value=\"Owyhee\">Idaho: Owyhee</option>\n          <option value=\"Owyhee\">Oregon: Owyhee</option>\n        </datalist>\n      </label>\n\n\n      <label>\n        Put In\n        <input type=\"text\" id=\"run-putin\" name=\"putin\" value=\"\">\n      </label>\n\n      <label class=\"hide\">\n        Put In Directions\n        <input type=\"\" id=\"run-putin-directions\" name=\"putin-directions\" value=\"\">\n      </label>\n\n      <label>\n        Take Out\n        <input type=\"text\" id=\"run-takeout\" name=\"takeout\" value=\"\">\n      </label>\n\n      <label class=\"hide\">\n        Take Out Directions\n        <input type=\"\" id=\"run-takeout-directions\" name=\"takeout-directions\" value=\"\">\n      </label>\n\n    </div>\n    <div class=\"large-4 columns\">\n      <h2> Run Statistics </h2>\n\n      <div class=\"row\">\n        <div class=\"large-4 columns\">\n          <label>\n            Miles\n            <input type=\"number\" id=\"run-miles\" name=\"miles\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.stats)),stack1 == null || stack1 === false ? stack1 : stack1.miles)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" size=\"4\" required>\n          </label>\n        </div>\n        <div class=\"large-4 columns\">\n          <label>\n            Vertical Drop\n            <input type=\"number\" id=\"run-vertical\" name=\"vertical\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.stats)),stack1 == null || stack1 === false ? stack1 : stack1.vertical)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" size=\"5\" required>\n          </label>\n        </div>\n        <div class=\"large-4 columns\">\n          <label>\n            Difficulty\n            <input type=\"text\" id=\"run-difficulty\" name=\"difficulty\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.stats)),stack1 == null || stack1 === false ? stack1 : stack1.difficulty)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" size=\"4\" required>\n          </label>\n        </div>\n      </div>\n\n      <fieldset>\n        <legend>Flow Thresholds</legend>\n\n        <div class=\"flow-threshold-low row\">\n          <h5>Low Range</h5>\n          <div class=\"large-5 columns\">\n            <label class=\"\">\n              <input type=\"text\" id=\"run-low-min\" name=\"low-min\" value=\"\" placeholder=\"Min\">\n            </label>\n          </div>\n          <div class=\"large-2 columns text-center\">\n            -\n          </div>\n          <div class=\"large-5 columns\">\n            <label class=\"\">\n              <input type=\"text\" id=\"run-low-max\" name=\"low-max\" value=\"\" placeholder=\"Max\">\n            </label>\n          </div>\n        </div>\n\n        <div class=\"flow-threshold-medium row\">\n          <h5>Medium Range</h5>\n          <div class=\"large-5 columns\">\n            <label class=\"\">\n              <input type=\"text\" id=\"run-med-min\" name=\"med-min\" value=\"\" placeholder=\"Min\">\n            </label>\n          </div>\n          <div class=\"large-2 columns text-center\">\n            -\n          </div>\n          <div class=\"large-5 columns\">\n            <label class=\"\">\n              <input type=\"text\" id=\"run-med-max\" name=\"med-max\" value=\"\" placeholder=\"Max\">\n            </label>\n          </div>\n        </div>\n\n        <div class=\"flow-threshold-hign row\">\n          <h5>High Range</h5>\n          <div class=\"large-5 columns\">\n            <label class=\"\">\n              <input type=\"text\" id=\"run-high-min\" name=\"high-min\" value=\"\" placeholder=\"Min\">\n            </label>\n          </div>\n          <div class=\"large-2 columns text-center\">\n            -\n          </div>\n          <div class=\"large-5 columns\">\n            <label class=\"\">\n              <input type=\"text\" id=\"run-high-max\" name=\"high-max\" value=\"\" placeholder=\"Max\">\n            </label>\n          </div>\n        </div>\n\n      </fieldset>\n\n    </div>\n    <div class=\"large-4 columns\">\n      <h2> Run Information </h2>\n      <label class=\"run-aliases\">\n        Aliases\n        <input type=\"text\" id=\"run-aliases\" name=\"aliases\" value=\"\" required>\n\n      </label>\n\n      <label>\n        USGS ID\n        <input type=\"text\" id=\"run-usgsID\" name=\"usgsID\" value=\"\" required>\n      </label>\n\n      <label>\n        Description\n        <textarea rows=\"10\" id=\"run-description\" name=\"description\"></textarea>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"large-12 columns actions text-right\">\n      <button type=\"button\" class=\"button btn-secondary btn-cancel\">Cancel</button>\n      <button type=\"submit\" class=\"button btn-primary btn-submit\">Submit</button>\n    </div>\n  </div>\n  </div>\n\n</form>\n";
  return buffer;
  });

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

this["app"]["templates"]["logentry"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n<form method=\"post\">\n\n  <div class=\"row\">\n\n    <div class=\"large-12 columns\">\n      <label class=\"log-run\">\n        Run\n        <a href=\"#\" class=\"icon-plus\"> New Run</a>\n        <input type=\"text\" id=\"log-run\" name=\"log-run\" required>\n      </label>\n\n      <div class=\"row\">\n        <div class=\"large-3 columns\">\n          <label class=\"log-date\">\n            Date\n            <input type=\"date\" id=\"log-date\" name=\"log-date\" value=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required>\n          </label>\n        </div>\n        <div class=\"large-3 columns\">\n          <label class=\"log-time\">\n            Time\n            <input type=\"time\" id=\"log-time\" name=\"log-time\" value=\"";
  if (helper = helpers.time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n          </label>\n        </div>\n        <div class=\"large-3 columns\">\n          <label class=\"log-trips\">\n            <span># Trips</span>\n            <input type=\"number\" id=\"log-trips\" name=\"log-trips\" value=\"1\" required>\n          </label>\n        </div>\n        <div class=\"large-3 columns\">\n          <label class=\"log-flow\">\n            <span>Flow</span>\n            <input type=\"text\" id=\"log-flow\" name=\"log-flow\">\n          </label>\n        </div>\n      </div>\n\n        <label class=\"log-notes\">\n          <span>Notes</span>\n          <textarea name=\"log-notes\" id=\"log-notes\" rows=\"5\"></textarea>\n        </label>\n\n\n        <label class=\"log-friends\">\n          <span>Tag Others</span>\n          <input type=\"text\" id=\"log-friends\" name=\"log-friends\">\n        </label>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"large-12 columns actions text-right\">\n      <button type=\"button\" class=\"button btn-secondary\">Cancel</button>\n      <button type=\"submit\" class=\"button btn-primary\">Submit</button>\n    </div>\n  </div>\n\n</form>\n";
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

this["app"]["templates"]["newrun"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form method=\"post\">\n\n  <div class=\"row\">\n\n    <div class=\"large-12 columns\">\n      <label class=\"run-name\">\n        Run Name\n        <input type=\"text\" id=\"run-name\" name=\"name\" value=\"\" required>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <fieldset>\n      <legend>Run Statistics</legend>\n\n      <div class=\"large-4 columns\">\n        <label>\n          Miles\n          <input type=\"number\" id=\"run-miles\" name=\"miles\" value=\"\" size=\"4\" required>\n        </label>\n      </div>\n      <div class=\"large-4 columns\">\n        <label>\n          Vertical Drop\n          <input type=\"number\" id=\"run-vertical\" name=\"vertical\" value=\"\" size=\"5\" required>\n        </label>\n      </div>\n      <div class=\"large-4 columns\">\n        <label>\n          Difficulty\n          <input type=\"text\" id=\"run-difficulty\" name=\"difficulty\" value=\"\" size=\"4\" required>\n        </label>\n      </div>\n    </fieldset>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"large-12 columns actions text-right\">\n      <button type=\"button\" class=\"button btn-secondary btn-cacnel\">Cancel</button>\n      <button type=\"submit\" class=\"button btn-primary btn-submit\">Submit</button>\n    </div>\n  </div>\n  </div>\n\n</form>\n";
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
    + "\n          <div class=\"log-actions\">\n            <a class=\"icon-link icon-pencil\"></a>\n            <a class=\"icon-link icon-remove\"></a>\n          </div>\n        </div>\n      </td>\n      <td class=\"notes\"> ";
  if (helper = helpers.notes) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.notes); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </td>\n    </tr>\n    ";
  return buffer;
  }

  buffer += "\n<button class=\"icon-plus\">New Entry</button>\n\n<table class=\"river-card-log-entries\">\n  <thead>\n    <tr>\n      <th colspan=\"3\" class=\"log-year\">2014</th>\n    </tr>\n    <tr>\n      <th>Date</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    ";
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

this["app"]["templates"]["runform"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form method=\"post\">\n\n  <div class=\"row\">\n\n    <div class=\"large-12 columns\">\n      <label class=\"run-name\">\n        Run Name\n        <input type=\"text\" id=\"run-name\" name=\"run-name\" value=\"\" required>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"large-4 columns\">\n      <h2> Run Location </h2>\n\n      <div class=\"row\">\n\n        <label class=\"large-6 columns\">\n          Country\n          <select id=\"run-country\" name=\"run-country\" class=\"radius\">\n            <option value=\"US\">United States</option>\n          </select>\n        </label>\n        <label class=\"large-6 columns\">\n          State\n          <select id=\"run-state\" name=\"run-state\" class=\"radius\">\n            <option value=\"ID\">Idaho</option>\n          </select>\n        </labe>\n      </div>\n\n      <div class=\"row\">\n        <label class=\"large-6 columns\">\n           Latitude\n          <input type=\"text\" id=\"run-\" name=\"run-\" value=\"\" placeholder=\"Decimal Format\">\n        </label>\n        <label class=\"large-6 columns\">\n           Longitue\n          <input type=\"text\" id=\"run-\" name=\"run-\" value=\"\" placeholder=\"Decimal Format\">\n        </label>\n      </div>\n\n      <label>\n        Drainage / Main River\n        <input type=\"text\" id=\"run-drainage\" name=\"run-drainage\" value=\"\" placeholder=\"ex: Salmon, Payette\">\n      </label>\n\n\n      <label>\n        Put In\n        <input type=\"text\" id=\"run-\" name=\"run-\" value=\"\">\n      </label>\n\n      <label class=\"hide\">\n        Put In Directions\n        <input type=\"\" id=\"run-\" name=\"run-\" value=\"\">\n      </label>\n\n      <label>\n        Take Out\n        <input type=\"text\" id=\"run-\" name=\"run-\" value=\"\">\n      </label>\n\n      <label class=\"hide\">\n        Take Out Directions\n        <input type=\"\" id=\"run-\" name=\"run-\" value=\"\">\n      </label>\n\n    </div>\n    <div class=\"large-4 columns\">\n      <h2> Run Statistics </h2>\n\n      <div class=\"row\">\n        <div class=\"large-4 columns\">\n          <label>\n            Miles\n            <input type=\"number\" id=\"run-\" name=\"run-\" value=\"\" size=\"4\" required>\n          </label>\n        </div>\n        <div class=\"large-4 columns\">\n          <label>\n            Vertical Drop\n            <input type=\"number\" id=\"run-\" name=\"run-\" value=\"\" size=\"5\" required>\n          </label>\n        </div>\n        <div class=\"large-4 columns\">\n          <label>\n            Difficulty\n            <input type=\"text\" id=\"run-\" name=\"run-\" value=\"\" size=\"4\" required>\n          </label>\n        </div>\n      </div>\n\n      <fieldset>\n        <legend>Flow Thresholds</legend>\n\n        <div class=\"flow-threshold-low row\">\n          <h5>Low Range</h5>\n          <div class=\"large-5 columns\">\n            <label class=\"\">\n              <input type=\"text\" id=\"run-\" name=\"run-\" value=\"\" placeholder=\"Min\">\n            </label>\n          </div>\n          <div class=\"large-2 columns text-center\">\n            -\n          </div>\n          <div class=\"large-5 columns\">\n            <label class=\"\">\n              <input type=\"text\" id=\"run-\" name=\"run-\" value=\"\" placeholder=\"Max\">\n            </label>\n          </div>\n        </div>\n\n        <div class=\"flow-threshold-medium row\">\n          <h5>Medium Range</h5>\n          <div class=\"large-5 columns\">\n            <label class=\"\">\n              <input type=\"text\" id=\"run-\" name=\"run-\" value=\"\" placeholder=\"Min\">\n            </label>\n          </div>\n          <div class=\"large-2 columns text-center\">\n            -\n          </div>\n          <div class=\"large-5 columns\">\n            <label class=\"\">\n              <input type=\"text\" id=\"run-\" name=\"run-\" value=\"\" placeholder=\"Max\">\n            </label>\n          </div>\n        </div>\n\n        <div class=\"flow-threshold-hign row\">\n          <h5>High Range</h5>\n          <div class=\"large-5 columns\">\n            <label class=\"\">\n              <input type=\"text\" id=\"run-\" name=\"run-\" value=\"\" placeholder=\"Min\">\n            </label>\n          </div>\n          <div class=\"large-2 columns text-center\">\n            -\n          </div>\n          <div class=\"large-5 columns\">\n            <label class=\"\">\n              <input type=\"text\" id=\"run-\" name=\"run-\" value=\"\" placeholder=\"Max\">\n            </label>\n          </div>\n        </div>\n\n      </fieldset>\n\n    </div>\n    <div class=\"large-4 columns\">\n      <h2> Run Information </h2>\n      <label class=\"run-aliases\">\n        Aliases\n        <input type=\"text\" list=\"drainages\" id=\"run-aliases\" name=\"run-aliases\" value=\"\" required>\n        <datalist id=\"drainages\">\n          <option value=\"Salmon\">Idaho: Salmon</option>\n          <option value=\"Snake\">Idaho: Snake</option>\n          <option value=\"Clearwater\">Idaho: Clearwater</option>\n          <option value=\"St. Joe\">Idaho: St. Joe</option>\n          <option value=\"Bruneau\">Idaho: Bruneau</option>\n          <option value=\"Owyhee\">Idaho: Owyhee</option>\n          <option value=\"Owyhee\">Oregon: Owyhee</option>\n        </datalist>\n      </label>\n\n      <label>\n        USGS ID\n        <input type=\"text\" id=\"run-\" name=\"run-\" value=\"\" required>\n      </label>\n\n      <label>\n        Description\n        <textarea rows=\"10\"></textarea>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"large-12 columns actions text-right\">\n      <button type=\"button\" class=\"button btn-secondary\">Cancel</button>\n      <button type=\"submit\" class=\"button btn-primary\">Submit</button>\n    </div>\n  </div>\n  </div>\n\n</form>\n";
  });

this["app"]["templates"]["userstats"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<ul class=\"user-stats\">\n  <li class=\"stat\">\n    <span class=\"stat-label\">2014</span>\n    <strong class=\"stat-value\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.userData)),stack1 == null || stack1 === false ? stack1 : stack1.currentYearTotal)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong>\n  </li>\n  <li class=\"stat\">\n    <span class=\"stat-label\">Life</span>\n    <strong class=\"stat-value\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.userData)),stack1 == null || stack1 === false ? stack1 : stack1.allTimeTotal)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong>\n  </il>\n</ul>\n";
  return buffer;
  });