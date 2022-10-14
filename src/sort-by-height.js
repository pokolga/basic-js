const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
     if (!Array.isArray(arr)) return false;

    const posOfMinus1 = [];
    let pos = 0;
    while ( arr.indexOf(-1,pos) > -1)
    {
        pos = arr.indexOf(-1,pos);
        posOfMinus1.push(pos++);
    }
    
    const result = arr.filter((item) => item !== -1)
    result.sort((a, b) => a - b);
    posOfMinus1.forEach((pos) => result.splice(pos,0,-1));
    return result;
}

module.exports = {
  sortByHeight
};
