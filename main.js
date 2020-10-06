"use strict";
import Pokemon from "./pokemon.js";
import random from "./utils.js";

const player1 = new Pokemon({
  name: 'Pikachu',
  hp: 500,
  type: 'electric',
  selectors: 'character',
});

const player2 = new Pokemon({
  name: 'Charmander',
  hp: 450,
  type: 'fire',
  selectors: 'enemy',
});

function showLog(log) {
  const logElement = document.createElement('p');
  logElement.innerText = log;

  const logs = document.querySelector('.logs');
  logs.insertBefore(logElement, logs.children[0]);
}

function getElById(id) {
  return document.getElementById(id);
}

function countBtn(count = 6, el) {
  const total = count;
  const innerText = el.innerText;
  el.innerText = `${innerText} (${count}/${total})`;

  return function () {
    count--;
    el.innerText = `${innerText} (${count}/${total})`;
    if (count === 0) el.disabled = true;
    return count;
  };
}

const btn = getElById("btn-kick");
const btn2 = getElById("btn-kick2");

let btnCountJolt = countBtn(6, btn);
btn.addEventListener("click", function () {
  btnCountJolt();
  player1.changeHP(random(60, 20), function (count) {
    console.log('Some change after change HP ' + count);
    showLog(generateLog(player1, player2, count));
  });
  player2.changeHP(random(60, 20), function (count) {
    console.log('Some change after change HP ' + count);
    showLog(generateLog(player2, player1, count));
  });
});

let btnCountRoundhouse = countBtn(10, btn2);
btn2.addEventListener("click", function () {
  btnCountRoundhouse();
  player1.changeHP(random(10), function (count) {
    console.log('Some change after change HP ' + count);
    showLog(generateLog(player1, player2, count));
  });
  player2.changeHP(random(10), function (count) {
    console.log('Some change after change HP ' + count);
    showLog(generateLog(player2, player1, count));
  });
});

function generateLog(firstPerson, secondPerson, damage) {
  const progressBarDefendPerson = `[${firstPerson.hp.current}/${firstPerson.hp.total}]`;
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
