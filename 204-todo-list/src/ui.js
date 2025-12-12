import { projects, currentProject, convertDateFormDisplay } from "./listeners.js";

function addTaskUI(task) {
  const mainContent = document.body.querySelector(".mainContent");

  const div = document.createElement("div");
  div.classList.add("taskItem");

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  const id = "task-" + task.id;
  input.setAttribute("id", id);
  
  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.classList.add("taskItem-title");
  label.textContent = task.title;

  const button1 = document.createElement("button");
  button1.classList.add("taskItem-detailsButton");
  const i1 = document.createElement("i");
  i1.classList.add("fa-solid", "fa-ellipsis");

  const button2 = document.createElement("button");
  button2.classList.add("taskItem-modifyTaskButton");
  const i2 = document.createElement("i");
  i2.classList.add("fa-solid", "fa-pen");

  const button3 = document.createElement("button");
  button3.classList.add("taskItem-deleteTaskButton");
  const i3 = document.createElement("i");
  i3.classList.add("fa-solid", "fa-trash-can");

  const hr = document.createElement("hr");
  hr.classList.add("mainContent-sep");

  div.appendChild(input);
  div.appendChild(label);
  div.appendChild(button1);
  div.appendChild(button2);
  div.appendChild(button3);

  button1.appendChild(i1);
  button2.appendChild(i2);
  button3.appendChild(i3);

  mainContent.appendChild(div);
  mainContent.appendChild(hr);

  let isExpanded = false;

  button1.addEventListener("click", function(event) {
    if (!isExpanded) {
      handleExpandTask(event, div);
      isExpanded = true;
    } else {
      handleCollapseTask(event, div);
      isExpanded = false;
    }
  });
  button2.addEventListener("click", function(event) {
    handleModifyTask(event, div);
  });
  button3.addEventListener("click", function(event) {
    handleDeleteTask(event, div);
  });
}

function handleExpandTask(event, taskUI) {
  const input = taskUI.querySelector('input[type="checkbox"]');
  const idvalue = input.getAttribute("id");
  const idarr = idvalue.split("-");
  const taskid = Number(idarr[1]);

  const task = projects[currentProject].tasks[taskid];

  const div = document.createElement("div");
  div.classList.add("taskItem-details");

  const label = input.nextElementSibling;

  const newlabel = document.createElement("label");
  newlabel.setAttribute("for", idvalue);
  newlabel.classList.add("taskItem-title");
  newlabel.textContent = task.title;

  const pdesc = document.createElement("p");
  pdesc.classList.add("taskItem-description");
  pdesc.textContent = task.description;

  const div1 = document.createElement("div");
  div1.classList.add("taskItem-dateDetails");

  const div11 = document.createElement("div");
  div11.classList.add("taskItem-duedate");

  const div12 = document.createElement("div");
  div12.classList.add("taskItem-priority");

  const i11 = document.createElement("i");
  i11.classList.add("fa-regular", "fa-calendar-days", "taskItem-duedateIcon");
  const p11 = document.createElement("p");
  p11.textContent = task.dueDateUI;

  const i12 = document.createElement("i");
  i12.classList.add("fa-solid", "fa-list-ol", "taskItem-priorityIcon");
  const p12 = document.createElement("p");
  p12.textContent = task.priority;

  div.appendChild(newlabel);
  div.appendChild(pdesc);
  div.appendChild(div1);
  div1.appendChild(div11);
  div1.appendChild(div12);

  div11.appendChild(i11);
  div11.appendChild(p11);
  div12.appendChild(i12);
  div12.appendChild(p12);

  label.replaceWith(div);
}

function handleCollapseTask(event, taskUI) {
  const input = taskUI.querySelector('input[type="checkbox"]');
  const idvalue = input.getAttribute("id");
  const idarr = idvalue.split("-");
  const taskid = Number(idarr[1]);

  const task = projects[currentProject].tasks[taskid];

  const div = input.nextElementSibling;

  const newlabel = document.createElement("label");
  newlabel.setAttribute("for", idvalue);
  newlabel.classList.add("taskItem-title");
  newlabel.textContent = task.title;

  div.replaceWith(newlabel);
}

