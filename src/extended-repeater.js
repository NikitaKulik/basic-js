const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let add_str = ''
  let str_res = ''
  let separator = (options.separator != undefined) ? options.separator: "+"


  if (options.addition !== undefined) {
    if (options.additionRepeatTimes !== undefined) {
      for(i=0; i<options.additionRepeatTimes; i++) {
        if (options.additionSeparator !== undefined && i != options.additionRepeatTimes - 1) {
          add_str += options.addition + options.additionSeparator
        } else {
          add_str += options.addition
        }
      }
    } else {
      add_str = options.addition
    }
  }

  if (options.repeatTimes !== undefined) {
    for(i=0; i<options.repeatTimes; i++) {
      if (i != options.repeatTimes - 1) {
        str_res += str + add_str + separator
      } else {
        str_res += str + add_str
      }
    }
  } else {
    str_res = str + add_str
  }

  return str_res
};
  