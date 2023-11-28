let num4=[10,20,30,40,50]
let d=num4.every(function(el,index,array){
    return el>5
})
console.log(d)
//-----------------------------------------------------------------------------

let num5=[10,20,30,40,50]
let d5=num5.every(function(el,index,array){
    return el<91
})
console.log(d5)
//-----------------------------------------------------------------------------

let num3=[100,200,300,400,500]
let d3=num3.every(function(el,index,array){
    return el>150
})
console.log(d3)
//-----------------------------------------------------------------------------

let num2=[15,56,48,35,48,95,23]
let d2=num2.every(function(el,index,array){
    return el>14
})
console.log(d2)
//-----------------------------------------------------------------------------

let num6=[1.3,24,3.56,35.65,0.023,56]
let d6=num6.every(function(el,index,array){
    return el%2==0
})
console.log(d6)
//-----------------------------------------------------------------------------