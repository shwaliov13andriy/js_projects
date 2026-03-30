"use strict";

console.log("Converter is set on");
function createConverter(multiplier, offset) {
  return function(value) {
    return value * multiplier + offset;
  };
}

const cToF = createConverter(9/5, 32);  
const fToC = createConverter(5/9, -32 * 5/9);

function runConverter() {
  let temp = Number(prompt("Type tempreture:"));
  let direction = prompt('Type convertion way: "C to F" or "F to C"');

  let result;

  if (direction === "C to F") {
    result = cToF(temp);
    alert(`${temp}°C = ${result.toFixed(2)}°F`);
    console.log(`${temp}°C = ${result.toFixed(2)}°F`);
  } else if (direction === "F to C") {
    result = fToC(temp);
    alert(`${temp}°F = ${result.toFixed(2)}°C`);
    console.log(`${temp}°F = ${result.toFixed(2)}°C`);
  } else {
    alert("Incorrect convertion root!");
    console.log("Fail.Incorrect root!");
  }
}