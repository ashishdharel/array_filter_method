//To concact two or more array
const a = [1,2,3,4]
const b =[5,6,7,8]
const c = a.concat(b);
console.log(c)

//To concact three array
const d =[1,2,3]
const e =[5,6,7]
const f =[8,9]
const g =d.concat(e,f)
console.log(g);

//To concat array with number
const x =[1,2,3,4]
const y =[2,3,4]
const z = x.concat(y,6,7)
console.log(z)

//To create a dummy array
const i =[1,2,3,4]
const j =i.concat();

j.push(5);
console.log(i)
console.log(j)

// To concat numbers
const m =[1,2,3,4]
const n =m.concat(5,6)
console.log(n);
 