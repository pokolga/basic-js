const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( namesOfFiles ) {
    if (!Array.isArray(namesOfFiles)) return false;
    for (let i = 0; i < namesOfFiles.length; i++) {
        let pos = namesOfFiles.indexOf(namesOfFiles[i],i + 1);
        let k = 1;
        while (pos !== -1)  {
            namesOfFiles[pos] = namesOfFiles[i]+`(${k++})`;
            pos = namesOfFiles.indexOf(namesOfFiles[i],i + 1);
        }
    }
    return namesOfFiles;
}

module.exports = {
  renameFiles
};
