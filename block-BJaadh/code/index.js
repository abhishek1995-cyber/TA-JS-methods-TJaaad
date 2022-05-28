// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/
var number = [...numbers];
var newstrings = [...strings];
// - Find the index of `101` in numbers
numbers.indexOf('101');
// - Find the last index of `9` in numbers
numbers.lastIndexOf('9')
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(' ')
// - Add two new words in the strings array "called" and "sentance"
strings.push('called','sentence');
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(' ');
// - Remove the first word in the array (strings)
delete strings[0]
// - Find all the words that contain 'is' use string method 'includes'
let word = newstrings.filter(string => {
 if(string.includes('is')) {
  return string
 }
})
console.log(word)
// - Find all the words that contain 'is' use string method 'indexOf'
let allwords = newstrings.filter(string => {
  if(string.indexOf('is')) {
    return newstrings.indexOf(string.indexOf('is'))
  }
})
// console.log(allwords)
// - Check if all the numbers in numbers array are divisible by three use array method (every)
let divisibleBYthree = numbers.every(number => {
  return number % 3 === 0;
})
console.log(divisibleBYthree)
// -  Sort Array from smallest to largest
function compareFunction(a,b) {
  return a - b;
}
console.log(numbers.sort(compareFunction))
// - Remove the last word in strings
console.log(strings.pop())
// - Find largest number in numbers
let largest = numbers.reduce((acc,num) => {
 return (acc > num ? acc : num )
})
console.log(largest)
// - Find longest string in strings
let longest = newstrings.reduce((acc,string) => {
  return (acc.length > string.length ? acc : string )
 })
 console.log(longest)
// - Find all the even numbers
let even = numbers.filter(num => {
  return num % 2 ===0
})
console.log(even)
// - Find all the odd numbers
let odd = numbers.filter(num => {
  return num % 2 !==0
})
console.log(odd)
// - Place a new word at the start of the array use (unshift)
strings.unshift('hello')
// - Make a subset of numbers array [18,9,7,11]
console.log(number.slice(3,7))
// - Make a subset of strings array ['a','collection']
console.log(newstrings.slice(2,4))
// - Replace 12 & 18 with 1221 and 1881
console.log(number.splice(2, 18, '1221','1881'))
// - Replace words in strings array with the length of the word
let length = newstrings.map(string => {
  return string.length
})
console.log(length, 'length')
// - Find the sum of the length of words using above question
console.log(length.reduce((acc,cv) => {
  acc += cv
  return acc
},0))
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let name = customers.filter(name =>{
 return name.firstname.startsWith('J')
  
})
console.log(name)
// - Create new array with only first name
let firstName =[]
for(let i = 0 ; i < customers.length; i++) {
  firstName.push(customers[i].firstname)
}
console.log(firstName)
// - Create new array with all the full names (ex: "Joe Blogs")
let name2 = customers.map(name =>{
  return `${name.firstname} ${name.lastname}`
   
 })
 console.log(name2)
// - Sort the array created above alphabetically
console.log(name2.sort())
// - Create a new array that contains only user who has at least one vowel in the firstname.
let array = customers.filter(name => {
  if(name.firstname.includes('a','e','i','o','u'))
  return name.firstname
})
