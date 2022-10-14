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
function transform( arr ) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!") ;
    const result = arr.concat();
    
    for (let i=0; i <result.length; i++)
    {  
        if (i === 0 && /prev/.test(result[0])) {
			result.splice(i--,1);  
			continue;
		}
		if (i === result.length-1 && /next/.test(result[result.length-1])) {
			result.splice(i,1);  
			break;
		}
		if (/--discard-next/.test(result[i]) && /prev/.test(result[i+2])) {
			result.splice(i+2,1);  
		}
		switch(result[i])
        {
            case  "--discard-next" : 
                result.splice(i,2);  i -=2; break;
            case  "--discard-prev" :   
  				result.splice(i-- -1,2); break;   
            case  "--double-next" :   console.log(i); 
                result.splice(i,1,result[i+1]); break;
            case  "--double-prev" :   
                result.splice(i,1,result[i-1]);
        }
    }
    return result;
}

module.exports = {
  transform
};
