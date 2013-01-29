/*
 * Module dependencies
 */
var request = require("superagent");

var users = [
  {username:"camshaft", birthday: "1234"},
  {username:"camshaft", birthday: "1234"},
  {username:"camshaft", birthday: "1234"},
  {username:"camshaft", birthday: "1234"},
  {username:"camshaft", birthday: "1234"},
  {username:"camshaft", birthday: "1234"}
];

/*
 * List the users
 */
exports.list = function(done) {
  done(null, users);
};

/*
 * Create a user
 */
exports.create = function(form, done) {
  if (form.username.indexOf("$") !== -1) {
    return done(new Error("Username must not contain dollar signs."))
  };
  users.push(form);
  done(null, users.length-1);
};

/*
 * Get a user
 */
exports.get = function(id, done) {
  if (!users[id]) {
    return done(new Error("Cannot find user with id '"+id+"'"));
  };
  done(null, users[id]);
};

/*
 * Update a user
 */
exports.update = function(id, form, done) {
  done(null, form);
};

/*
 * Remove a user
 */
exports.remove = function(id, done) {
  users.splice(id, 1);
  done(null);
};
