"use strict";

class Selectors {
  constructor(name) {
    this.elHp = document.getElementById(`health-${name}`);
    this.elProgressbar = document.getElementById(`progressbar-${name}`);
    this.elImg = document.getElementById(`sprite-${name}`);
    this.elName = document.getElementById(`name-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor({name, hp, type, selectors, attacks = [], img}) {
    super(selectors);

    this.name = name;
    this.hp = {
      current: hp,
      total: hp,
    };
    this.type = type;
    this.attacks = attacks;
    this.img = img;
    this.renderSprite();
    this.renderName();
    this.renderHP();
  }

  changeHP = (count, cb) => {
    this.hp.current -= count;

    if (this.hp.current <= 0) {
      this.hp.current = 0;
    }

    this.renderHP();
    cb && cb(count);
  };

  renderHP = () => {
    this.renderHPLife();
    this.renderProgressbarHP();
  };

  renderHPLife = () => {
    const {elHp, hp: {current, total}} = this;
    elHp.innerText = `${current}/${total}`;
  };

  renderProgressbarHP = () => {
    const {hp: {current, total}, elProgressbar} = this;
    const procent = current / (total / 100);
    elProgressbar.style.width = `${procent}%`;
    if (procent < 60 && procent > 20) {
      elProgressbar.classList.add('low');
    } else if (procent < 20) {
      elProgressbar.classList.add('critical');
    } else {
      elProgressbar.classList.remove('low', 'critical');
    }
  };

  renderSprite = () => {
    const {img, elImg, name} = this;
    elImg.src = img;
    elImg.alt = name;
  };

  renderName = () => {
    const {name, elName} = this;
    elName.innerText = name;
  };
}

export default Pokemon;
