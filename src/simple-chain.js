const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(/* value */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(/* position */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
  }
  // arr: [],
  // getLength() {
  //   return this.arr.length
  // },
  // addLink(value) {
  //     if (!value) {
  //         this.arr.push(`'(  )'`)
  //     }
  //     else {
  //         this.arr.push(`( ${value} )`)
  //     }
    
  //     return this
  // },
  // removeLink(position) {
  //     if (typeof position != 'number' || isNaN(position) || position <= 0 || position > this.arr.length) {
  //         throw Error("You can't remove incorrect link!")
  //     } else {
  //       this.arr.splice(position - 1, 1)  
  //     }
  //     return this
  // },
  // reverseChain() {
  //   this.arr.reverse()
  //   return this
  // },
  // finishChain() {
  //     return this.arr.join('~~')
  // }
};

module.exports = {
  chainMaker
};
