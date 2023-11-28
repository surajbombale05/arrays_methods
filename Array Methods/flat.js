let number=[1,2,[3,4,5],6,[2,3,4,5,6]];
let flatnumber=number.flat();
console.log(flatnumber)
// flat is collect all the arrays in taking in the bracket
// ex 1

let a=['sahil','avinash',['suraj','shubham'],'manish','aditya'];
let b=a.flat()
console.log(b)

// fill means start from 2 and up to 4 they print the beside name

//ex 2

let num=['mayur',['shailesh','shubham','avinash'],'suraj'];
let number1=num.flat()
console.log(number1)

// ex 3

let flower=[['rose','sunflower','lily'],'mogra','dhotra'];
let ok=flower.flat()
console.log(ok)

// ex 4

let fruit=['mango',['kiwi','lime','applestone'],'berry'];
let fruits=fruit.flat();
console.log(fruits)

// ex 5

let atm=['stone','rock',['wind','air','hill'],'water','river','sea'];
let mos=atm.flat();
console.log(mos)
