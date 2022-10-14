const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
	constructor (direct  = true){
		this.direct  = direct;
		this.alphabeth = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
	}
	
  encrypt(message = null, key = null) {
    //throw new NotImplementedError('Not implemented');
    if (message === null || key === null) throw new Error("Incorrect arguments!");
	message = message.toUpperCase();
	key = key.toUpperCase();
	let newKey = key.repeat(Math.ceil(message.length / key.length)).slice(0,message.length);
	
	let output = "";
	for (let i = 0, j = 0; i < message.length; i++, j++){
		
		const letter = message[i]; 
		if (this.alphabeth.indexOf(letter) === -1) {
			output += letter;
			j--;
			continue;
		}
		const keyLet = newKey[j];
		const curAlpha = this.alphabeth.slice(this.alphabeth.indexOf(keyLet)) + this.alphabeth.slice(0,this.alphabeth.indexOf(keyLet));
		console.log(curAlpha);
		output += curAlpha[this.alphabeth.indexOf(letter)].toUpperCase();
	}
	return (this.direct)? output : output.split('').reverse().join('');
	
  }
  decrypt(encryptedMessage  = null, key = null) {
    //throw new NotImplementedError('Not implemented');
    if (encryptedMessage === null || key === null) throw new Error("Incorrect arguments!");
	encryptedMessage = encryptedMessage.toUpperCase();
	key = key.toUpperCase();
	let newKey = key.repeat(Math.ceil(encryptedMessage.length / key.length)).slice(0,encryptedMessage.length);
	
	let output = "";
	for (let i = 0, j = 0; i < encryptedMessage.length; i++, j++){
		const letter = encryptedMessage[i]; 
		if (this.alphabeth.indexOf(letter) === -1) {
			output += letter;
			j--;
			continue;
		}
		const keyLet = newKey[j];
		const curAlpha = this.alphabeth.slice(this.alphabeth.indexOf(keyLet)) + this.alphabeth.slice(0,this.alphabeth.indexOf(keyLet));
		output += this.alphabeth[curAlpha.indexOf(letter)].toUpperCase();
  }
  return (this.direct)? output : output.split('').reverse().join('');
}
}
module.exports = {
  VigenereCipheringMachine
};
