var express = require('express');
var bodyParser = require('body-parser');

var {Todos} = require('./todos');

var port = process.env.PORT || 3000;
var app = express();
var todos = new Todos();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Server is opened");
});

app.post('/addtask', (req, res) => {
    var task = todos.addTask(req.body.subj, req.body.detail);
    res.send(task);
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});
