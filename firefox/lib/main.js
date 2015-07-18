'use strict';


var self = require('sdk/self');
var _ = require("sdk/l10n").get;
var windows = require("sdk/windows").browserWindows;
var { indexedDB } = require('sdk/indexed-db');
var pageMod = require("sdk/page-mod");
// let { uuid } = require('sdk/util/uuid');


pageMod.PageMod({
  include: /.*trello\.com\/b\/.*/,
  contentScriptFile: self.data.url('view-button.js')
});
