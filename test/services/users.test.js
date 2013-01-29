var should = require("should")
  , users = require("../../services/users");

describe("users", function() {

  describe("#list()", function() {

    it("should fetch all of the users", function(done) {
      users.list(function(err, users) {
        if(err) return done(err);
        should.exist(users);
        users.should.be.a('object');
        users.length.should.be.above(5);
        done()
      });
    });

  });

  describe("#create()", function() {

    it("should create a user in the database", function(done) {
      var form = {
        username: "timshadel",
        birthday: "01-02-1923"
      };
      users.create(form, function(err, id) {
        if(err) return done(err);
        should.exist(id);
        done();
      });
    });

    it("should fail with an invalid name", function(done) {
      var form = {
        username: "$nicjohnson$",
        birthday: "11-11-1111"
      };
      users.create(form, function(err, id) {
        should.exist(err);
        should.not.exist(id);
        done();
      });
    });
    
  });

  describe("#get()", function() {

    var id;

    var person = {
      username: "dcrews",
      birthday: "10-54-1285"
    }

    beforeEach(function(done) {
      users.create(person, function(err, _id) {
        if(err) return done(err);
        id = _id;
        done();
      });
    });

    it("should fetch information for a single user", function(done) {
      users.get(id, function(err, user) {
        if(err) return done(err);
        should.exist(user);
        should.exist(user.username);
        should.exist(user.birthday);
        user.should.eql(person);
        done();
      });
    });

    it("should return an error when it can't find a user", function(done) {
      users.get("non-existant-id", function(err, user) {
        should.not.exist(user);
        should.exist(err);
        done();
      });
    });
    
  });

  describe("#update()", function() {

    var id;

    beforeEach(function(done) {
      users.create({username: "misbach", birthday: "-10"}, function(err, _id) {
        if(err) return done(err);
        id = _id;
        done();
      });
    });

    it("should update a user's information", function(done) {
      users.update(id, {birthday: "12-12-2001"}, function(err, user) {
        if(err) return done(err);
        should.exist(user);
        should.exist(user.birthday);
        user.birthday.should.eql("12-12-2001");
      });
    });

  });

  describe("#remove", function() {

    var id;

    beforeEach(function(done) {
      users.create({username: "james", birthday: ""}, function(err, _id) {
        if(err) return done(err);
        id = _id;
        done();
      });
    });

    it("should remove a user from the system", function(done) {

      users.remove(id, function(err) {
        if(err) return done(err);

        users.get(id, function(err, user) {
          should.not.exist(user);
          should.exist(err);
        });
      })

    });

  });

});