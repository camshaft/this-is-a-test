/**
 * Module dependencies
 */
var express = require("express");

var app = module.exports = express();

app.configure(function() {
  app.use(express.logger("dev"));
  app.use(express.methodOverride());
  app.use(express.bodyParser());
});
