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


  buffer += "<article class=\"river-card\">\n\n  <header class=\"river-card-header\">\n    <h2 class=\"river-card-title\">\n      "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      <a href=\"#\" class=\"icon-info btn-info\"></a>\n      <a href=\"#\" class=\"icon-eye btn-view-more\"></a>\n    </h2>\n    ";
  stack1 = self.invokePartial(partials.userstats, 'userstats', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.riverstats, 'riverstats', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </header>\n\n  <section class=\"river-card-current-flow icon-stats "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.flowData)),stack1 == null || stack1 === false ? stack1 : stack1.flowStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <strong>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.flowData)),stack1 == null || stack1 === false ? stack1 : stack1.current)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.flowData)),stack1 == null || stack1 === false ? stack1 : stack1.unit)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n    @  "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.river)),stack1 == null || stack1 === false ? stack1 : stack1.flowData)),stack1 == null || stack1 === false ? stack1 : stack1.datetime)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </section>\n\n  <section class=\"river-card-content\">\n\n  </section>\n\n  <footer class=\"river-card-footer\">\n    ";
  stack1 = self.invokePartial(partials.rivercardnav, 'rivercardnav', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </footer>\n\n</article>\n";
  return buffer;
  });

this["app"]["templates"]["rivercardnav"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<nav class=\"river-card-nav\">\n  <ul>\n    <li><button class=\"btn-icon icon-quill current\">Log</button></li>\n    <li><button class=\"btn-icon icon-stats\">Flows</button></li>\n    <li><button class=\"btn-icon icon-file\">Notes <span class=\"count\">(3)</span></button></li>\n    <!--<li><button class=\"btn-icon icon-image\">Photos <span class=\"count\">(6)</span></button></li>\n    <li><button class=\"btn-icon icon-play\">Videos <span class=\"count\">(1)</button></li>\n    <li><button class=\"btn-icon icon-feed \">Activity</button></li>-->\n  </ul>\n</nav>\n";
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