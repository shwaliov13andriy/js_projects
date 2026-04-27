"use strict";

class BaseUser {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name() { return this._name; }
  set name(newName) { if (newName) this._name = newName; }
  get age() { return this._age; }
  set age(newAge) { if (!isNaN(newAge) && newAge > 0) this._age = newAge; }
  display() {
    return `User: ${this._name}, Age: ${this._age}`;
  }
}

class Student extends BaseUser {
  constructor(name, age, speciality) {
    super(name, age);
    this.speciality = speciality;
  }
  display() {
    return `Student: ${this.name}, Age: ${this.age}, Speciality: ${this.speciality}`;
  }
}

class Teacher extends BaseUser {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  display() {
    return `Teacher: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`;
  }
}

function runLibrary() {
  let type = prompt("Type type of user: 'user' or 'admin'");
  if (type !== "user" && type !== "admin") {
    alert("Error: Invalid user type!");
    console.log("Program terminated due to invalid input.");
    return;
  }

  let name = prompt("Type name:");
  let ageInput = prompt("Type age:");
  let age = Number(ageInput);
  let profession = prompt("Type profession:");

  if (isNaN(age) || age <= 0) {
    alert("Error: Age must be more than 0!");
    console.log("Incorrect age input.");
    return;
  }

  class User {
    constructor(name, age, profession) {
      this.name = name;
      this.age = age;
      this.profession = profession;
    }
    display() {
      return `User: ${this.name}, Age: ${this.age}, Profession: ${this.profession}`;
    }
  }

  class Admin extends User {
    constructor(name, age, profession, role) {
      super(name, age, profession);
      this.role = role;
    }
    display() {
      return `Admin: ${this.name}, Age: ${this.age}, Profession: ${this.profession}, Role: ${this.role}`;
    }
  }

  let person;
  if (type === "admin") {
    let role = prompt("Type admin speciality:");
    person = new Admin(name, age, profession, role);
  } else {
    person = new User(name, age, profession);
  }

  alert(person.display());
  console.log(person.display());
}

function runApp() {
  let type = prompt("Type type: 'user', 'student' or 'teacher'");
  if (type !== "user" && type !== "student" && type !== "teacher") {
    alert("Error: Invalid type!");
    console.log("Program terminated due to invalid input.");
    return;
  }

  let name = prompt("Type name:");
  let ageInput = prompt("Type age:");
  let age = Number(ageInput);

  if (isNaN(age) || age <= 0) {
    alert("Error: Age must be a positive number!");
    console.log("Program terminated due to invalid age input.");
    return;
  }

  let person;
  if (type === "student") {
    let speciality = prompt("Type speciality:");
    person = new Student(name, age, speciality);
  } else if (type === "teacher") {
    let subject = prompt("Type subject:");
    person = new Teacher(name, age, subject);
  } else {
    person = new BaseUser(name, age);
  }

  alert(person.display());
  console.log(person.display());
}
