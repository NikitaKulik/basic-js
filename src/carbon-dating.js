const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (parseFloat(sampleActivity) > 0 && typeof sampleActivity == 'string') {
    let k = 0.693/HALF_LIFE_PERIOD;
    let res = Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity));
    let t = Math.ceil(res/k);

    if (t < 0) {
      return false;
    } else {
      return t;
    }
  } else {
    return false
  }
};
