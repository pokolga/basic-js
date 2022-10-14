const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(digit) {
  const arr = [];
    for (let i=0; i < digit.toString().length; i++) {
        const arrDigit = digit.toString().split("");
        arrDigit.splice(i,1);
        arr.push(+arrDigit.join(""));
    }
    return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
