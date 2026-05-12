// "use strict";
// import { greet, add, multiply } from "./utils.js";
// console.log("Модульний код підключено!");
// greet("Студент");
// console.log("10 + 5 =", add(10, 5));
// console.log("10 * 5 =", multiply(10, 5));
// const person = { name: "Олена", age: 30, profession: "Інженер" };
// const { name, age, profession } = person;
// const info = `Користувач: ${name}, Вік: ${age}, Професія: ${profession}`;
// console.log(info);
// const numbers = [1, 2, 3];
// const newNumbers = [ ... numbers, 4, 5];
// console.log("Новий масив:", newNumbers);

// export function greet(name) {
//   console.log(`Привіт, ${name}!`);
// }
// export const add = function(a, b) {
//   return a + b;
// };
"use strict";

import { greet, add, multiply, power, sumAll } from "./utils.js";
import { user, numbers } from "./data.js";

console.log("Модульний код підключено!");

greet("Студент");
console.log("10 + 5 =", add(10, 5));
console.log("10 * 5 =", multiply(10, 5));
console.log("2 ^ 3 =", power(2, 3));
console.log("Сума чисел:", sumAll(1, 2, 3, 4, 5));

const { name, age, city, profession } = user;
const info = `Користувач: ${name}, Вік: ${age}, Місто: ${city}, Професія: ${profession}`;
console.log(info);
document.getElementById("app").innerHTML += `<p>${info}</p>`;

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Об'єднаний масив:", combined);
document.getElementById("app").innerHTML += `<p>Об'єднаний масив: ${combined.join(", ")}</p>`;

const newNumbers = [...numbers, 6, 7];
console.log("Новий масив:", newNumbers);
document.getElementById("app").innerHTML += `<p>Новий масив: ${newNumbers.join(", ")}</p>`;
