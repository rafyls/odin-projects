function handleAddTask() {
  const addTaskDialog = document.body.querySelector(".newTaskDialog");
  addTaskDialog.showModal();
}

function handleCloseDialog() {
  const addTaskDialog = document.body.querySelector(".newTaskDialog");
  const addTaskDialogForm = document.body.querySelector(".newTaskDialog .newTaskDialog-form");

  const addProjectDialog = document.body.querySelector(".newProjectDialog");
  const addProjectDialogForm = document.body.querySelector(".newProjectDialog .newProjectDialog-form");

  addTaskDialogForm.reset();
  addProjectDialogForm.reset();

  addProjectDialog.close();
  addTaskDialog.close();
}

function handleCreateProject() {
  const addProjectDialog = document.body.querySelector(".newProjectDialog");
  
  addProjectDialog.showModal();
}

export {handleAddTask, handleCloseDialog, handleCreateProject};