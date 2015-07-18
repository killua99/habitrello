'use strict';

try {
  // CFX use case..
  var { actionButton, toggleButton, icon } = require("main");
}
catch (e) {
  // JPM use case..
  let mainURI = "../lib/main";
  var { actionButton, toggleButton, icon } = require(mainURI);
}
var self = require("sdk/self");



require("sdk/test").run(exports);
