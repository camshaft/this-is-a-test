/**
 * Home
 */


/*
 * Module dependencies
 */


/*
 * Show the homepage
 */
exports.index = function() {
  return function index(req, res, next) {
    res.send("Welcome!");
  };
};
