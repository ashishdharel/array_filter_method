 //Sorting a string
 const names =['liam','jai','ashish','sunil','krishna']
  names.sort();
  console.log(names)

  //Sorting a number array
  const numbers =[13,53,6,3,34,89]
  numbers.sort(compareFunction)
  function compareFunction(a,b){
    // 1. < 0 ...a comes first
    // 2. 0 ... nothing will be changed
    // 3. >0 ...b comes first
    return a-b;  //for ascending order
//  return b-a;   for decending order     
  }
  console.log(numbers)

  //Sorting an array object according to price
  
  const products = [
    {
        name:'Laptop',
        price:10000,
        stock:5,
    },
    {
        name:'Desktop',
        price:15000,
        stock:20,
    },
    {
        name:'Mobile',
        price:5000,
        stock:20,
    }

]
products.sort((a,b)=>{
    return a.price - b.price;  //for ascending order
//  return b.price -a.price;   //for decending order
}

)
console.log(products)

