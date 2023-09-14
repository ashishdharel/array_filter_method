//arrayName.forEach(item,index,array)
//changes the same array
const number = [1,2,3,4,5]
number.forEach(myFunction)
function myFunction(item,index,array){
console.log(item) 
}

//Using forEach
const numbers =[1,2,3,4,5]
numbers.forEach(myConsole)
function myConsole(item,index){
   console.log('a['+index +'] = '+item) 
}

//Changing upper code into arrow function
const numbers1 =[1,2,3,4,5]
numbers1.forEach((item,index) => {console.log('a['+index +'] = '+item) })

//Using forEach to find the sum of numbers from array
const numbers2 =[1,2,3,4,5]
let sum = 0;
numbers2.forEach(items => {
    sum = sum + items
})
console.log(sum);

//upper code alternative
const numbers3 =[1,2,3,4,5,6,7]
let sum1 = 0;
numbers3.forEach(items => { sum1 += items})     //sum = sum + items
console.log(sum1)

//To check how many times the letter repeats
const letters =['a','b','c','a','c','d','e','a','e','f','c','b','d']
let count = {};
letters.forEach(item =>{
    if(count[item]){
        count[item]++;
    }else{
        count[item] = 1;
    }
} )
console.log(count)