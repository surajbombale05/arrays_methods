let num1=[10,20,30,40,50]
let b=num1.findIndex(function(el,index,array){
    return el>30
})
console.log(b)
//---------------------------------------------------------------------------

let num2=[10,20,60,560,30,40,50]
let b2=num2.findIndex(function(el,index,array){
    return el>30
})
console.log(b2)
//---------------------------------------------------------------------------

let number3=[1,2,3,4,5,6,7,8,9,0,]
let b3=number3.findIndex(function(el,index,array){
    return el>8
})
console.log(b3)
//---------------------------------------------------------------------------

let number4=[1.2,1.8,1.3,1.32,1.09,1.00]
let b4=number4.findIndex(function(el,index,array){
    return el>1.3
})
console.log(b4)
//---------------------------------------------------------------------------

let number5=[12,22,33,44,55,66,77,88,99,09]
let b5=number5.findIndex(function(el,index,array){
    return el>77
})
console.log(b5)
//---------------------------------------------------------------------------