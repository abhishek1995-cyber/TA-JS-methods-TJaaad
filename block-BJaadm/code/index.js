let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopelName = persons.map(elm => {
  return elm.name
})
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map(elm => {
  return elm.grade
})
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map(elm => {
  return elm.sex
})
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let peoplejp = peopelName.filter(elm =>{
    return elm.startsWith('J') || elm.startsWith('P')
})
console.log(peoplejp,"jp")

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
peopelName.filter(elm =>{
  if (elm.startsWith('A') || elm.startsWith('C')){
   console.log(elm.length)
  }
})
// Log all the filtered male ('M') in persons array
console.log(persons.filter(elm => {
    return elm.sex.startsWith('M')
}))
// Log all the filtered female ('F') in persons array
console.log(persons.filter(elm => {
  return elm.sex.startsWith('F')
}))
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons.filter(elm => {
  if(elm.name.startsWith('C')|| elm.name.startsWith('J')){
    return elm.sex.startsWith('F')
  }
}))
// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter(elm =>{
  return elm % 2 === 0
}))
// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find(elm => {
  return elm.name.startsWith('J')
}))
// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find(elm => {
  return elm.name.startsWith('P')
}))
// Find the first name that starts with 'J', grade is greater than 10 and is a female
persons.find(elm => {
  if(elm.grade > 10 && elm.sex == 'F' ){
  return elm.name.startsWith('J')
  }
})
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(elm => {
  return elm.sex == 'F'
})
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter(elm => {
  return elm.sex == 'M'
})
// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc,cv)=> {
  return acc + cv
},0)
// Find the average grade
peopleGrade.reduce((acc,cv)=> {
  return acc + cv
},0)/peopleGrade.length
// Find the average grade of male 
let male = malePersons.map(elm => {
  return elm.grade
})
let maleavg = male.reduce((acc,cv)=> {
  return acc + cv
},0)/male.length
// Find the average grade of female
let female = femalePersons.map(elm => {
  return elm.grade
})
let femaleavg = female.reduce((acc,cv)=> {
  return acc + cv
},0)/female.length
// Find the highest grade
let highestgrade = peopleGrade.sort((a,b) => a-b).pop()
// Find the highest grade in male
let highestgradeMale = male.sort((a,b) => a-b).pop()
// Find the highest grade in female
let highestgradeFemale = female.sort((a,b) => a-b).pop()
// Find the highest grade for people whose name starts with 'J' or 'P'
let jp = persons.filter(elm =>{
   if(elm.name.startsWith('J') || elm.name.startsWith('P')){
     return elm.grade
   }
})
let pp = jp.sort((a,b)=> a-b).pop()
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log(peopleGrade.sort((a,b)=> a-b ))
// Sort the peopleGrade in descending order
console.log(peopleGrade.sort((a,b)=> b-a ))
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a,b)=> b-a ))
// Sort the array peopelName in ascending `ABCD..Za....z`
console.log(peopelName.sort())
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopelName].sort())
