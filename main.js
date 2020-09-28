"use strict";

const btn = document.getElementById("btn-kick");
const btn2 = document.getElementById("btn-kick2");

const character = {
  name: "Pikachu",
  defaultHp: 100,
  damage: 100,
  elHp: document.getElementById("health-character"),
  elProgressbar: document.getElementById("progressbar-character"),
};

const enemy = {
  name: "Charmander",
  defaultHp: 100,
  damage: 100,
  elHp: document.getElementById("health-enemy"),
  elProgressbar: document.getElementById("progressbar-enemy"),
};

btn.addEventListener("click", function () {
  console.log("Thunder jolt");
  changeHP(random(20), character);
  changeHP(random(20), enemy);
});

btn2.addEventListener("click", function () {
  console.log("Roundhouse kick");
  changeHP(random(5), character);
  changeHP(random(5), enemy);
});

function init() {
  console.log("Start game!");
  renderHP(character);
  renderHP(enemy);
}

function renderHP(person) {
  renderHPLife(person);
  renderProgressbarHP(person);
}

function renderHPLife(person) {
  person.elHp.innerText = `${person.damage}/${person.defaultHp}`;
}

function renderProgressbarHP(person) {
  person.elProgressbar.style.width = `${person.damage}%`;
}

function changeHP(count, person) {
  if (person.damage < count) {
    person.damage = 0;
    alert(`Бедный ${person.name} проиграл!`);
    btn.disabled = true;
    btn2.disabled = true;
  } else {
    person.damage -= count;
  }

  renderHP(person);
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

init();
