const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error()
  } 
  
  let arrNew = [];
  for(let item=0; item < arr.length; item++){
    if (arr[item] == '--double-next' && item + 1 < arr.length){
      arrNew.push(arr[item + 1], arr[item + 1])
    } else if (arr[item] == '--double-prev' && arr[item - 2] !== 'discard-next' && item !== 0){
      arrNew.push(arr[item-1])
    } else if (arr[item] == '--discard-next')  {
      item++;
    } else if (arr[item] == '--discard-prev' && arr[item-2] !== '--discard-next' && item !== 0){
      arrNew.pop(arr[item-1])
    } else if (arr[item] != '--discard-prev' && arr[item] != '--double-prev' && 
               arr[item] != '--discard-next' && arr[item] != '--double-next') {
      arrNew.push(arr[item])}
    }
    
  return arrNew; 
};
