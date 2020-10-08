"use strict";

const random = (max, min = 0) => {
  const num = max - min;
  return Math.ceil(Math.random() * num) + min;
};

export default random;
