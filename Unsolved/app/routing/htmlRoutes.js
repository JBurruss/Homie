var path = require("path");

module.exports = function(app) {
  app.get("/admin", function(req, res) {
    // If the /admin page is requested, send admin.html
    res.sendFile(path.join(__dirname, "/../public/admin.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });

  app.get("*", function(req, res) {
    // If anything is requested look in the public folder for that item
    res.sendFile(path.join(__dirname, "/../public", req.url));
  });
};