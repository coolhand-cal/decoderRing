// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
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

   function  getCoordinates(input) {

    const coordinates = [];
    for (i =0; i < input.length; i+=2){
      const newCoordinate = {};
      while (input.charAt(i)===` `){
        coordinates.push(` `);
        i +=1;
      }
      newCoordinate[`x`] = `${input.charAt(i)}`;
      newCoordinate[`y`] = `${input.charAt(i+1)}`;
      coordinates.push(newCoordinate); 
    }

    return coordinates;

  }
  

  function polyShift(key){
    //take charcode and return coordinates as a string

    if(key === 32) return " "
    let tempCode = key - 96;
    if(key > 105) tempCode -=1;
    const coordinates = []; 

    //get correct coloum
    let coulumn = tempCode % 5;
    if (coulumn === 0) coulumn =5;
    
    //get correct row;
    let testRow = tempCode- 5
    let row = 1;
    while (testRow > 0) {
      row +=1;
      testRow -=5;
    } 
   // const string = Integer.toString(coulumn);
    
    coordinates.push( coulumn.toString());
    coordinates.push( row.toString());
    return coordinates.join("");

  }

  // encode function

  function encodeWord (input){
    const word = input.toLowerCase();

    const wordArray = splitWord(word);

    const result = wordArray.map((letter)=> {
     
      const oldCode = Object.values(letter)[0];
      return polyShift(oldCode);
    
      //takes no action if it is a space " "
      if(oldCode === 32) return " ";
    // sets newcode
    //convert oldCode to newCode
    });
    return result.join("");
  }

  // decode function
function testLength(input){
  const testing = input.split(` `);
  let isValid = true;
  for(index =0; index <testing.length; index++) {
    if (testing[index].length %2 !=0) isValid = false;
  }
  return isValid;
}

 function decodeWord(input, polyKey) {
  if (testLength(input) === false) return false;
    const coordinates = getCoordinates(input);
    const result = coordinates.map((coordinate) => {
      if (coordinate === ` `) return coordinate;
      else {
        return polyKey[coordinate.y -1 ][coordinate.x -1];
      }
    });
    return result.join(``);
  }


  

  function polybius(input, encode = true) {
   
    // your solution code here
    const polyKey = [ [`a`,`b`,`c`,`d`,`e`],[`f`,`g`,`h`,`(i/j)`,`k`], [`l`,`m`,`n`,`o`,`p`], 
    [`q`,`r`,`s`,`t`,`u`], [`v`,`w`,`x`,`y`,`z`]];

    //split word into an array of key value pairs
     if (encode) return encodeWord(input)
     else return decodeWord(input,polyKey);
  

    //map 
  

  }


  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