function handleModifyTask(event, taskUI) {
  const input = taskUI.querySelector('input[type="checkbox"]');
  const idvalue = input.getAttribute("id");
  const idarr = idvalue.split("-");
  const taskid = Number(idarr[1]);

  const task = projects[currentProject].tasks[taskid];

  const mainContent = document.body.querySelector(".mainContent");
  const dialog = document.createElement("dialog");
  dialog.classList.add("newTaskDialog");

  const div1 = document.createElement("div");
  div1.classList.add("newTaskDialog-heading");

  const div1h2 = document.createElement("h2");
  div1h2.textContent = "Edit Task";

  const div1i = document.createElement("i");
  div1i.classList.add("fa-solid", "fa-circle-xmark", "fa-2x", "newTaskDialog-closeIcon");

  const form = document.createElement("form");
  form.classList.add("newTaskDialog-form");
  form.setAttribute("method", "dialog");

  const label1 = document.createElement("label");
  label1.setAttribute("for", "title");
  label1.textContent = "Title";
  const input1 = document.createElement("input");
  input1.setAttribute("type", "text");
  input1.setAttribute("id", "title");
  input1.setAttribute("required", "required");
  input1.setAttribute("autofocus", "autofocus");
  input1.value = task.title;

  const label2 = document.createElement("label");
  label2.setAttribute("for", "description");
  label2.textContent = "Description";
  const textarea = document.createElement("textarea");
  textarea.setAttribute("name", "description");
  textarea.setAttribute("id", "description");
  textarea.setAttribute("required", "required");
  textarea.value = task.description;

  const label3 = document.createElement("label");
  label3.setAttribute("for", "duedate");
  label3.textContent = "Due Date";
  const input3 = document.createElement("input");
  input3.setAttribute("type", "date");
  input3.setAttribute("id", "duedate");
  input3.setAttribute("name", "duedate");
  input3.setAttribute("required", "required");
  input3.value = task.dueDate;

  const div2 = document.createElement("div");
  div2.classList.add("newTaskDialog-radioGroup");

  const div2p = document.createElement("p");
  div2p.textContent = "Priority";

  const div2div3 = document.createElement("div");
  const div2div4 = document.createElement("div");
  const div2div5 = document.createElement("div");

  const input4 = document.createElement("input");
  input4.setAttribute("type", "radio");
  input4.setAttribute("id", "urgent");
  input4.setAttribute("name", "priority");
  input4.setAttribute("value", "Urgent");
  input4.setAttribute("required", "required");
  const label4 = document.createElement("label");
  label4.setAttribute("for", "urgent");
  label4.textContent = "Urgent";
  label4.style.marginLeft = "5px";

  const input5 = document.createElement("input");
  input5.setAttribute("type", "radio");
  input5.setAttribute("id", "important");
  input5.setAttribute("name", "priority");
  input5.setAttribute("value", "Important");
  const label5 = document.createElement("label");
  label5.setAttribute("for", "important");
  label5.textContent = "Important";
  label5.style.marginLeft = "5px";

  const input6 = document.createElement("input");
  input6.setAttribute("type", "radio");
  input6.setAttribute("id", "low");
  input6.setAttribute("name", "priority");
  input6.setAttribute("value", "Low");
  const label6 = document.createElement("label");
  label6.setAttribute("for", "low");
  label6.textContent = "Low";
  label6.style.marginLeft = "5px";

  switch (task.priority) {
    case "Urgent":
      input4.checked = true;
      break;
    case "Important":
      input5.checked = true;
      break;
    case "Low":
      input6.checked = true;
      break;
  }

  const div3 = document.createElement("div");
  div3.classList.add("newTaskDialog-buttons");

  const button1 = document.createElement("button");
  button1.setAttribute("type", "low");
  button1.setAttribute("class", "newTaskDialog-buttonsCancel");
  button1.setAttribute("value", "cancel");
  button1.textContent = "Cancel";

  const button2 = document.createElement("button");
  button2.setAttribute("type", "submit");
  button2.setAttribute("class", "newTaskDialog-buttonsAdd");
  button2.setAttribute("value", "edit");
  button2.textContent = "Edit";

  dialog.appendChild(div1);
  dialog.appendChild(form);

  div1.appendChild(div1h2);
  div1.appendChild(div1i);

  form.appendChild(label1);
  form.appendChild(input1);
  form.appendChild(label2);
  form.appendChild(textarea);
  form.appendChild(label3);
  form.appendChild(input3);
  form.appendChild(div2);
  form.appendChild(div3);

  div2.appendChild(div2p);
  div2.appendChild(div2div3);
  div2.appendChild(div2div4);
  div2.appendChild(div2div5);

  div2div3.appendChild(input4);
  div2div3.appendChild(label4);
  div2div4.appendChild(input5);
  div2div4.appendChild(label5);
  div2div5.appendChild(input6);
  div2div5.appendChild(label6);

  div3.appendChild(button1);
  div3.appendChild(button2);

  mainContent.appendChild(dialog);

  div1i.addEventListener("click", () => {
    dialog.close();
    const element = dialog;
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    mainContent.removeChild(dialog);
  });

  dialog.showModal();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    task.title = input1.value;
    task.description = textarea.value;
    task.dueDate = input3.value;
    task.dueDateUI = convertDateFormDisplay(input3.value);
    if (input4.checked) {
      task.priority = input4.value;
    } else if (input5.checked) {
      task.priority = input5.value;
    } else if (input6.checked) {
      task.priority = input6.value;
    }

    const title = taskUI.querySelector('.taskItem-title');
    const description = taskUI.querySelector('.taskItem-description');
    const duedate = taskUI.querySelector('.taskItem-duedate p');
    const priority = taskUI.querySelector('.taskItem-priority p');

    title.textContent = task.title;
    if (description !== null) {
      description.textContent = task.description;
    }
    if (duedate !== null) {
      duedate.textContent = task.dueDateUI;
    }
    if (priority !== null) {
      priority.textContent = task.priority;
    }

    const element = dialog;
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    mainContent.removeChild(dialog);
  });
}

