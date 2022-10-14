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
	if (str.length === 0) return "";
    let result = "";
    let tmp = [str[0],1];
    for (let i = 1; i < str.length; i++)  {
        if (str[i] === tmp[0])  {
            tmp[1]++;
        } else {
            result += ((tmp[1]===1)?"":tmp[1]) + tmp[0];
            tmp = [str[i],1];
        }
    }
    result += ((tmp[1]===1)?"":tmp[1]) + tmp[0];
    return result;
}

module.exports = {
  encodeLine
};
