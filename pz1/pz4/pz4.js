"use strict";
console.log("java script added");

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.getElementById("taskList");
const deleteTaskButton = document.getElementById("deleteTask");
const mainTitle = document.querySelector("h1");

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
  if (event.target.tagName === "LI") {
    console.log("Selected:", event.target.textContent);
  }
}, true);

// mainTitle.addEventListener("click", function () {
//   const newTitle = document.createElement("h1");
//   newTitle.textContent = "Привіт";
//   mainTitle.insertAdjacentElement("afterend", newTitle);
//   newTitle.addEventListener("click", function () {
//     console.log("Deleted h1:", newTitle.textContent);
//     newTitle.remove();
//   });
// });

// deleteTask.addEventListener("click", function () {
//  if (event.target.tagName === "H1") {
//     event.H1.remove();}
//   });
  deleteTaskButton.addEventListener("click", function () {
  if (mainTitle) {
    console.log("Deleted h1:", mainTitle.textContent);
    mainTitle.remove();
  }
});
