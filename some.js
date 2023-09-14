//returns the truthy value if atleast one item is tru for the callback function
const number =[1,2,3,4,6,7]
const result = number.some(item =>{
    return item > 4
})
console.log(result)

//return false if no item meet the condition
const numbers =[1,2,3,4]
const results = numbers.some(item =>{
    return item > 4
})
console.log(results)

//
const person=[
    {
      name :'ashish', 
      age :26 
    },
    {
        name :'sunil', 
        age :16 
    },
    {
        name :'aman', 
        age :20    

    }
]
const result1 =person.some(item => {
    return item.age >=18
})
console.log(result1)