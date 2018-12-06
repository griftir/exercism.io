export class Cipher {
  get characters() {
    return 'abcdefghijklmnopqrstuvwxyz';
  }

  get key() {
    return this._key;
  }

  get shiftArray() {
    return this.createIndexArrayFromString(this.key);
  }

  constructor(key) {
    this._key = this.setkey(key);
  }

  setkey(key) {
    if (key !== undefined) {
      if (key.match(/^[a-z]+$/) !== null) {
        return key;
      }
      throw new Error('Bad key');
    }
    let defaultKey = '';
    for (let i = 0; i < 100; i += 1) {
      defaultKey += this.characters[Math.floor(Math.random() * this.characters.length)];
    }
    return defaultKey;
  }


  createIndexArrayFromString(str) {
    return str.split('').map(char => this.characters.indexOf(char));
  }

  stretchKey(targetLength) {
    const stretchedKey = [];
    while (stretchedKey.length < targetLength) {
      stretchedKey.push(...this.shiftArray);
    }
    return stretchedKey;
  }

  encode(stringToEncode) {
    const stretchedKey = this.stretchKey(stringToEncode.length);
    const encodeArray = this.createIndexArrayFromString(stringToEncode).map((num, idx) => (num + stretchedKey[idx]));
    return encodeArray.reduce((encodedString, num) => encodedString + this.characters[num % 26], '');
  }

  decode(stringToDecode) {
    const stretchedKey = this.stretchKey(stringToDecode.length);
    const decodeArray = this.createIndexArrayFromString(stringToDecode).map((num, idx) => (num - stretchedKey[idx]));
    return decodeArray.reduce((decodedString, num) => decodedString + this.characters[(num + 26) % 26], '');
  }
}
