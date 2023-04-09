const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
  if (taskInput.value !== "") {
    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = taskInput.value;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTask);
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskList.removeChild(taskItem);
}
