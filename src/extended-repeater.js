const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options={}) {
  str += "";
        options.repeatTimes = +options.repeatTimes || 1;
        options.separator = (options.separator === undefined) ? "+" : String(options.separator);
        options.addition = (options.addition === undefined) ? "": String(options.addition);
        options.additionRepeatTimes = +options.additionRepeatTimes || 1;
        options.additionSeparator = (options.additionSeparator === undefined) ? "|" : String(options.additionSeparator);
        
        let result = str;
        for (let i = 0; i<options.additionRepeatTimes; i++)
        {
            result +=  options.addition + options.additionSeparator;
        }
        if (options.additionRepeatTimes){
            result = result.substring(0,result.lastIndexOf(options.additionSeparator));
        }
       
        if (options.repeatTimes>=0){
            result += options.separator;
            result = result.repeat(options.repeatTimes);
            result = result.substring(0,result.lastIndexOf(options.separator));
        }
            
        return result;
}

module.exports = {
  repeater
};