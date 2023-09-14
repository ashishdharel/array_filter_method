//changes an array by removing or replacing item

//Removing items using splice
const number =[1,2,3,4,5,6]
 const deleted = number.splice(3,3)          //(start,delete count,items to add..)
console.log(deleted)
console.log(number)

//Removing and adding number adding splice
const number1 =[1,2,3,4,5,6,7,8]
number1.splice(2,2,3.5,4.5)
console.log(number1)
