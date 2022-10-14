const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(dns) {
    if (!Array.isArray(dns)) return false;
	if (dns.length === 0) return {};

    const newArr = [];
    dns.forEach((item) => {
        let tmp = item.split(".").reverse();
        while (tmp.length > 0)
        {
            newArr.push("."+tmp.join("."));
            tmp.pop();
        }
    })
    newArr.sort();

    let stat = [newArr[0],1];
    const result = {};
    for (let i=1; i < newArr.length; i++) {
        if (newArr[i] === stat[0]) {
            stat[1]++;
        } else  {
            result[stat[0]] = stat[1];
            stat[0] = newArr[i];
            stat[1] = 1;
        }
    }
    result[stat[0]] = stat[1];

 return result;
}

module.exports = {
  getDNSStats
};
