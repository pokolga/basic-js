const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( numb ) {
	
    numb = Math.abs(parseInt(numb));
    if (isNaN(numb)) return false;
	
	const getSum = (numb) => {
		let sum = 0;
		while (numb / 10 > 0){
			sum += numb % 10;
			numb = (numb-numb % 10) /10;
		}
		return sum;
	}
    
    if (getSum(numb) < 10) return getSum(numb);
    return getSumOfDigits(getSum(numb));
}

module.exports = {
  getSumOfDigits
};
