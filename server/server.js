var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Server is opened");
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});
