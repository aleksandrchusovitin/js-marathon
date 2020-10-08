"use strict";

class Selectors {
  constructor(name) {
    this.elHp = document.getElementById(`health-${name}`);
    this.elProgressbar = document.getElementById(`progressbar-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor({name, hp, type, selectors}) {
    super(selectors);

    this.name = name;
    this.hp = {
      current: hp,
      total: hp,
    };
    this.type = type;

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
  };
}

export default Pokemon;
