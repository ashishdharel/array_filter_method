//Creates a new array according to the function

//To find even number in an array
const numbers =[1,2,3,4,5,6]
const even = numbers.filter(Even)
function Even(items){
    return items % 2 === 0;
}
console.log(even);

//To find odd numbers using arrow function
const number =[1,2,3,4,5,6,7,8,9]
const odd = number.filter(items => {
    return items % 2 === 1
})
console.log(odd)

//To filter the adult in array object
const person =[
    {
    name:'ashish',
    age:18
},
{
    name:'aman',
    age:16

},
{
    name:'sunil',
    age:24
}
]
const adult = person.filter(items => {
    return items.age>= 18 
})
console.log(adult)

//using filter to remove all the duplicates
const numbers1 =[1,2,3,1,3,4,6,3,6,9,3,1,4,6,7]
const nums = numbers1.filter((item,index,array) =>{
    return array.indexOf(item) === index
})
console.log(nums)