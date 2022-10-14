const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink( value = "" ) {
    this.chain.push((value === null)?"null":value);
	return this;
  },
  removeLink( position ) {
    if (typeof position !== "number" || isNaN(position) || position < 0 || position % 1 !== 0 || this.chain[position-1] === undefined) {
		this.chain = [];
		throw new Error("You can\'t remove incorrect link!");
	}
    this.chain.splice(position-1,1);
    return this;  
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const str = "( " + this.chain.join(" )~~( ") + " )";
    this.chain = [];
    return str;
  }
};

module.exports = {
  chainMaker
};


