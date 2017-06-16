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
// setStatus()
// deleteTask()

class Todos {
  constructor() {
    this.todos = [];
  };

  getTodosList() {
    return this.todos;
  };

  getTodo(id) {
    return this.todos.filter((todo) => todo.id.toString() === id );
  };

  addTask(subj, detail) {
    var task = {
      id: this.todos.length + 1,
      subj: subj,
      detail: detail,
      status: "pending"
    };
    this.todos.push(task);
    return task;
  };

}

module.exports = {Todos};
