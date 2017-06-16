// [{
//   id: 1
//   subj: 'Clean the room',
//   detail: 'clean the room in the morning',
//   status: 'done'
// }]

/* Task in Todos */
// getTodosList()
// getTodo()
// addTask()
// editTask()
// changeStatus()
// deleteTask()

var _ = require('lodash');

class Todos {
  constructor() {
    this.todos = [];
  };

  getTodosList() {
    return this.todos;
  };

  getTodo(id) {
    return this.todos.filter((todo) => todo.id.toString() === id )[0];
  };

  addTask(task) {
    var obj = {
      id: this.todos.length + 1,
      subj: task.subj,
      detail: task.detail,
      status: "pending"
    };
    this.todos.push(obj);
    return obj;
  };

  editTask(id, task) {
    var arrayPointer = id-1;
    var todo = this.getTodo(id);
    if(!todo) return;

    if(_.isUndefined(task.subj)) task.subj = "";
    if(_.isUndefined(task.detail)) task.detail = "";

    todo.subj = task.subj;
    todo.detail = task.detail;

    this.todos[arrayPointer] = todo;
    return todo;
  };

  deleteTask(id) {
    var todo = this.getTodo(id);
    if(!todo) return;

    this.todos = this.todos.filter((todo) => todo.id.toString() !== id );
    return todo;
  };

  changeStatus(id) {
    var arrayPointer = id-1;
    var todo = this.getTodo(id);
    if(!todo) return;

    if(todo.status === "pending") {
      todo.status = "done";
    } else if (todo.status = "done") {
      todo.status = "pending";
    }

    this.todos[arrayPointer] = todo;
    return todo;
  };
};

module.exports = {Todos};
