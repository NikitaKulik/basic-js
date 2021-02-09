const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let x = 2 ** disksNumber -1;
  let d = x / (turnsSpeed / 3600);
  let y = Math.floor(d);

  return {turns: x, seconds: y };
};
