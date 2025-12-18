class Task {
  static id = 0;
  constructor (title, description, dueDateUI, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDateUI = dueDateUI;
    this.dueDate = dueDate;
    this.priority = priority;
    
    this.id = Task.id;
    Task.id = Task.id + 1;
  }
}

class Project {
  static id = 0;
  constructor (name, tasks) {
    this.name = name;
    this.tasks = tasks;
    this.id = Project.id;
    Project.id = Project.id + 1;
  }
  
  getTaskById(taskId) {
    return this.tasks.find(task => task.id === taskId);
  }
}

export {Task, Project};