function handleDeleteTask(event, taskUI) {
  const input = taskUI.querySelector('input[type="checkbox"]');
  const idvalue = input.getAttribute("id");
  const idarr = idvalue.split("-");
  const taskid = Number(idarr[1]);

  projects[currentProject].tasks[taskid] = null;

  const element = taskUI;
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  const mainContent = document.body.querySelector(".mainContent");  
  const hr = taskUI.nextElementSibling;
  mainContent.removeChild(taskUI);
  mainContent.removeChild(hr);
}

function addProjectUI(project) {
  const mainContent = document.body.querySelector(".mainContent");
  const sidebar = document.body.querySelector(".sidebar");

  const projectNameUI = mainContent.querySelector(".mainContent-projectName");
  projectNameUI.textContent = project.name;
  
  const div = document.createElement("div");
  div.classList.add("projects");

  const button1 = document.createElement("button");
  button1.classList.add("todayProjectButton", "userProjectsButton");
  const id = "project-" + project.id;
  button1.setAttribute("id", id);
  button1.textContent = project.name;

  const button2 = document.createElement("button");
  button2.classList.add("projects-modifyProjectButton", "taskItem-modifyTaskButton");

  const button3 = document.createElement("button");
  button3.classList.add("projects-deleteProjectButton", "taskItem-modifyTaskButton");

  const i21 = document.createElement("i");
  i21.classList.add("fa-solid", "fa-pen");

  const i31 = document.createElement("i");
  i31.classList.add("fa-solid", "fa-trash-can");

  div.appendChild(button1);
  div.appendChild(button2);
  div.appendChild(button3);

  button2.appendChild(i21);
  button3.appendChild(i31);

  sidebar.appendChild(div);

  button1.addEventListener("click", function(event) {
    handleReadProject(event, div);
  });

  button2.addEventListener("click", function(event) {
    handleModifyProject(event, div);
  });

  button3.addEventListener("click", function(event) {
    handleDeleteProject(event, div);
  });
}

function handleReadProject(event, projectUI) {
  
}

function handleModifyProject(event, projectUI) {
  const input = projectUI.querySelector('button');
  const idvalue = input.getAttribute("id");
  const idarr = idvalue.split("-");
  const projectid = Number(idarr[1]);

  const project = projects[projectid];

  const mainContent = document.body.querySelector(".mainContent");
  
  const dialog = document.createElement("dialog");
  dialog.classList.add("newTaskDialog", "newProjectDialog");

  const div1 = document.createElement("div");
  div1.classList.add("newTaskDialog-heading");

  const div1h2 = document.createElement("h2");
  div1h2.textContent = "Edit Project Name";

  const div1i = document.createElement("i");
  div1i.classList.add("fa-solid", "fa-circle-xmark", "fa-2x", "newTaskDialog-closeIcon");

  const form = document.createElement("form");
  form.classList.add("newTaskDialog-form", "newProjectDialog-form");
  form.setAttribute("method", "dialog");

  const label1 = document.createElement("label");
  label1.setAttribute("for", "titleProject");
  label1.textContent = "Project Name";
  const input1 = document.createElement("input");
  input1.setAttribute("type", "text");
  input1.setAttribute("id", "titleProject");
  input1.setAttribute("required", "required");
  input1.setAttribute("autofocus", "autofocus");
  input1.value = project.name;

  const div3 = document.createElement("div");
  div3.classList.add("newTaskDialog-buttons", "newProjectDialog-buttons");

  const button1 = document.createElement("button");
  button1.setAttribute("type", "low");
  button1.setAttribute("class", "newTaskDialog-buttonsCancel");
  button1.setAttribute("value", "cancel");
  button1.textContent = "Cancel";

  const button2 = document.createElement("button");
  button2.setAttribute("type", "submit");
  button2.setAttribute("class", "newTaskDialog-buttonsAdd");
  button2.setAttribute("value", "edit");
  button2.textContent = "Edit";

  dialog.appendChild(div1);
  dialog.appendChild(form);

  div1.appendChild(div1h2);
  div1.appendChild(div1i);

  form.appendChild(label1);
  form.appendChild(input1);
  form.appendChild(div3);

  div3.appendChild(button1);
  div3.appendChild(button2);

  mainContent.appendChild(dialog);

  div1i.addEventListener("click", () => {
    dialog.close();
    const element = dialog;
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    mainContent.removeChild(dialog);
  });

  dialog.showModal();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    project.name = input1.value;

    const projectNameSidebar = projectUI.querySelector('.userProjectsButton');
    const projectNameUI = mainContent.querySelector(".mainContent-projectName");

    projectNameSidebar.textContent = project.name;
    projectNameUI.textContent = project.name;

    const element = dialog;
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    mainContent.removeChild(dialog);
  });
}

function handleDeleteProject(event, projectUI) {
  
}

export { addTaskUI, addProjectUI };