let number=[10,20,30,40,50];
let a=number.map(function(el,index,array){
    return el+5
})
console.log(a)

//-------------------------------------------------------------------------

let flowers=['rose','lotus','lily','sunflower','jasmine'];
let b=flowers.map(function(el,index,array){
    return el+' mango'
})
console.log(b)

//-------------------------------------------------------------------------

let fruits=['mango','guava','apple','papaya','pineapple'];
let c=fruits.map(function(el,index,array){
    return el+' berry'
})
console.log(c)

//---------------------------------------------------------------------------

let number1=[23,45,67,89,12,23];
let d=number1.map(function(el,index,array){
    return el+10
})
console.log(d)

//----------------------------------------------------------------------------

let cars=['bollero','thar','safari','bugati','audi'];
let e=cars.map(function(el,index,array){
    return el+' car'
})
console.log(e)