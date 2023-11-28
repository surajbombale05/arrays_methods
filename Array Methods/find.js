let number=[10,20,30,40,50]
let a=number.find(function(el,index,array){
    return el>30
})
console.log(a)
//------------------------------------------------------------------------------

let number1=[10,20,30,40,50]
let a1=number1.find(function(el,index,array){
    return el<20
})
console.log(a1)
//------------------------------------------------------------------------------

let number2=[10,20,30,40,50]
let a2=number2.find(function(el,index,array){
    return el>20
})
console.log(a2)
//------------------------------------------------------------------------------

let number3=[11,12,13,14,15,16,17]
let a3=number3.find(function(el,index,array){
    return el>14
})
console.log(a3)
//------------------------------------------------------------------------------

let number5=[10,2.20,3.60,4000,5.980,10.5]
let a5=number5.find(function(el,index,array){
    return el<10.23
})
console.log(a5)
//------------------------------------------------------------------------------