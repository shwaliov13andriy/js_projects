"use strict";
//тут я створив класи
class PersonalInfo {
  constructor(name, age, contacts) {
    this.name = name;
    this.age = Number(age);
    this.contacts = contacts;
  }
  get info() {
    return `${this.name}, ${this.age} років, Контакти: ${this.contacts}`;
  }
}
class Point{
  constructor(location){
    this.location = Number("-5,1")
  }
}
return `${this.location}`;
class Experience {
  constructor(company, role, years) {
    this.company = company;
    this.role = role;
    this.years = years;
  }
  get info() {
    return `${this.role} у ${this.company} (${this.years} років)`;
  }
}

class Education {
  constructor(institution, degree) {
    this.institution = institution;
    this.degree = degree;
  }
  get info() {
    return `${this.degree}, ${this.institution}`;
  }
}

class Skills {
  constructor(skills) {
    this.skills = skills;
  }
  get info() {
    return this.skills.join(", ");
  }
}

class Resume {
  constructor(personalInfo, experience, education, skills) {
    this.personalInfo = personalInfo;
    this.experience = experience;
    this.education = education;
    this.skills = skills;
  }
  display() {
    const container = document.getElementById("resumeOutput");
    container.innerHTML = `
      <h2>CV</h2>
      <p><strong>Дані:</strong> ${this.personalInfo.info}</p>
      <p><strong>Досвід роботи:</strong> ${this.experience.info}</p>
      <p><strong>Освіта:</strong> ${this.education.info}</p>
      <p><strong>Навички:</strong> ${this.skills.info}</p>
    `;
  }
}
//тут зробив функції 
function collectData() {
  try {
    const name = prompt("Введіть ім'я:");
    const age = prompt("Введіть вік:");
    if (isNaN(Number(age))) throw new Error("Вік має бути числом!");
    const contacts = prompt("Введіть контакти:");

    const company = prompt("Місце роботи:");
    const role = prompt("Посада:");
    const years = prompt("Скільки років працювали:");

    const institution = prompt("Навчальний заклад:");
    const degree = prompt("Ступінь/спеціальність:");

    const skills = prompt("Навички (через кому):").split(",").map(s => s.trim());

    const personalInfo = new PersonalInfo(name, age, contacts);
    const experience = new Experience(company, role, years);
    const education = new Education(institution, degree);
    const skillsObj = new Skills(skills);

    const resume = new Resume(personalInfo, experience, education, skillsObj);
//зберігає у localstorage
    localStorage.setItem("resume", JSON.stringify(resume));

    return resume;
  } catch (error) {
    alert("Помилка: " + error.message);
  }
}

function loadResume() {
  const data = localStorage.getItem("resume");
  if (!data) {
    alert("Резюме ще не створено!");
    return null;
  }
  const obj = JSON.parse(data);
  return new Resume(
    new PersonalInfo(obj.personalInfo.name, obj.personalInfo.age, obj.personalInfo.contacts),
    new Experience(obj.experience.company, obj.experience.role, obj.experience.years),
    new Education(obj.education.institution, obj.education.degree),
    new Skills(obj.skills.skills)
  );
}
//події
document.getElementById("createResume").addEventListener("click", () => {
  const resume = collectData();
  if (resume) resume.display();
});

document.getElementById("editResume").addEventListener("click", () => {
  const resume = loadResume();
  if (resume) {
    alert("редагування: введіть нові дані");
    const newResume = collectData();
    if (newResume) newResume.display();
  }
});
//тут зробив автозавантаження
const savedResume = loadResume();
if (savedResume) savedResume.display();
