const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
    if (!Array.isArray(matrix) || matrix.length === 0) return false;
    for (let i=0; i < matrix.length; i++)  {
        for (let j=0; j < matrix[0].length; j++)  {
            if (matrix[i][j] === 0) {
                for (let k=i; k < matrix.length; k++) matrix[k][j]=0;
            }
        }
    }
    return matrix.flat().reduce((a,b)=> a + b);
}

module.exports = {
  getMatrixElementsSum
};
