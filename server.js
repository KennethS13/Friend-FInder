// Dependencies
let express = require("express");
let path = require("path");

// Sets up the Express App
let app = express();
let PORT = process.env.PORT || 8080;

// Sets up the public directory to access CSS files
app.use(express.static(path.join(__dirname, "./app/public")));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the application routes
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("Port Working: " + PORT); 
});