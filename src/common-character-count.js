const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
    const arr1 = str1.split("");
    const arr2 = str2.split("");
    for (let i=0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            arr1.splice(i--,1);
        }
        else  {
            arr2.splice(arr2.indexOf(arr1[i]),1);
        }
    }
    return arr1.length;
}

module.exports = {
  getCommonCharacterCount
};
