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
    res.send(
      '<h1>Welcome!</h1>'+
      '<form method="post">'+
        '<input name="username" type="text">'+
        '<input name="password" type="password">'+
      '</form>'
    );
  };
};
