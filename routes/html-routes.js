/* Holds all the routes for the html pages */

/* Bring in dependencies */
var path = require("path");

/* Routes */
module.exports = function(app) {

  var ex = {
  }

  /* Homepage route */
  app.get("/" , function(req , res){
    res.render("index" , ex);
  });
}