"use strict";

const btn = document.getElementById("btn-kick");
const btn2 = document.getElementById("btn-kick2");

const character = {
  name: "Pikachu",
  defaultHp: 200,
  damage: 200,
  elHp: document.getElementById("health-character"),
  elProgressbar: document.getElementById("progressbar-character"),
  renderHP: renderHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
  changeHP: changeHP,
};

const enemy = {
  name: "Charmander",
  defaultHp: 350,
  damage: 350,
  elHp: document.getElementById("health-enemy"),
  elProgressbar: document.getElementById("progressbar-enemy"),
  renderHP: renderHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
  changeHP: changeHP,
};

btn.addEventListener("click", function () {
  console.log("Thunder jolt");
  character.changeHP(random(20));
  enemy.changeHP(random(20));
});

btn2.addEventListener("click", function () {
  console.log("Roundhouse kick");
  character.changeHP(random(5));
  enemy.changeHP(random(5));
});

function init() {
  console.log("Start game!");
  character.renderHP();
  enemy.renderHP();
}

function renderHP() {
  this.renderHPLife();
  this.renderProgressbarHP();
}

function renderHPLife() {
  this.elHp.innerText = `${this.damage}/${this.defaultHp}`;
}

function renderProgressbarHP() {
  this.elProgressbar.style.width = this.damage / this.defaultHp * 100 + '%';
}

function changeHP(count) {
  if (this.damage < count) {
    this.damage = 0;
    alert(`Бедный ${this.name} проиграл!`);
    btn.disabled = true;
    btn2.disabled = true;
  } else {
    this.damage -= count;
  }

  this.renderHP();
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

init();
