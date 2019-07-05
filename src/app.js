// Import express
var express = require('express');
// Import Body parser
var bodyParser = require('body-parser');
// Import Mongoose
var mongoose = require('mongoose');
// Import cors
var cors = require('cors');
// Import routes
var apiRoutes = require('./routes/api.route');

// Initialize the app
var app = express();

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Use Api routes in the App - TODO
app.use(cors());
app.use('/', apiRoutes);

// Launch app to listen to specified port
app.listen(3000, () => {
    console.log("Running on port " + 3000);
});
