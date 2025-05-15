// ambil elemen
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const clearTaskButton = document.getElementById("clearTaskButton");
const taskList = document.getElementById("taskList");

// event tambah task
addTaskButton.addEventListener("click", function () {
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Task tidak boleh kosong!");
    return;
  }

  const li = document.createElement("li");
  li.innerText = task;
  taskList.appendChild(li);

  taskInput.value = "";
});

// event clear task
clearTaskButton.addEventListener("click", function () {
  taskList.innerHTML = "";
});
