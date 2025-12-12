import "./assets/css/normalize.css";
import "./style.css";

import {handleAddTask, handleCloseDialog, handleCreateProject, 
handleSubmitDialogTask} from "./listeners.js";

const addNewTaskButton = document.body.querySelector(".addNewTaskButton");
addNewTaskButton.addEventListener("click", handleAddTask);

const addNewProjectButton = document.body.querySelector(".newProjectButton");
addNewProjectButton.addEventListener("click", handleCreateProject);

const closeModalDialogButtons = document.body.querySelectorAll(".newTaskDialog-closeIcon");
closeModalDialogButtons.forEach((button) => {
  button.addEventListener("click", handleCloseDialog);
})

const addNewTaskForm = document.body.querySelector(".newTaskDialog-form");
addNewTaskForm.addEventListener("submit", handleSubmitDialogTask);