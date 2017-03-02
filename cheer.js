#!/usr/bin/env node

// const anLetters = ['a','e','f','h','i','l','m','n','o','r','s','x']

// //function that accepts argument and parses it for each letter
//   //checks letter to see if it needs an a or an article
//   //capitalizes each letter
//   //delays each response by one sec

// const capitalizeArray = (arrayToBeCapitalized) => {
//   let capArray = []
//   for(let elem of arrayToBeCapitalized) {
//     capArray.push(elem.toUpperCase())
//   }
//   return capArray
// }

// const printCheer = (capitalizedCharArray, capitalizedWords) => {
//   for(let elem of )
// }

// const cheer = (stringToBeCheered) => {
//   //breaks string into array of characters
//   let charArray = stringToBeCheered.split('')
//   //capitalizes characters
//   let capCharArray = capitalizeArray(charArray)
//   //makes all caps words string
//   let capWords = capCharArray.join('')
//   printCheer(capCharArray, capWords)
// }




// cheer("john doe")



/**********Joe's code**********/
// Cheer
const first = 'Joe'; //const
const second = 'Shep'; //const

// object literal shorthand
const myName = { first, second } //const

const nodeCheer = ({first, second}) => { // destructuring assignment
  let name = `${first} ${second}`.toUpperCase(); // string template literals, let
  [...first, ...second].forEach( (letter) => { // spread operator and fat arrow function
    let conj = 'aeioufhlmnrsx'.includes(letter.toLowerCase()) ? 'an' : 'a' // `includes()`. Surprise! It's ES6
    console.log(`Gimmmie ${conj} ${letter.toUpperCase()}!`); // string template literals again
  });
  console.log(`What's that spell?\n${name}!`);
};

nodeCheer(myName);
