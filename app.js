/**
 * Module dependencies
 */
var express = require("express")
  , home = require("./routes/home")
  , users = require("./routes/users");

var app = module.exports = express();

app.configure(function() {
  app.use(express.logger("dev"));
  app.use(express.methodOverride());
  app.use(express.bodyParser());
});

// Home
app.get("/", home.index());
app.post("/", home.login());

// Users resources
app.get("/users", users.index());
app.post("/users", users.create());
app.get("/users/:id", users.get());
app.put("/users/:id", users.update());
app.del("/users/:id", users.remove());
