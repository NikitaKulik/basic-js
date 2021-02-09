const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if(date instanceof Date && !isNaN(date)) {
    let mounth = date.getMonth()

    let winter = [11, 0, 1]
    let autumn = [8 ,9, 10]
    let summer = [5, 6, 7]
    let spring = [2, 3, 4]

    if (winter.indexOf(mounth) != -1) {
      return 'winter'
    } else if (autumn.indexOf(mounth) != -1) {
      return 'autumn'
    } else if (summer.indexOf(mounth) != -1) {
      return 'summer'
    } else if (spring.indexOf(mounth) != -1) {
      return 'spring'
    }
  } else if (date == undefined) {
    return 'Unable to determine the time of year!'
  } else {
    throw new Error()
  }
};
