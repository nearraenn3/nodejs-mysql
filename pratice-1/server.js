const express = require('express');
const sql = require('./database');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello');
})

require("./routes/route")(app);

app.listen('3000', () => {
    console.log('Server started on port 3000');
})