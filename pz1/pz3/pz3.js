"use strict";
    class User {
      constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
      }
      display() {
        return `User: ${this.name}, Age: ${this.age}, Proffesion: ${this.profession}`;
      }
    }

    class Admin extends User {
      constructor(name, age, profession, role) {
        super(name, age, profession);
        this.role = role;
      }
      display() {
        return `Admin: ${this.name}, Вік: ${this.age}, Proffesion: ${this.profession}, Role: ${this.role}`;
      }
    }

    function runLibrary() {
      let type = prompt("Type type of user: 'user' or 'admin'");
      let name = prompt("Type name:");
      let age = Number(prompt("Type age:"));
      let profession = prompt("Type proffesion:");

      if (isNaN(age) || age <= 0) {
        alert("Error: age must be more than 0!");
        console.log("Incorrect input!.");
        return;
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

    class BaseUser {
      constructor(name, age) {
        this._name = name;
        this._age = age;
      }
      get name() { return this._name; }
      set name(newName) { if (newName) this._name = newName; }
      get age() { return this._age; }
      set age(newAge) { if (newAge > 0) this._age = newAge; }
      display() {
        return `User: ${this._name}, Age: ${this._age}`;
      }
    }

    class Student extends BaseUser {
      constructor(name, age, specialyty) {
        super(name, age);
        this.specialyty = this.specialyty;
      }
      display() {
        return `Student: ${this.name}, Age: ${this.age}, Speciality: ${this.specialyty}`;
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

    function runApp() {
      let type = prompt("Type type: 'user', 'student' or 'teacher'");
      let name = prompt("Type name:");
      let age = Number(prompt("Type age"));

      if (isNaN(age) || age <= 0) {
        alert("Error: Age must be more than 0!");
        console.log("Incorrect age input.");
        return;
      }

      let person;
      if (type === "student") {
        let specialyty = prompt("Type speciality:");
        person = new Student(name, age, specialyty);
      } else if (type === "teacher") {
        let subject = prompt("Type subject:");
        person = new Teacher(name, age, subject);
      } else {
        person = new BaseUser(name, age);
      }

      alert(person.display());
      console.log(person.display());
    }

