// find Array

let number=[10,20,30,40,50]
let a=number.find(function(el,index,array){
    return el>30
})
console.log(a)

// Array findindex

let num1=[10,20,30,40,50]
let b=num1.findIndex(function(el,index,array){
    return el>30
})
console.log(b)

//  some array

let num2=[10,20,30,40,50]
let c=num2.some(function(el,index,array){
    return el>30
})
console.log(c)

//  every array

let num4=[10,20,30,40,50]
let d=num4.every(function(el,index,array){
    return el>30
})
console.log(d)

// 