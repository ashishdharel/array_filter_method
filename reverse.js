//Reverse the array (changes the original array)
const number =[1,2,3,4,5,6]
number.reverse();
console.log(number)

//Using concat and reverse to reverse array without chainging the original
const numbers =[1,2,3,4,5,6,7,8]
const newNumbers =numbers.concat().reverse()
console.log(numbers)
console.log(newNumbers)

//Using spread operator and reversing the array
//spread(...) operator copy all the item from the given array 
const number1 =[1,2,3,4,5,6,7]
const newNumber =[...number1].reverse();
console.log(newNumber)

//Reversing the string
const str ='Coding is fun'

const res =str.split('').reverse().join('')
console.log(res)
