const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const res = []
    
  if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!")
  }
  
  const clonedArray = [...arr]


  for (let i = 0; i < clonedArray.length; i++) {
    if (clonedArray[i] === '--discard-prev') {
        if (res[res.length - 1] && clonedArray[i-1] !=='removed') {
            res.pop()
        }
    } else if (clonedArray[i] === '--discard-next') {
        if (clonedArray[i+1]) {
            clonedArray[i+1] = 'removed'
            i++
        }
    } else if (clonedArray[i] === '--double-next') {
        if (clonedArray[i+1]) {
            res.push(clonedArray[i + 1])
        }
    } else if (clonedArray[i] === '--double-prev') {
        if (res[res.length - 1] && clonedArray[i-1] !=='removed') {
            res.push(clonedArray[i - 1])
        }
    } else {
        res.push(clonedArray[i])
    }
  }
  
  return res
}

module.exports = {
  transform
};
