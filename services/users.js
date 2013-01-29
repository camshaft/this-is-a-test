/*
 * Module dependencies
 */
var request = require("superagent");

/*
 * Defines
 */
var API_ROOT = process.env.API_ROOT || "http://localhost:5000/api";

/*
 * List the users
 */
exports.list = function(done) {
  request
    .get(API_ROOT)
    .end(function(err, res) {
      if(err) return done(err);

      done(err, res.body)
    });
};

/*
 * Create a user
 */
exports.create = function(form, done) {
  if (form.username.indexOf("$") !== -1) {
    return done(new Error("Username must not contain dollar signs."))
  };
  request
    .post(API_ROOT)
    .send(form)
    .end(function(err, res) {
      if(err) return done(err);

      if (res.headers.location) {
        done(err, res.headers.location);
      }
      else {
        done(new Error(res.text));
      };
    });
};

/*
 * Get a user
 */
exports.get = function(id, done) {
  request
    .get(API_ROOT+id)
    .end(function(err, res) {
      if (!res.ok) return done(new Error(res.text));
      done(err, res.body);
    });
};

/*
 * Update a user
 */
exports.update = function(id, form, done) {
  request
    .put(API_ROOT+id)
    .send(form)
    .end(function(err, res) {
      if(err) return done(err);

      if (res.ok) {
        done(err, res.body);
      }
      else {
        done(new Error(res.text));
      };
    });
};

/*
 * Remove a user
 */
exports.remove = function(id, done) {
  request
    .del(API_ROOT+id)
    .end(function(err, res) {
      if(err) return done(err);

      if (res.ok) {
        done();
      }
      else {
        done(new Error(res.text));
      };
    });
};
