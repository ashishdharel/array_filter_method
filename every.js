//execute a given function on all the array item and return true if all the item return true value
//it returns boolean data either true or false(if any one item donot meet the condition)
const number =[1,2,3,4,5];
const result = number.every(isPositive)
function isPositive(item,index,array){
    return item > 0
}
console.log(result)

//false condition
const numbers =[0,1,2,3,4,5]
const results = numbers.every(item => {
    return item > 0
})
console.log(results)

//check either every object has certain properties
 const person =[
{
    name:'ashish'
 },
 {
    name:'sunil'
 },
 {
    name:'aman'

 },
 {
    surname:'krishna'
 }
];
const result1 =person.every(item =>{ return item.name !== undefined});
console.log(result1)

//check if every item inside array is array
const array =[[1,2,3],[4,5,6,7],[1,4,7,9]]
const res = array.every(arr => Array.isArray(arr))
console.log(res)

//
const arrays =[[1,2,3],[4,5,6,7],'12244']
const res1 = arrays.every(arr => { return Array.isArray(arr)})
console.log(res1)
