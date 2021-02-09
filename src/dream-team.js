const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(team) {
  if (!Array.isArray(team)){
    return false
  }
  
  let result = ''
  team.forEach(item =>{
    if(typeof(item) === 'string'){
      result += item.trim().split('')[0].toUpperCase()
    }})

    return result.split('').sort().join('')
};
