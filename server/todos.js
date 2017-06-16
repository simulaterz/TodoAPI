// [{
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
    return "from getTodosList !"
  };

  addTask(subj, detail) {
    var task = {subj: subj, detail: detail, status: "pending"};
    this.todos.push(task);
    return task;
  }
  
}

module.exports = {Todos};
