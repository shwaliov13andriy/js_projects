let name = prompt("Type your name/nickname:");
let age = Number(prompt("Age:"));
let city = prompt("City:");
let color = prompt("Favourite color:");
let works = prompt("Do you work? (yeah/no)");

let isAdult = age >= 18;

console.log("Name:", name, "Type:", typeof name);
console.log("Age:", age, "Type:", typeof age);
console.log("City:", city, "Type:", typeof city);
console.log("Fav color:", color, "Type:", typeof color);
console.log("Working:", works, "Type:", typeof works);
console.log("Adult hood:", isAdult, "Type:", typeof isAdult);

alert(
  "Survey:\n" +
  "Name: " + name + " (type: " + typeof name + ")\n" +
  "Age: " + age + " (type: " + typeof age + ")\n" +
  "City: " + city + " (type: " + typeof city + ")\n" +
  "Fav color: " + color + " (type: " + typeof color + ")\n" +
  "Working: " + works + " (type: " + typeof works + ")\n" +
  "Adult hood: " + isAdult + " (type: " + typeof isAdult + ")"
);
