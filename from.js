//creates a new shallow copy of aarray or array like iterable object
const str ='1234567'
const res =Array.from(str,mapFn)
function mapFn(item){
    return Number(item)
}
console.log(res)

//using arrow function in above code
const string ='1234567'
const result =Array.from(string, item =>{
    return  Number(item)
})

console.log(res)

//using Number directly
const strings ='1234567'
const results =Array.from(strings,Number)

console.log(res)

//Using from to remove duplicated value
const numbers =[1,2,3,4,1,2,4,5,6,7,3,6,9,8];
const now =Array.from(new Set(numbers))
console.log(now)

//string
const name =['ashish','aman','sunil','ashish','krishna','aman']
const remove =Array.from(new Set(name))
console.log(remove)