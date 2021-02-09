const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if(typeof(position) !== 'number' || position < 1 || position > this.chain.length){
      this.chain = []
      throw new Error
    } else {
      this.chain.splice(position-1, 1)
      return this
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },
  finishChain() {
    let chain_str = this.chain.join('~~')
    this.chain = []
    return chain_str
  }
};

module.exports = chainMaker;
