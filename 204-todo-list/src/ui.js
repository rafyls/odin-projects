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

  button1.addEventListener("click", handleExpandTask);
  button2.addEventListener("click", handleModifyTask);
  button3.addEventListener("click", handleDeleteTask);

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
}

function handleExpandTask() {

}

function handleModifyTask() {

}

function handleDeleteTask() {

}

export { addTaskUI };