const express = require('express');
const sql = require('./database.js');
const bodyParser = require('body-parser');

// Set up app to a new express app
const app = express();

// Parse req of content-type: application/json
app.use(bodyParser.json());

require("./routes/routes")(app);

// Set port. listen for req
app.listen('3000', () => {
    console.log('Server started on port 3000');
})

