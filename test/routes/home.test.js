var should = require("should")
  , app = require("../..")
  , request = require("supertest");

describe("/", function() {

  it("should load the home page", function(done) {

    request(app)
      .get("/")
      .expect(/Welcome/)
      .end(function(err) {
        done(err);
      });

  });

  it("should show a login form", function(done) {

    request(app)
      .get("/")
      .expect(/<form/)
      .end(function(err) {
        done(err)
      });

  });

  it("should login the user", function(done) {

    request(app)
      .post("/")
      .send("username=camshaft")
      .send("username=testing123")
      .end(function(err, res) {
        if(err) return done(err);
        res.redirect.should.be.true;
        done()
      });

  });

});
