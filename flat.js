//create a new array with all the sub array concatinating 
const arr =[1,[2,[3,[4,5]]]]
// const newArr = arr.flat(depth)  merge 1 array by default
const newArr = arr.flat(3) //merge 3 array
// const newArr =arr.flat(Infinity);  merge all the array into single 
console.log(newArr)