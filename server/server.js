var express = require('express');
var bodyParser = require('body-parser');

var {Todos} = require('./todos');

var port = process.env.PORT || 3000;
var app = express();
var todos = new Todos();

app.use(bodyParser.json());

// /
app.get('/', (req, res) => {
  res.send("TODO API");
});

// /getTodosList
app.get('/gettodoslist', (req, res) => {
  var list = todos.getTodosList();
  res.send(list);
});

// /getTodo
app.get('/gettodo/:id', (req, res) => {
  var todo = todos.getTodo(req.params.id);
  res.send(todo);
});

// /addTask
app.post('/addtask', (req, res) => {
  var task = todos.addTask(req.body.subj, req.body.detail);
  res.send(task);
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
