//map method returns the executed function in new array
const number =[1,2,3,4,5]
const doubleNumber =number.map(myfunction)
function myfunction(item,index,array){
    return item * 2
}
console.log(doubleNumber)

//Multiplying the value by index
const numbers  = [1,2,3,4,5,6,7,8]
const multiplyByindex = numbers.map(multiply)
function multiply(item,index){
    return item * index
}
console.log(multiplyByindex)

//Calculating total product value
const products = [
    {
        name:'Laptop',
        price:15000,
        stock:15,
    },
    {
        name:'Desktop',
        price:10000,
        stock:10,
    },
    {
        name:'Mobile',
        price:5000,
        stock:50,
    }

]
totalProductValue = products.map(totalValue)
function totalValue(item){
    return {
        name:item.name,
        TotalValue :item.price * item.stock}
}
console.log(totalProductValue)

//Upper code into array function
const products1 = [
    {
        name:'Laptop',
        price:15000,
        stock:5,
    },
    {
        name:'Desktop',
        price:10000,
        stock:20,
    },
    {
        name:'Mobile',
        price:5000,
        stock:20,
    }

]
totalProductValue1 = products1.map(item =>{
    return {
        name:item.name,
        TotalValue:item.price * item.stock
    }
})

console.log(totalProductValue1)

//Changing string datatype into numbers
const strings =['1','2','3','4','5']
const numbers1 =strings.map(item => {
    return Number(item)
})
console.log(numbers1)

//Alternative of upper code
const strings1 =['1','2','3','4','5','6','7','8']
const numbers2 =strings1.map(Number)
console.log(numbers2)