/*
 * Module dependencies
 */
var request = require("superagent");

/*
 * List the users
 */
exports.list = function(done) {
  done(null, [{}, {}, {}, {}, {}, {}]);
};

/*
 * Create a user
 */
exports.create = function(form, done) {
  done(null, "this-is-an-id");
};

/*
 * Get a user
 */
exports.get = function(id, done) {
  done(null, {});
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
  done(null);
};
