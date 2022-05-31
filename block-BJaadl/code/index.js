let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(word) {
  return [...words].sort((a,b) => a.length - b.length).pop()
}
// - Convert the above array "words" into an array of length of word instead of word.
words.map(word => {
  return word.length
})
// - Create a new array that only contains word with atleast one vowel.
words.filter(word => {
  if(word.includes('a') ||
  word.includes('e') ||
  word.includes('i') ||
  word.includes('o') ||
  word.includes('u')
  ) {
    return word
  }
})
// - Find the index of the word "rhythm"
console.log(words.indexOf('rhythm'))
// - Create a new array that contians words not starting with vowel.
words.filter(word => {
  if(!(word.startsWith('a') || 
  word.startsWith('e') ||
  word.startsWith('i') ||
  word.startsWith('o') ||
  word.startsWith('u')
  )) {
    return word
  }
})
// - Create a new array that contians words not ending with vowel
words.filter(word => {
  if(!(word.endsWith('a') || 
  word.endsWith('e') ||
  word.endsWith('i') ||
  word.endsWith('o') ||
  word.endsWith('u')
  )) {
    return word
  }
})
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(array) {
  return array.reduce((acc,cv) => acc + cv)
}
console.log(sumArray(numbers))
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
numbers.map((num) => num * 3) 
// - Create a new array that contains only even numbers
numbers.filter(num =>{
  if(num % 2 === 0){
    return num
  }
})
// - Create  a new array that contains only odd numbers.
numbers.filter(num =>{
  if(num % 2 !== 0){
    return num
  }
})
// - Create a new array that should have true for even number and false for odd numbers.
numbers.map(num =>{
  if(num % 2 === 0){
    return true
  } else {
    return false
  }
})
// - Sort the above number in assending order.
function compareFunction(a,b) {
  return a-b
}
console.log(numbers.sort(compareFunction))
// - Does sort mutate the original array?
// yes sort mutate the original array
// - Find the sum of the numbers in the array.

numbers.reduce((acc, cv) => {
  return acc + cv
}) 
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(array) {
  let avg = array.reduce((acc,cv) => acc + cv)/array.length;
  return avg
}
console.log(averageNumbers(numbers))
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(array) {
  let word1 = array.map(word => {
   return word.length
  })
  let avg = word1.reduce((acc,cv) => {
    return acc + cv;
  },0)/word1.length

return avg

}
console.log(averageWordLength(strings))
