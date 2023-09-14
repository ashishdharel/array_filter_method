//Find the item and return its index.same as find method but return index instead
const numbers =[1,2,3,4,5,6]
const index =numbers.findIndex(myFind)
function myFind(item){
    return item === 3
}
console.log(index)

//finding index of string
const str =['ashish','sunil','krishna','aman']
const result = str.findIndex(myStr)
function myStr(item){
    return item === 'sunil'
}
console.log(result)
