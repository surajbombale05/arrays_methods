// destructive in arrays

let a=["sagar","sahil","shubham"]
console.log(a);
let [a1,a2,a3]=a
console.log(a1);


// destructive in objects
let b={
    firstName:"sahil",
    lastName :"mokal",
    rollNo   :"2"
}
console.log(b);
let {
 rollNo:c3
}=b
console.log(c3)

//*** output   ** */

// (3) ['sagar', 'sahil', 'shubham']
// sagar
// destructure.js:6
// {firstName: 'sahil', lastName: 'mokal', rollNo: '2'}
// 2