"use strict";
console.log("java script added");

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.getElementById("taskList");

console.log(taskInput, addTaskButton, taskList);

addTaskButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    console.log("added task:", taskText);

    taskInput.value = "";
  } else {
    console.log("Empty space, task isnt added.");
  }
});

taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Deleted task:", event.target.textContent);
    event.target.remove();
  }
}, false);

taskList.addEventListener("click", function (event) {
  console.log("Selected:", event.target);
}, true);
