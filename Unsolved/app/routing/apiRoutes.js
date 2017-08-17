var connection = require("../config/connection");

module.exports = function(app) { 
/*---------------------
    Get Routes
----------------------*/
  app.get("/name", function(req, res) {
    connection.query("SELECT * FROM users", function (err, result) {
      res.json(result);
    });
  });

/*---------------------
    Post Routes
----------------------*/
  app.post("/name", function(req, res) {
    console.log(req.body);
    connection.query("INSERT INTO users SET ?",req.body, function (err, result) {
      console.log(result);
      res.json(result);
    });
  });

/*---------------------
    Delete Routes
----------------------*/

/*---------------------
    Put Routes
----------------------*/
  
};
