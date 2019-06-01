//2. Your `server.js` file should require the basic npm packages 
//we've used in class: `express` and `path`.

// Dependencies
var express = require("express");
var path = require("path");

// Set up Express App
var app = express();

// Set the port of our application
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public")); //the PUBLIC folder has to be on the root 
//and CSS should be inside of PUBLIC
//THEN do not spell out the "public" folder in the path to CSS file.


// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
