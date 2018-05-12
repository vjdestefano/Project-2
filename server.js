/* Bring in dependencies */
const express = require("express");
const bodyParser = require("body-parser");

/* Setup express */
var app = express();
var PORT = process.env.PORT || 3000;

/* Models */
var db = require("./models")

/* Add any static directories here */

/* Setup Body Parser */
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

/* Add routes here */

/* Sync database and listen remember to remove the force true when pushing to production */
db.sequelize.sync({ force: true}).then(function(){
  app.listen(PORT , function(){
    console.log("App listening at http://localhost:" + PORT);
  })
})


