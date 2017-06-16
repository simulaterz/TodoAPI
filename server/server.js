var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

var {Todos} = require('./todos');

var port = process.env.PORT || 3000;
var app = express();
var todos = new Todos();

app.use(bodyParser.json());

//
app.get('/', (req, res) => {
  res.send("TODO API");
});

// getTodosList
app.get('/gettodoslist', (req, res) => {
  var list = todos.getTodosList();
  if(_.isEmpty(list)) return res.status(404).send();

  res.send(list);
});

// getTodo/:id
app.get('/gettodo/:id', (req, res) => {
  var todo = todos.getTodo(req.params.id);
  if(_.isUndefined(todo)) return res.status(404).send();

  res.send(todo);
});

// addTask
app.post('/addtask', (req, res) => {
  var task = _.pick(req.body, ['subj', 'detail']);
  if(_.isUndefined(task.subj) || _.isUndefined(task.detail)) return res.status(400).send();

  var addtask = todos.addTask(task);
  res.send(addtask);
});

// editTask/:id
app.patch('/edittask/:id', (req, res) => {
  var id = req.params.id;
  var task = _.pick(req.body, ['subj', 'detail']);

  var edittask = todos.editTask(id, task);
  if(!edittask) return res.status(404).send();

  res.send(edittask);
});

// deleteTask/:id
app.delete('/deletetask/:id', (req, res) => {
  var deletetask = todos.deleteTask(req.params.id);
  if(!deletetask) return res.status(404).send();

  res.send(deletetask);
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
