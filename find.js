//will search inside of the array and return the first element for which the callback function returns a truthy value
//return undefine if array donot contain the finding item
//finds the item and return it
 const name =['ashish','aman','sunil','krishna']
 const result =name.find(givenName)
function givenName(item){
    return item === 'aman'
}
console.log(result)

// Using it on array object function
const person=[
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
const res =person.find(item => {
    return item.name === 'sunil'
})
console.log(res)

//
const persons=[
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
 const age = persons.find(myAge).age
 function myAge(item){
    return item.name === 'sunil'

 }
console.log(age)
