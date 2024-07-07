"use strict";

const random = (max, min = 0) => {
  const num = max - min;
  return Math.ceil(Math.random() * num) + min;
};

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

function showLog(log) {
  const logElement = document.createElement('p');
  logElement.innerText = log;

  const logs = document.querySelector('.logs');
  logs.insertBefore(logElement, logs.children[0]);
}

export {random, generateLog, countBtn, showLog};
