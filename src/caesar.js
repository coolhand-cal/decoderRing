// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function  splitWord(word) {

    const letters = [];
    for (i =0; i < word.length; i++){
      const newLetter = {};
      newLetter[`${word.charAt(i)}`] = word.charCodeAt(i);
      letters.push(newLetter); 
    }

    return letters;

  }


  function caesar(input, shift, encode = true) {

    
    
    if (input === undefined) return "No String Provided"
    const theWord = input.toLowerCase();
    if( shift ===0 || shift >25 || shift <-25 ) return false;

    let shiftValue=0;
    if(encode) shiftValue = shift;
    else shiftValue = -shift;

    // your solution code here
    const wordArray = splitWord(theWord);
    const result = wordArray.map((letter)=> {
     
      const oldCode = Object.values(letter)[0];
      //takes no action if it is a space " "
      if(oldCode === 32) return String.fromCharCode(oldCode);
      // sets newcode
      let newCode = oldCode +shiftValue;

      //handle special characters
      if (oldCode <90 || oldCode >122) return String.fromCharCode(oldCode);
      if (oldCode >90 && oldCode <97) return String.fromCharCode(oldCode);

      //adjusts for capital letters
      if (newCode < 97) newCode = newCode + 26
      if (newCode > 122) newCode = newCode -26;
      
    
      const newLetter = String.fromCharCode(newCode);


      return newLetter;
    });


   
    return result.join('');
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
