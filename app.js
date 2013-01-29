/**
 * Module dependencies
 */
var express = require("express")
  , home = require("./routes/home")
  , users = require("./routes/users")
  , api = require("./routes/api");

var app = module.exports = express();

app.configure(function() {
  if(process.env.NODE_ENV!=='test') app.use(express.logger("dev"));
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

// API resources
app.get("/api", api.index());
app.post("/api", api.create());
app.get("/api/:id", api.get());
app.put("/api/:id", api.update());
app.del("/api/:id", api.remove());

