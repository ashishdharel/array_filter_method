//returns shallow copy of portion of an array
//it won't modify the existing element
const number =[1,2,3,4,5,6]
const numbers = number.slice(1,4);  //(stating index,upto index(not including))
console.log(numbers)

//slicing last 3 items
const number1 = [1,2,3,4,5]
const numbers1 =number1.slice(-3)  //returns last 3 items
console.log(numbers1)

//To slice first
const number2 =[1,2,3,4,5,6,7]
const numbers2 =number2.slice(1) //except the first item
console.log(numbers2)

//To show the first 3 participent
const participent =['ashish','sunil','aman','krishna','arjun']
const winners =participent.slice(0,3)
console.log(winners)