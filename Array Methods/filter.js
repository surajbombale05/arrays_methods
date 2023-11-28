let number=[2,3,4,5,6,7,8];
let b=number.filter(function(el,index,array){
    return el<7
})
console.log(b)

//------------------------------------------------------------------------------

let number1=[2,3,4,5,6,,7,8];
let c=number1.filter(function(el,index,array){
    return el>=4
})
console.log(c)

//----------------------------------------------------------------------------

let number2=[23,32,42,56,66,55,75,85];
let d=number2.filter(function(el,index,array){
    return el<50
})
console.log(d)

//-------------------------------------------------------------------------------

let number3=[100,200,300,400,500];
let e=number3.filter(function(el,index,array){
    return el>121
})
console.log(e)

//-----------------------------------------------------------------------------

let number5=[12.2,34.2,56.90,23.23,10.56];
let j=number5.filter(function(el,index,array){
    return el<56.89
})
console.log(j)