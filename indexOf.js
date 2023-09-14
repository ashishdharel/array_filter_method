//return the first index where given item can be found
const name =['ashish','sunil','krishna','aman']
console.log(name.indexOf('sunil'));

//finding the index and changing it
const names =['ashish','sunil','krishna','aman']
const idx = names.indexOf('sunil')
names[idx] ='arjun';
console.log(names)

//it will display index -1 if there is no item we are searching for
const name1 =['ashish','sunil','krishna','aman']
const indx = name1.indexOf('arjun')
//console.log(indx)
if(indx > -1){
    console.log("yey,we have arjun")
}else{
    console.log("So sad..")
}

//Using last indexOf to find the last index if we have multiple items
const name2 =['ashish','sunil','krishna','aman','sunil']
console.log(name2.lastIndexOf('sunil')) 
