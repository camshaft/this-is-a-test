/**
 * User resource
 */


/*
 * Module dependencies
 */


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
exports.index = function() {
  return function index(req, res, next) {
    res.send(users);
  };
};

/*
 * Create a user
 */
exports.create = function() {
  return function create(req, res, next) {
    users.push(req.body);
    var url = "/"+(users.length-1);
    res.set("Location", url);
    res.send(202);
  };
};

/*
 * Get a user
 */
exports.get = function() {
  return function get(req, res, next) {
    var id = parseInt(req.params.id)
    if (users[id]) {
      res.send(users[id])
    }
    else {
      res.send(404);
    }
  };
};

/*
 * Update a user
 */
exports.update = function() {
  return function update(req, res, next) {
    var id = parseInt(req.params.id);

    if(!users[id]) return res.send(404);

    Object.keys(req.body).forEach(function(key) {
      users[id][key] = req.body[key];
    });

    res.send(users[id]);
  };
};

/*
 * Remove a user
 */
exports.remove = function() {
  return function remove(req, res, next) {
    delete users[parseInt(req.params.id)];
    res.send(204);
  };
};