//Execute callback function in every element of array and return one single output value
const numbers =[1,2,3,4,5,6]
const total = numbers.reduce(Sum,0);  //(callback function ,initial value) (calback function)Default initial value will be 0
function Sum(accumulator,item,index,array){
    return accumulator + item;
} 
console.log(total)

//To find maximum from an array
const numbers1 =[1232,123,245,8745,2457,9708,3465,9424]
const max = numbers1.reduce(callBack,-Infinity)
function callBack(accumulator,item){
   if (accumulator > item){
    return accumulator
   }
   else{
    return item
   }
}
console.log(max)

//To find minimum from an array
const numbers2 =[1232,123,245,8745,2457,9708,3465,9424]
const min = numbers2.reduce(callback,Infinity)
function callback(accumulator,item){
   if (accumulator > item){
    return item
   }
   else{
    return accumulator
   }
}
console.log(min)

//Using reduce to find total value in an array object
const store = [
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
const totalValueStore = store.reduce((acc,item)=>{
    return acc + (item.price * item.stock)},0
) 
console.log(totalValueStore)