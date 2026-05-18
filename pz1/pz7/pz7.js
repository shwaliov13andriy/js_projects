"use strict";

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTask");
const list = document.getElementById("taskList");

function loadTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
  list.innerHTML = "";
  loadTasks().forEach((t, i) => {
    const li = document.createElement("li");
    li.textContent = t;
    li.dataset.index = i;
    list.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;
  const tasks = loadTasks();
  tasks.push(text);
  saveTasks(tasks);
  render();
  input.value = "";
});

list.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    const tasks = loadTasks();
    tasks.splice(e.target.dataset.index, 1);
    saveTasks(tasks);
    render();
  }
});

render();
