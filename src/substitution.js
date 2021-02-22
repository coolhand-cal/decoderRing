// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function chkIntegrity(key) {
   result = key.reduce((isValid,letter) => {
     if (isValid != true) return isValid;
     let count = 0;
    for (index = 0; index <key.length; index++) {
      if(letter === key[index]) count +=1;
    }
    if (count <= 1) {
      isValid = true;
      return isValid;
    }
    else {
      isValid = false;
      return isValid;
    }
   },true); 
   return result;
  }

  function encodeWord (letters,original,key) {
    return letters.map((letter) => {
      if (letter === ` `) return letter;
      else {
        const index = original.findIndex((thisLetter)=> {
          if(thisLetter === letter) return true;
        });
        return key[index];
      }
    
  });
  }

  function decodeWord (letters,original,key) {
    return letters.map((letter) => {
      if (letter === ` `) return letter;
      else {
        const index = key.findIndex((thisLetter)=> {
          if(thisLetter === letter) return true;
        });
        return original[index];
      }
    
  });
  }

  function substitution(input, alphabet, encode = true) {


    // your solution code here
    
 


    if(alphabet === undefined)  return false;
    if(alphabet.length != 26)  return false;

    
    

    const letters =  input.toLowerCase().split(``);
    const originAlphabet = `abcdefghijklmnopqrstuvwxyz`;
    const original = originAlphabet.split(``);
    const key = alphabet.split(``);

    if(chkIntegrity(key) === false) return false;

    if(encode)result = encodeWord(letters,original,key);
    else result = decodeWord(letters,original,key);

  

    return result.join(``);

  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
