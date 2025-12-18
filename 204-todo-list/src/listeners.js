import { Task, Project } from "./data.js";
import { addTaskUI, addProjectUI } from "./ui.js";
import { format } from "date-fns";

let projects = [];
let currentProjectId = null;

function addProject(project) {
  projects.push(project);
}

function setCurrentProject(id) {
  currentProjectId = id;
}

function initDefaultProject() {
  const todayProject = new Project("Today", []);
  addProject(todayProject);
  setCurrentProject(todayProject.id);
}

const state = {
  get projects() {
    return projects;
  },
  get currentProjectId() {
    return currentProjectId;
  }
};

initDefaultProject();

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

function handleSubmitDialogTask() {
  const addNewTaskForm = document.body.querySelector(".newTaskDialog-form");

  const titleInput = addNewTaskForm.querySelector("#title");
  const descriptionInput = addNewTaskForm.querySelector("#description");
  const duedateInput = addNewTaskForm.querySelector("#duedate");
  const radioInputs = addNewTaskForm.querySelectorAll(".newTaskDialog-form input[type=\"radio\"]");
  let priorityInput = null;
  radioInputs.forEach((radio) => {
    if (radio.checked) {
      priorityInput = radio.value;
    }
  });

  const dueDateui = convertDateFormDisplay(duedateInput.value);

  const task = new Task(titleInput.value, descriptionInput.value, dueDateui,
  duedateInput.value, priorityInput);

  const currentProject = state.projects[state.currentProjectId];
  
  currentProject.tasks.push(task);

  addTaskUI(task);

  addNewTaskForm.reset();
}

function convertDateFormDisplay(dateInput) {
  const d = dateInput.split('-');
  d.forEach((element) => {
    element = Number(element);
  });
  const dateOutput = format(new Date(d[0], d[1]-1, d[2]), "eee, d MMM yyyy");
  return dateOutput;
}

function handleSubmitDialogProject() {
  const addNewProjectForm = document.body.querySelector(".newProjectDialog-form");
  
  const projectNameInput = addNewProjectForm.querySelector("#titleProject");
  const projectName = projectNameInput.value;

  const project = new Project(projectName, []);

  setCurrentProject(project.id); 
  addProject(project);

  addProjectUI(project);

  addNewProjectForm.reset();
}

export {handleAddTask, handleCloseDialog, handleCreateProject, 
handleSubmitDialogTask, state, setCurrentProject, convertDateFormDisplay, handleSubmitDialogProject};