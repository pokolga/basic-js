const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  if (!Array.isArray(members) || members.length === 0) return false;
    
    const resultArr = members.map((currentElem)=>{
        if (typeof currentElem === "string") return (currentElem.trim())[0].toUpperCase();
    })
    
    return resultArr.sort().join("");
}

module.exports = {
  createDreamTeam
};
