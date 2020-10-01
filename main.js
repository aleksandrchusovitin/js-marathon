"use strict";

function getElById(id) {
  return document.getElementById(id);
}

const btn = getElById("btn-kick");
const btn2 = getElById("btn-kick2");

const character = {
  name: "Pikachu",
  defaultHp: 200,
  damage: 200,
  elHp: getElById("health-character"),
  elProgressbar: getElById("progressbar-character"),
  renderHP,
  renderHPLife,
  renderProgressbarHP,
  changeHP,
};

const enemy = {
  name: "Charmander",
  defaultHp: 350,
  damage: 350,
  elHp: getElById("health-enemy"),
  elProgressbar: getElById("progressbar-enemy"),
  renderHP,
  renderHPLife,
  renderProgressbarHP,
  changeHP,
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
  this.damage -= count;

  const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);

  const logElement = document.createElement('p');
  logElement.innerText = log;

  const logs = document.querySelector('.logs');
  logs.insertBefore(logElement, logs.children[0]);

  if (this.damage <= 0) {
    this.damage = 0;
    alert(`Бедный ${this.name} проиграл!`);
    btn.disabled = true;
    btn2.disabled = true;
  }

  this.renderHP();
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

function generateLog(firstPerson, secondPerson, damage) {
  const progressBarDefendPerson = `[${firstPerson.damage}/${firstPerson.defaultHp}]`;
  const logs = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${damage} HP ${firstPerson.name}:${progressBarDefendPerson}`,
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${damage} HP ${firstPerson.name}:${progressBarDefendPerson}`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${damage} HP ${firstPerson.name}:${progressBarDefendPerson}`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${damage} HP ${firstPerson.name}:${progressBarDefendPerson}`,
    // eslint-disable-next-line no-useless-escape
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${damage} HP ${firstPerson.name}:${progressBarDefendPerson}`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${damage} HP ${firstPerson.name}:${progressBarDefendPerson}`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${damage} HP ${firstPerson.name}:${progressBarDefendPerson}`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника -${damage} HP ${firstPerson.name}:${progressBarDefendPerson}`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${damage} HP ${firstPerson.name}:${progressBarDefendPerson}`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${damage} HP ${firstPerson.name}:${progressBarDefendPerson}`
  ];

  return logs[random(logs.length) - 1];
}

init();
