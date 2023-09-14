// It is used to add new item in an array and returns new length of array
const number =[1,2,3,4,5]
number.push(6)
console.log(number)

//to add multiply parameter either we can use multiple push or use ( , )
const num =[1,2,3,4,5,6,7]
num.push(8)
num.push(9)
num.push(8,9)
console.log(num) 

//to find length of new array
const numbers = [1,2,3,4,5,6]
const total = numbers.push(7,8)
console.log(total)  //Gives the length of new array
console.log(numbers) 