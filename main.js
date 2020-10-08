"use strict";

import Pokemon from "./pokemon.js";
import {random, generateLog, countBtn, showLog} from "./utils.js";
import {pokemons} from "./pokemons.js";

const control = document.querySelector('.control');

const start = document.createElement('button');
start.classList.add('button');
start.innerText = 'START GAME';
control.appendChild(start);
start.addEventListener('click', () => {
  startGame();
  start.remove();
});

const reset = document.createElement('button');
reset.classList.add('button');
reset.innerText = 'RESET GAME';
reset.addEventListener('click', () => {
  resetGame();
});

function resetGame() {
  const logs = document.querySelector('.logs');
  logs.innerHTML = '';
  const allButtons = document.querySelectorAll('.control .button');
  allButtons.forEach(item => item.remove());
  startGame();
}

function startGame() {
  control.prepend(reset);
  const character = pokemons[random(0, 5)];
  let enemy = pokemons[random(0, 5)];

  let player1 = new Pokemon({
    ...character,
    selectors: 'player1',
  });

  let player2 = new Pokemon({
    ...enemy,
    selectors: 'player2',
  });

  player1.attacks.forEach(item => {
    const btn = document.createElement('button');
    btn.classList.add('button');
    btn.innerText = item.name;
    let btnCount = countBtn(item.maxCount, btn);
    btn.addEventListener('click', () => {
      btnCount();
      player2.changeHP(random(item.maxDamage, item.minDamage), (count) => {
        showLog(generateLog(player2, player1, count));
      });

      player1.changeHP(random(player2.attacks[0].maxDamage, player2.attacks[0].minDamage), (count) => {
        showLog(generateLog(player1, player2, count));
      });
      if (player2.hp.current <= 0) {
        alert(`В этом поединке одержал победу ${player1.name}. Продолжаем!`);
        enemy = pokemons[random(0, 5)];
        player2 = new Pokemon({
          ...enemy,
          selectors: 'player2',
        });
      } else if (player1.hp.current <= 0) {
        alert(`Вы проиграли. Попробуйте еще раз...`);
        resetGame();
      }

    });
    control.appendChild(btn);
  });
}
