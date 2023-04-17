const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // if (!date || date == null) {
  //   return 'Unable to determine the time of year!'
  // } else if (new Date(date).toString() === 'Invalid Date' || isNaN(date.valueOf()) || isNaN(Date.parse(date) || date.toString().split(' ').length != 7)) {
  //   throw new Error('Invalid date!')
  // }
  // else if (!(date instanceof Date) || isNaN(date) || Object.getOwnPropertyNames(date).length > 0 || Object.prototype.toString.call(date) !== "[object Date]" || !isFinite(date) || isNaN(date.getTime())) {
  //   throw new Error('Invalid date!')
  // } else {
  //   let month = date.getMonth()
  //   if (month < 0 || month > 11) throw new Error('Invalid date!')
  //   console.log('mo', month)
  //   if (month >= 2 && month <= 4) return 'spring'
  //   if (month >= 5 && month <= 7) return 'summer'
  //   if (month >= 8 && month <= 10) return 'autumn'
  //   else return 'winter'
  // }

  // if (!date || date == null || date == 'undefined') {
  //   return 'Unable to determine the time of year!'
  // } else if (new Date(date).toString() !== 'Invalid Date' && !isNaN(date.valueOf()) && !isNaN(Date.parse(date)) && date instanceof Date && !isNaN(date) && !Object.getOwnPropertyNames(date).length > 0 && Object.prototype.toString.call(date) === "[object Date]" && isFinite(date) && !isNaN(date.getTime())) {
  //   let month = date.getMonth()
  //   if (month < 0 || month > 11) throw new Error('Invalid date!')
  //   console.log('mo', month)
  //   if (month >= 2 && month <= 4) return 'spring'
  //   if (month >= 5 && month <= 7) return 'summer'
  //   if (month >= 8 && month <= 10) return 'autumn'
  //   else return 'winter'
  // } else {
  //   throw new Error('Invalid date!')
  // }

  throw new NotImplementedError('Not implemented');
}

module.exports = {
  getSeason
};
