let num2=[10,20,30,40,50]
let c=num2.some(function(el,index,array){
    return el>30
})
console.log(c)
//-------------------------------------------------------------------------------

let num3=[10,20,30,40,50]
let c3=num3.some(function(el,index,array){
    return el<30
})
console.log(c3)
//-------------------------------------------------------------------------------

let num4=[100,200,300,400,500]
let c4=num4.some(function(el,index,array){
    return el>600
})
console.log(c4)
//-------------------------------------------------------------------------------

let num5=[1,2,3,4,5,6,7,8,9,0]
let c5=num5.some(function(el,index,array){
    return el<-1
})
console.log(c5)
//-------------------------------------------------------------------------------

let num6=[1.01,2.02,3.03,4.04,5.05]
let c6=num6.some(function(el,index,array){
    return el=1.05
})
console.log(c6)
//-------------------------------------------------------------------------------