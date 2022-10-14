const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
    if (matrix.length === 0) return false;
	const calcShip = (k,l,matrix) =>  {
		let sum = 0;
		for (let i=k-1; i<=k+1; i++) {   
			if (i<0 || i > matrix.length-1) continue;
			for (let j=l-1; j<=l+1; j++) {   
				if (j<0) continue;
				if(matrix[i][j] && !(i==k && j==l)) sum++;
			}
		}
		return sum;
	}
	
    const columns = matrix[0].length;
    const result = [];
    for (let i=0; i<matrix.length; i++) {
        result[i] = [];
        for (let j=0; j<columns; j++)  {  
            result[i][j] = calcShip(i,j,matrix);
        }   
    }
   return result; 
}
module.exports = {
  minesweeper
};
