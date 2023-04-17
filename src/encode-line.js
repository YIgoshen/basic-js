const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  const arr = [];
  
  
  if (str === '') return ''
for (let i = 1; i < str.length; i++) {
    if (i === str.length - 1) {
        if (str[i] !== str[i-1] ) {
            if (count === 1) {
              arr.push(str[i-1])
              arr.push(str[i])
            } else {
              arr.push(`${count}${str[i-1]}`)
              arr.push(str[i])
            }
        } else if (str[i] === str[i-1]) {
            count++
            arr.push(`${count}${str[i]}`)
        } 
    }
    else if (str[i] !== str[i-1]) {
        if (count === 1) {
            arr.push(str[i-1])
        } else {
           arr.push(`${count}${str[i-1]}`)
           count = 1
        }
    } else if (str[i] === str[i-1]) {
        count++
    }
}
  
  
  return arr.join('')
}

module.exports = {
  encodeLine
};
